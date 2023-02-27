import Heading from 'components/typography/Heading';
import Base from 'components/icons/Base';
import Head from 'next/head';
import styles from './projects.module.scss'
import Container from 'components/layouts/Container';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Danny's IO | Daniel Romero contact page</title>
        <meta name="description" content="Contact Daniel (Danny) Romero Web Developer for your web projects." />
      </Head>
      <div className={styles.main}>
        <Container>
          <Heading>Contact</Heading>
          <Base iconName='wrench' />
        </Container>

      </div>
    </>
  )
}
