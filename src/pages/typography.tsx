import Head from 'next/head'
import Heading from '@/components/typography/Heading'
import Display from '@/components/typography/Display'
import P from '@/components/typography/P'
import Cap from '@/components/typography/Cap'
import Container from '@/components/layouts/Container'
import styles from './typography.module.scss'
import Lead from '@/components/typography/Lead'

export default function Home() {
  return (
    <>
      <Head>
        <title>Danny's IO | Typography</title>
      </Head>
      <Container className={styles.main}>
        <div className={styles.row}>
          <div className={styles.cap}>
            <Cap>Display</Cap>
          </div>

          <div className={styles.content}>
            <Display>Display 1</Display>
            <Display weight='light'>Display 2</Display>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.cap}>
            <Cap>Headings</Cap>
          </div>

          <div className={styles.content}>
            <Heading>Headline Text - h1</Heading>
            <Heading size="h2">Headline Text - h2</Heading>
            <Heading size="h3">Headline Text - h3</Heading>
            <Heading size="h4">Headline Text - h4</Heading>
            <Heading size="h5">Headline Text - h5</Heading>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.cap}>
            <Cap>Lead</Cap>
          </div>

          <div className={styles.content}>
            <Lead>Silver mist suffused the deck of the ship.</Lead>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.cap}>
            <Cap>Body</Cap>
          </div>

          <div className={styles.content}>
            <P>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</P>
            <P>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</P>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.cap}>
            <Cap>Capitalized</Cap>
          </div>

          <div className={styles.content}>
            <Cap>Mellifluous</Cap>
          </div>
        </div>
      </Container>
    </>
  )
}
