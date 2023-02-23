import BaseElevation from 'components/elevations/Base'
import Container from 'components/layouts/Container'
import Cap from 'components/typography/Cap'
import Heading from 'components/typography/Heading'
import P from 'components/typography/P'
import Head from 'next/head'
import styles from './elevations.module.scss'

export default function Elevations() {
  return (
    <>
      <Head>
        <title>Danny's IO | Elevations</title>
      </Head>
      <Container className={styles.main}>
        <Heading size="h2">Elevations</Heading>

        <BaseElevation>
          <div className={styles.cap}>
            <Cap>Level 00</Cap>
          </div>

          <div className={styles.content}>
            <P>Background</P>
            <P>Alerts</P>
            <P>Button disabled</P>
            <P>Input Forms disabled</P>
          </div>
        </BaseElevation>

        <BaseElevation elevation={1}>
          <div className={styles.cap}>
            <Cap>Level 01</Cap>
          </div>

          <div className={styles.content}>
            <P>Card</P>
            <P>Pressed button</P>
            <P>Progressive button</P>
          </div>
        </BaseElevation>

        <BaseElevation elevation={2}>
          <div className={styles.cap}>
            <Cap>Level 02</Cap>
          </div>

          <div className={styles.content}>
            <P>Button</P>
            <P>Notification badges</P>
          </div>
        </BaseElevation>

        <BaseElevation elevation={3}>
          <div className={styles.cap}>
            <Cap>Level 03</Cap>
          </div>

          <div className={styles.content}>
            <P>Navigation Menu</P>
            <P>Bar</P>
          </div>
        </BaseElevation>

        <BaseElevation elevation={4}>
          <div className={styles.cap}>
            <Cap>Level 04</Cap>
          </div>

          <div className={styles.content}>
            <P>Card Raised</P>
            <P>Button Raised</P>
            <P>Dropdown Menu</P>
          </div>
        </BaseElevation>

        <BaseElevation elevation={5}>
          <div className={styles.cap}>
            <Cap>Level 05</Cap>
          </div>

          <div className={styles.content}>
            <P>Picker</P>
            <P>Popover</P>
          </div>
        </BaseElevation>

        <BaseElevation elevation={6}>
          <div className={styles.cap}>
            <Cap>Level 06</Cap>
          </div>

          <div className={styles.content}>
            <P>Modals</P>
            <P>Dialogue</P>
          </div>
        </BaseElevation>

      </Container>
    </>
  )
}
