import Primary from '@/components/buttons/Primary';
import Page from '@/components/layouts/Page';
import Cap from '@/components/typography/Cap';
import Heading from '@/components/typography/Heading';
import Head from 'next/head';
import styles from './resume.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Danny's IO | Resume</title>
        <meta name="description" content="Download Daniel (Danny) Romero's Web Developer resume." />
      </Head>
      <Page>
        <div className={styles.experience}>
          <Heading>
            Resume
          </Heading>

          <Cap>
            <Primary as='link' href="https://docs.google.com/document/u/1/export?format=pdf&id=1HFm9DunwWoHGqJKxZTxb_HpoaxztjfFPLAbJRiHr-JE">
              Download
            </Primary>
          </Cap>
        </div>

        <div className={styles.resumeContainer}>
          <iframe
            title='Daniel Romero most updated resume.'
            className={styles.resumeEmbed}
            width={400}
            height={500}
            loading='lazy'  
            src="https://docs.google.com/document/u/1/export?format=pdf&id=1HFm9DunwWoHGqJKxZTxb_HpoaxztjfFPLAbJRiHr-JE/view?embedded=true"></iframe>
        </div>
      </Page>
    </>
  )
}
