import Head from 'next/head'
import Heading from '@/components/typography/Heading'
import Cap from '@/components/typography/Cap'
import Thumbnail from '@/components/Thumbnail'
import Image from 'next/image'
import Primary from '@/components/buttons/Primary'
import Secondary from '@/components/buttons/Secondary'
import P from '@/components/typography/P'
import Container from '@/components/layouts/Container'
import Base from '@/components/icons/Base'
import Link from 'next/link'
import useWindowSize from '@/effects/useWindowSize'
import Divider from '@/components/layouts/Divider'
import Display from '@/components/typography/Display'
import Page from '@/components/layouts/Page'
import styles from './index.module.scss'

const CTA = () => <Container className={styles.thumbnailCta}>
  <Primary as='link' href="/resume">
    RESUME
  </Primary>

  <Secondary as='link' href="/projects">
    PROJECTS
  </Secondary>
</Container>


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
          <Thumbnail className={styles.thumbnail}>
            <Container className={styles.thumbnailUserInfo}>
              <Image
                decoding='async'
                loading='eager'
                className={styles.thumbnailImage}
                src='/images/daniel-romero-profile.jpg'
                alt='Daniel Romero profile picture'
                height={200} width={200} />
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

          <div className={styles.profileDesc}>
            <Display>Hello</Display>
            {
              !size.isMobile &&
              <CTA />
            }
            <P>I'm Daniel Romero, a Frontend Web Developer based in Los Angeles, CA.</P>
            <P>As a frontend engineer with over {new Date().getFullYear() - new Date('1/5/2015').getFullYear() - 1} years of experience, I have honed my skills in creating and maintaining web applications using a variety of legacy and modern Javascript frameworks such as AngularJS, ReactJS, and VueJS. Throughout my career, I have mentored team members and optimized applications using best practices for scalability.</P>
            <P>One of my proudest accomplishments was auditing a web application and improving Lighthouse performance scores by an average of 40 points. This optimization helped improve the user experience and increase engagement with the application.</P>
            <P>I have also implemented fully tested serial cataloging algorithms that are now being used nationally and globally. This project required attention to detail and a deep understanding of the complexities of the algorithms.</P>
            <P>I have a passion for streamlining processes and maximizing efficiency, which is why I took the initiative to unify styles and component functionalities from multiple applications into a UI component library. This library saved the team valuable time and resources, allowing us to focus on other important aspects of the projects.</P>
            <P>In addition to my technical skills, I also enjoy collaborating with other departments to solve problems. For instance, I architected a landing page CMS for the Marketing team, which allowed them to launch campaigns in minutes. This project required effective communication and a deep understanding of the team's needs.</P>
            <P>Overall, You should hire me 😬!</P>
          </div>
        </div>
      </Page>
    </>
  )
}
