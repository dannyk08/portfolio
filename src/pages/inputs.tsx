import BaseInput from 'components/input/Base';
import Label from 'components/input/Label';
import Container from 'components/layouts/Container';
import Head from 'next/head';
import { useState } from 'react';
import styles from './inputs.module.scss'

export default function Elevations() {
  const [input, setInput] = useState('')

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput(event.target.value)
  }

  return (
    <>
      <Head>
        <title>Danny's IO | Inputs</title>
      </Head>
      <Container className={styles.main}>
        <Label value='Name'>
          <BaseInput entryType='text' value={input} onChange={handleOnChange} />
        </Label>

        <Label value='Name'>
          <BaseInput entryType='text' value={input} error />
        </Label>

        <Label value='Name'>
          <BaseInput entryType='text' value={input} disabled />
        </Label>

        <Label value='Name'>
          <BaseInput entryType='text' value={input} disabled error />
        </Label>

        <Label value='Name'>
          <BaseInput entryType='textarea' value={input} onChange={handleOnChange} />
        </Label>
      </Container>
    </>
  )
}
