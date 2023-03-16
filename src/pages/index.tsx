import Head from 'next/head'
import Heading from '@/components/typography/Heading'
import Cap from '@/components/typography/Cap'
import Thumbnail from '@/components/Thumbnail'
import Image from 'next/image'
import Primary from '@/components/buttons/Primary'
import Secondary from '@/components/buttons/Secondary'
import P from '@/components/typography/P'
import Container from '@/components/layouts/Container'
import Base, { IconNames } from '@/components/icons/Base'
import Link from 'next/link'
import useWindowSize from '@/effects/useWindowSize'
import Divider from '@/components/layouts/Divider'
import Display from '@/components/typography/Display'
import Page from '@/components/layouts/Page'
import ButtonGroup from '@/components/buttons/Group.module'
import styles from './index.module.scss'

const CTA = () => <ButtonGroup className={styles.thumbnailCta}>
  <Primary as='link' href="/resume">
    RESUME
  </Primary>

  <Secondary as='link' href="/projects">
    PROJECTS
  </Secondary>
</ButtonGroup>


export default function Home() {
  const size = useWindowSize()

  return (
    <>
      <Head>
        <title>Danny's IO | Developer Portfolio</title>
        <meta name="description" content="Web Developer Portfolio made by Daniel (Danny) Romero." />
      </Head>
      <Page>
        <div className={styles.mainContent}>
          <div className={styles.thumbnailContainer}>
            <Thumbnail>
              <Container className={styles.thumbnailUserInfo}>
                <Image
                  priority
                  decoding='async'
                  loading='eager'
                  className={styles.thumbnailImage}
                  src='/images/daniel-romero-profile.jpg'
                  alt='Daniel Romero profile picture'
                  height={200}
                  width={200} />
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
                    <Base iconName={IconNames.linkedin} />
                  </Link>
                </li>

                <li>
                  <Link href="https://github.com/dannyk08/" target="_blank" aria-label="Visit Daniel Romero's GitHub">
                    <Base iconName={IconNames.github} />
                  </Link>
                </li>

                <li>
                  <Link href="https://calendly.com/dannyk08/conversation-daniel-romero/" target="_blank" aria-label="Schedule a time to chat with Daniel Romero on Calendly">
                    <Base iconName={IconNames.calendar} />
                  </Link>
                </li>
              </ul>
            </Thumbnail>
          </div>

          <div className={styles.profileDesc}>
            <Display>Hello</Display>
            {
              !size.isMobile &&
              <CTA />
            }
            <P>I am Daniel Romero, a frontend web developer based in Los Angeles, CA.</P>
            <P>With over {new Date().getFullYear() - new Date('1/5/2015').getFullYear() - 1} years of experience, I have become proficient in creating and maintaining web applications using various Javascript frameworks such as VueJS, ReactJS, and Angular. I take pride in mentoring team members and optimizing applications using best practices for scalability. One of my greatest achievements at <a href='https://joinfightcamp.com/' target='_blank'>FightCamp</a> was improving Lighthouse performance scores by 40 points, significantly enhancing the user experience. At <a href='https://tlcdelivers.com/' target='_blank'>TLC</a>, I implemented fully tested serial cataloging algorithms, which are being utilized globally.</P>
            <P>I have a passion for maximizing efficiency and streamlining processes, which is why I created a UI component library at <a href='https://www.internetbrands.com/our-brands/health' target='_blank'>Internet Brands' Health vertical</a> by unifying styles and component functionalities from multiple applications. Moreover, I enjoy collaborating with other departments to solve problems and designed a landing page CMS for the Marketing team at <a href='https://www.winc.com/' target='_blank'>Winc</a>, enabling them to launch campaigns in minutes.</P>
          </div>
        </div>
      </Page>
    </>
  )
}
