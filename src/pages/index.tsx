import Head from 'next/head'
import Heading from 'components/typography/Heading'
import styles from './index.module.scss'
import Cap from 'components/typography/Cap'
import Thumbnail from 'components/Thumbnail'
import Image from 'next/image'
import Primary from 'components/buttons/Primary'
import Secondary from 'components/buttons/Secondary'
import P from 'components/typography/P'
import Container from 'components/layouts/Container'
import Base from 'components/icons/Base'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Danny's IO | Developer Portfolio</title>
        <meta name="description" content="Web Developer Portfolio made by Daniel (Danny) Romero." />
      </Head>
      <div className={styles.main}>
        <Thumbnail className={styles.thumbnail}>
          <div className={styles.thumbnailUserInfo}>
            <Image className={styles.thumbnailImage} src='/images/daniel-romero-profile.jpg' alt='Daniel Romero profile picture' height={200} width={200} />
            <Heading>Daniel Romero</Heading>
            <Cap>Web Developer</Cap>
          </div>
          <div className={styles.thumbnailCta}>
            <Primary>
              <Cap>RESUME</Cap>
            </Primary>

            <Secondary>
              <Cap>PROJECTS</Cap>
            </Secondary>
          </div>

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

        <Container>
          <Heading size='h1'>Hello</Heading>
          <P>I'm Daniel Romero, a Frontend Web Developer based in Los Angeles, CA.</P>
          <P>I've been developing, and maintaining, web applications using modern frameworks and practices for over 6 years.</P>
        </Container>
      </div>
    </>
  )
}
