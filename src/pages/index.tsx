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
import styles from './index.module.scss'

const CTA = () => <Container className={styles.thumbnailCta}>
  <Primary>
    <Cap>RESUME</Cap>
  </Primary>

  <Secondary>
    <Cap>PROJECTS</Cap>
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
              <Image className={styles.thumbnailImage} src='/images/daniel-romero-profile.jpg' alt='Daniel Romero profile picture' height={200} width={200} />
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

          <Container className={styles.profileDesc}>
            <Heading size='h1'>Hello</Heading>
            <P>I'm Daniel Romero, a Frontend Web Developer based in Los Angeles, CA.</P>
            <P>I've been developing, and maintaining, web applications using modern frameworks and practices for over 6 years.</P>
          </Container>
        </Container>
      </div>
    </>
  )
}
