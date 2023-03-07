import Heading from '@/components/typography/Heading';
import Base from '@/components/icons/Base';
import Head from 'next/head';
import Page from '@/components/layouts/Page';
import styles from './projects.module.scss'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Danny's IO | Projects</title>
        <meta name="description" content="Daniel (Danny) Romero Web Developer projects collection." />
      </Head>
      <Page>
        <Heading className={styles.heading}>Projects</Heading>
        <Base iconName='wrench' />
      </Page>
    </>
  )
}
