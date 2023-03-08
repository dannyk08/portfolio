import Heading from '@/components/typography/Heading';
import Head from 'next/head';
import Page from '@/components/layouts/Page';
import P from '@/components/typography/P';
import Card from '@/components/layouts/Card';
import Lead from '@/components/typography/Lead';
import CardLabel from '@/components/layouts/CardLabel';
import Link from 'next/link';
import projects from '@/data/projects';
import Image from 'next/image';
import CardFooter from '@/components/layouts/CardFooter';
import cardLabelStyles from '@/components/layouts/CardLabel.module.scss';
import styles from './projects.module.scss'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Danny's IO | Projects</title>
        <meta name="description" content="Daniel (Danny) Romero Web Developer projects collection." />
      </Head>
      <Page>
        <div className={styles.pageContainer}>
          <Heading className={styles.heading}>Projects</Heading>
          <div className={styles.description}>
            <P>Through the years, I've completed several coding challenges. This is a page showcasing them. These projects range from landing pages to simple applications, using JavaScript libraries and frameworks such as VueJS, ReactJS, Angular, NodeJS, and other technologies.</P>
            <P>These are all unfinished works. These small samples of work were meant to showcase my skills as a web developer and my ability to create effective digital solutions.</P>
          </div>

          <div className={styles.cards}>
            {
              projects.map((project) => <Link target='_blank' href={project.url} key={project.url} className={styles.cardLink}>
                <Card key={project.url} className={styles.card}>
                  <div className={styles.mainCardContent}>
                    <CardLabel>
                      <Heading size='h5' className={cardLabelStyles.cardLabelHeading}>
                        {project.heading}
                      </Heading>
                      <Lead>
                        {project.subHeading}
                      </Lead>
                    </CardLabel>

                    <div>
                      <P>{project.description}</P>
                    </div>
                  </div>

                  <CardFooter className={styles.cardFooter}>
                    <div className={styles.imageCarousel}>
                      {
                        project.images.map((image) => <Image
                          key={image.url}
                          src={image.url}
                          alt={image.alt}
                          height={image.height}
                          width={image.width} />)
                      }
                    </div>
                  </CardFooter>
                </Card>
              </Link>
              )

            }
          </div>
        </div>
      </Page>
    </>
  )
}
