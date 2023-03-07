import Heading from '@/components/typography/Heading';
import HCaptcha from '@hcaptcha/react-hcaptcha'
import Head from 'next/head';
import Label from '@/components/input/Label';
import BaseInput from '@/components/input/Base';
import Primary from '@/components/buttons/Primary';
import { useState, useRef } from 'react';
import { validateEmail, validateString } from '@/utils/regex';
import Card from '@/components/layouts/Card';
import FormSubmitMessage from '@/components/FormSubmitMessage';
import Page from '@/components/layouts/Page';
import styles from './contact.module.scss'

const validations = (string: string, type: string | 'email') => {
  const validations = [validateString]

  if (type == 'email') {
    validations.push(validateEmail)
  }

  return validations.some(validation => !validation(string))
}

const formFields = [
  'firstName',
  'lastName',
  'email',
  'subject',
  'message',
] as const

type FormFields = typeof formFields[number]

const originalErrorsStates: Record<FormFields, boolean> = Object.freeze({
  firstName: false,
  lastName: false,
  email: false,
  subject: false,
  message: false,
})

const originalInputsStates: Record<FormFields, string> = Object.freeze({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
})

export default function Contact() {
  const [formSending, setFormSending] = useState(false)
  const [showFormErrorMessage, setShowFormErrorMessage] = useState(false)
  const [showFormSuccessMessage, setShowFormSuccessMessage] = useState(false)
  const [errors, setError] = useState({ ...originalErrorsStates })
  const [inputs, setInput] = useState({ ...originalInputsStates })
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const captchaRef = useRef<HCaptcha | null>(null)

  const resetFormState = () => {
    setError({ ...originalErrorsStates })
    setInput({ ...originalInputsStates })
    setFormSending(false)

    if (captchaRef.current?.resetCaptcha) {
      captchaRef.current?.resetCaptcha()
    }
  }

  const submitForm = async () => {
    setFormSending(true)

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: inputs.email,
        fullName: [inputs.firstName, inputs.lastName].join(' '),
        subject: inputs.subject,
        message: inputs.message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })

    const { error } = await res.json()
    if (error) {
      console.error(error)
      setShowFormErrorMessage(true)
    } else {
      setShowFormSuccessMessage(true)
    }

    resetFormState()
  }

  const handleOnSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (formSending) return

    const newErrors = Object.entries(inputs)
      .reduce((acc, [key, value]) => ({
        ...acc,
        [key]: validations(value, key)
      }), errors)

    await setError(newErrors)

    const formHasErrors = Object.values(newErrors).some(e => e)

    if (!formHasErrors) {
      if (captchaToken == null) {
        if (captchaRef.current?.execute) {
          captchaRef.current?.execute()
        }
      } else {
        submitForm()
      }
    }
  }

  const handleOnChange = (field: FormFields) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...inputs,
      [field]: event.target.value
    })

    if (errors[field]) {
      setError({
        ...errors,
        [field]: validations(inputs[field], field)
      })
    }

    if (showFormErrorMessage) {
      setShowFormErrorMessage(false)
    }

    if (showFormSuccessMessage) {
      setShowFormSuccessMessage(false)
    }
  }

  return (
    <>
      <Head>
        <title>Danny's IO | Contact</title>
        <meta name="description" content="Contact Daniel (Danny) Romero Web Developer for your web projects." />
      </Head>
      <Page>
        <Heading className={styles.heading}>Contact</Heading>

        <div className={styles.cardContainer}>
          <Card>
            <form onSubmit={handleOnSubmit}>
              <Label value='First Name *'>
                <BaseInput
                  required
                  entryType='text'
                  autoComplete='given-name'
                  error={errors.firstName}
                  value={inputs.firstName}
                  onChange={handleOnChange('firstName')} />
              </Label>

              <Label value='Last Name *'>
                <BaseInput
                  required
                  entryType='text'
                  autoComplete='family-name'
                  error={errors.lastName}
                  value={inputs.lastName}
                  onChange={handleOnChange('lastName')} />
              </Label>

              <Label value='Email *'>
                <BaseInput
                  required
                  entryType='email'
                  autoComplete='email'
                  error={errors.email}
                  value={inputs.email}
                  onChange={handleOnChange('email')} />
              </Label>

              <Label value='Subject *'>
                <BaseInput
                  required
                  entryType='text'
                  error={errors.subject}
                  value={inputs.subject}
                  onChange={handleOnChange('subject')} />
              </Label>

              <Label value='Message *'>
                <BaseInput
                  required
                  entryType='textarea'
                  error={errors.message}
                  value={inputs.message}
                  onChange={handleOnChange('message')} />
              </Label>

              <HCaptcha
                sitekey={process.env.NEXT_PUBLIC_H_CAPTCHA_SITE_KEY as string}
                onLoad={resetFormState}
                onVerify={setCaptchaToken}
                ref={captchaRef}
              />

              <Primary>
                {formSending ? 'Sending...' : 'Send'}
              </Primary>
            </form>
            {
              showFormErrorMessage &&
              <FormSubmitMessage success={false}>Sorry about that! There was an error sending your message. Please reach out on LinkedIn!</FormSubmitMessage>
            }
            {
              showFormSuccessMessage &&
              <FormSubmitMessage success={true}>Success! Your message was delivered successfully, please allow a couple days to let me get back to you!</FormSubmitMessage>
            }
          </Card>
        </div>
      </Page>
    </>
  )
}
