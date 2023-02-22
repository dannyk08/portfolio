import Head from 'next/head'
import Heading from 'components/typography/Heading'
import Display from 'components/typography/Display'
import P from 'components/typography/P'

export default function Home() {
  return (
    <>
      <Head>
        <title>Danny's IO | Developer Portfolio</title>
        <meta name="description" content="Web Developer Portfolio made by Daniel (Danny) Romero." />
      </Head>
      <main>
        <Display>Display</Display>
        <Display weight='light'>Display Light</Display>

        <Heading>Headline Text - h1</Heading>
        <Heading size="h2">Headline Text - h2</Heading>
        <Heading size="h3">Headline Text - h3</Heading>
        <Heading size="h4">Headline Text - h4</Heading>

        <P>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</P>
      </main>
    </>
  )
}
