import Head from 'next/head'
import Heading from 'components/typography/Heading'
import P from 'components/typography/P'
import styles from './index.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Danny's IO | Developer Portfolio</title>
        <meta name="description" content="Web Developer Portfolio made by Daniel (Danny) Romero." />
      </Head>
      <main className={styles.main}>
        <div className={styles.row}>
          <Heading>Home page</Heading>
          <P>Hello World?</P>
        </div>
      </main>
    </>
  )
}
