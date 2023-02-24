import Secondary from 'components/buttons/Secondary';
import Container from 'components/layouts/Container';
import Cap from 'components/typography/Cap';
import Heading from 'components/typography/Heading';
import Head from 'next/head';
import styles from './resume.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Danny's IO | Daniel Romero resume</title>
        <meta name="description" content="Daniel (Danny) Romero Web Developer resume." />
      </Head>
      <div className={styles.main}>
        <Container className={styles.container}>
          <div className={styles.experience}>
            <Heading>
              Resume
            </Heading>

            <Cap>
              <Secondary type='link' href="https://docs.google.com/document/u/1/export?format=docx&id=1ddMOFSlmYsquur0cSmDVksMzlcsnnZOUzjBmBi7ZdCU" download={true}>
                Download
              </Secondary>
            </Cap>
          </div>

          <div>
            <iframe className={styles.resumeEmbed} width={400} height={500} src="https://docs.google.com/document/d/e/2PACX-1vTRyOZ1SxL9k6ka6TlgDjoGYRjOgEd2cNX8l4NOym-Hn53v_Kr_J6BFqKbKCD0c876VtdYyXt-rqQRy/pub?embedded=true"></iframe>
          </div>
        </Container>
      </div>
    </>
  )
}
