import '@/styles/globals.scss'
import Layout from '@/components/logistic/Layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import ReactModal from 'react-modal'
import './_app.css';

ReactModal.setAppElement('#modals')

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Layout>
      <Component {...pageProps} />
      <div id="modals" />
    </Layout>
  </>

}
