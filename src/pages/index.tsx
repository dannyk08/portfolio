import Head from 'next/head'
import Heading from 'components/typography/Heading'
import Cap from 'components/typography/Cap'
import Thumbnail from 'components/Thumbnail'
import Image from 'next/image'
import Primary from 'components/buttons/Primary'
import Secondary from 'components/buttons/Secondary'
import P from 'components/typography/P'
import Container from 'components/layouts/Container'
import Base from 'components/icons/Base'
import Link from 'next/link'
import windowSize from 'effects/windowSize'
import Divider from 'components/layouts/Divider'
import Display from 'components/typography/Display'
import styles from './index.module.scss'
import BaseElevation from 'components/elevations/Base'

const CTA = () => <Container className={styles.thumbnailCta}>
  <Primary as='link' href="/resume">
    RESUME
  </Primary>

  <Secondary as='link' href="/projects">
    PROJECTS
  </Secondary>
</Container>


export default function Home() {
  const size = windowSize()

  return (
    <>
      <Head>
        <title>Danny's IO | Developer Portfolio</title>
        <meta name="description" content="Web Developer Portfolio made by Daniel (Danny) Romero." />
      </Head>
      <div className={styles.main}>
        <Container className={styles.mainContent}>
          <Thumbnail className={styles.thumbnail}>
            <Container className={styles.thumbnailUserInfo}>
              <Image loading='eager' className={styles.thumbnailImage} src='/images/daniel-romero-profile.jpg' alt='Daniel Romero profile picture' height={200} width={200} />
              <Heading>Daniel <br /> Romero</Heading>
              <Divider />
              <Cap>Web Developer</Cap>
            </Container>
            {
              size.isMobile &&
              <CTA />
            }

            <ul className={styles.thumbnailIcons}>
              <li>
                <Link href="https://www.linkedin.com/in/dannyk08/" target="_blank" aria-label="Visit Daniel Romero's LinkedIn">
                  <Base iconName='linkedin' />
                </Link>
              </li>

              <li>
                <Link href="https://github.com/dannyk08/" target="_blank" aria-label="Visit Daniel Romero's GitHub">
                  <Base iconName='github' />
                </Link>
              </li>

              <li>
                <Link href="https://calendly.com/dannyk08/conversation-daniel-romero/" target="_blank" aria-label="Schedule a time to chat with Daniel Romero on Calendly">
                  <Base iconName='calendar' />
                </Link>
              </li>
            </ul>
          </Thumbnail>

          <BaseElevation className={styles.profileDesc}>
            <Display>Hello</Display>
            {
              !size.isMobile &&
              <CTA />
            }
            <P>I'm Daniel Romero, a Frontend Web Developer based in Los Angeles, CA.</P>
            <P>I've been developing, and maintaining, web applications using modern frameworks and practices for over {new Date().getFullYear() - new Date('1/5/2015').getFullYear() - 1} years.</P>
          </BaseElevation>
        </Container>
      </div>
    </>
  )
}
