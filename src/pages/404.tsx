import Page from '@/components/layouts/Page';
import Heading from '@/components/typography/Heading';
import P from '@/components/typography/P';
import Head from 'next/head';
import styles from './404.module.scss'

export default function NotFound404() {
  return <>
    <Head>
      <title>404: This page could not be found</title>
    </Head>
    <Page className={styles.four04}>
      <Heading>404</Heading>
      <P>This page could not be found.</P>
    </Page>
  </>
}
