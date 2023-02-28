import Heading from 'components/typography/Heading';
import Base from 'components/icons/Base';
import Head from 'next/head';
import styles from './projects.module.scss'
import Page from 'components/layouts/Page';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Danny's IO | Daniel Romero projects page</title>
        <meta name="description" content="Daniel (Danny) Romero Web Developer projects collection." />
      </Head>
      <Page className={styles.main}>
        <Heading>Projects</Heading>
        <Base iconName='wrench' />
      </Page>
    </>
  )
}
