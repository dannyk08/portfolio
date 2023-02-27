import Heading from 'components/typography/Heading';
import Base from 'components/icons/Base';
import Head from 'next/head';
import styles from './projects.module.scss'
import Container from 'components/layouts/Container';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Danny's IO | Daniel Romero projects page</title>
        <meta name="description" content="Daniel (Danny) Romero Web Developer projects collection." />
      </Head>
      <div className={styles.main}>
        <Container>
          <Heading>Projects</Heading>
          <Base iconName='wrench' />
        </Container>

      </div>
    </>
  )
}
