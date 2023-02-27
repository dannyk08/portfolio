import Heading from 'components/typography/Heading';
import Head from 'next/head';
import Label from 'components/input/Label';
import BaseInput from 'components/input/Base';
import Primary from 'components/buttons/Primary';
import { useState } from 'react';
import { validateEmail, validateString } from 'utils/regex';
import Card from 'components/layouts/Card';
import styles from './projects.module.scss'
import FormSubmitMessage from 'components/FormSubmitMessage';

const validations = (string: string, type: string | 'email') => {
  const validations = [validateString]

  if (type == 'email') {
    validations.push(validateEmail)
  }

  return validations.some(validation => !validation(string))
}

const originalErrorsStates = Object.freeze({
  firstName: false,
  lastName: false,
  email: false,
  subject: false,
  message: false,
})

const originalInputsStates = Object.freeze({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
})

export default function Contact() {
  const [sendMessage, setSendMessage] = useState('Send')
  const [showFormErrorMessage, setShowFormErrorMessage] = useState(false)
  const [showFormSuccessMessage, setShowFormSuccessMessage] = useState(false)
  const [errors, setError] = useState({ ...originalErrorsStates })
  const [inputs, setInput] = useState({ ...originalInputsStates })

  const handleOnSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newErrors = Object.entries(inputs)
      .reduce((acc, [key, value]) => ({
        ...acc,
        [key]: validations(value, key)
      }), errors)

    await setError(newErrors)

    const formHasErrors = Object.values(newErrors).some(e => e)
    if (!formHasErrors) {
      setSendMessage('Sending...')

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

      setError({ ...originalErrorsStates })
      setInput({ ...originalInputsStates })
      setSendMessage('Send')
    }
  }

  const handleOnChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        <title>Danny's IO | Daniel Romero contact page</title>
        <meta name="description" content="Contact Daniel (Danny) Romero Web Developer for your web projects." />
      </Head>
      <div className={styles.main}>
        <Heading> Contact</Heading>

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

            <Primary>
              {sendMessage}
            </Primary>
          </form>
          {
            showFormErrorMessage &&
            <FormSubmitMessage success={false}>Sorry, there was an error sending your message. Please reach out on LinkedIn or email directly!</FormSubmitMessage>
          }
          {
            showFormSuccessMessage &&
            <FormSubmitMessage success={true}>Success! Your message was delivered successfully, please allow a couple days to let me get back to you!</FormSubmitMessage>
          }
        </Card>

      </div>
    </>
  )
}
