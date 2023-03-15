import Heading from '@/components/typography/Heading';
import Head from 'next/head';
import Page from '@/components/layouts/Page';
import P from '@/components/typography/P';
import Card from '@/components/layouts/Card';
import Lead from '@/components/typography/Lead';
import CardLabel from '@/components/layouts/CardLabel';
import projects, { ImageProjectDetails } from '@/data/projects';
import Image from 'next/image';
import CardFooter from '@/components/layouts/CardFooter';
import cardLabelStyles from '@/components/layouts/CardLabel.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import BaseIcon, { IconNames } from '@/components/icons/Base';
import Primary from '@/components/buttons/Primary';
import Secondary from '@/components/buttons/Secondary';
import ButtonGroup from '@/components/buttons/Group.module';
import { useState } from 'react';
import styles from './projects.module.scss'
import dynamic from 'next/dynamic';

const Modal = dynamic(() => import('react-modal'), { ssr: false })

export default function Projects() {
  const [modalImage, setModalImage] = useState<null | ImageProjectDetails>(null)
  const closeModal = () => {
    setModalImage(null)
  }

  return (
    <>
      <Head>
        <title>Danny's IO | Projects</title>
        <meta name="description" content="Daniel (Danny) Romero Web Developer projects collection." />
      </Head>
      <Page>
        <Modal
          isOpen={modalImage !== null}
          contentLabel={modalImage?.alt}
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          onRequestClose={closeModal}
          contentElement={() => modalImage?.url ?
            <div className={styles.imageModalContainer}>
              <div className={styles.imageModalClose}>
                <Primary aria-label='Close image preview modal' as='button' onClick={closeModal}>
                  <BaseIcon iconName={IconNames.close} inverse />
                </Primary>
              </div>

              <Image
                className={styles.modalImage}
                key={modalImage.url}
                src={modalImage.url}
                alt={modalImage.alt}
                height={modalImage.height * 2}
                width={modalImage.width * 2} />
            </div> :
            <></>
          } />

        <div className={styles.pageContainer}>
          <Heading className={styles.heading}>Coding Challenges</Heading>
          <div className={styles.description}>
            <P>Through the years, I've completed several coding challenges with potential employers to showcase my skills as a web developer and my ability to create effective digital solutions on a strict timeline.</P>
            <P>These coding challenges have ranged from landing pages to simple applications demanding my expertise with JavaScript libraries and frameworks such as VueJS, ReactJS, Angular, NodeJS, and other technologies.</P>
          </div>

          <div className={styles.cards}>
            {
              projects.map((project) => <Card key={project.url} className={styles.card}>
                <div className={styles.mainCardContent}>
                  <CardLabel>
                    <Heading size='h4' className={cardLabelStyles.cardLabelHeading}>
                      {project.heading}
                    </Heading>
                    <Lead>
                      {project.subHeading}
                    </Lead>
                  </CardLabel>

                  <div>
                    <P>{project.description}</P>
                  </div>

                  <ButtonGroup>
                    {
                      project.githubUrl &&
                      <Primary as='link' href={project.githubUrl}>
                        <BaseIcon iconName={IconNames.github} inverse />
                      </Primary>
                    }
                    {
                      project.url &&
                      <Secondary as='link' href={project.url}>
                        <BaseIcon iconName={IconNames.share} />
                      </Secondary>
                    }
                  </ButtonGroup>

                </div>

                <CardFooter className={styles.cardFooter}>
                  <Carousel className={styles.imageCarousel}
                    onClickItem={(index) => {
                      setModalImage(project.images[index])
                    }}
                    interval={250}
                    showThumbs={false}
                    showIndicators
                    infiniteLoop>
                    {
                      project.images.map((image) => <Image
                        key={image.url}
                        src={image.url}
                        alt={image.alt}
                        height={image.height}
                        width={image.width} />
                      )
                    }
                  </Carousel>
                </CardFooter>
              </Card>
              )}
          </div>
        </div>
      </Page >
    </>
  )
}
