import Heading from '@/components/typography/Heading';
import Head from 'next/head';
import Page from '@/components/layouts/Page';
import P from '@/components/typography/P';
import workExperience from '@/data/workExperience'
import codingChallenges from '@/data/codingChallenges';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BaseIcon, { IconNames } from '@/components/icons/Base';
import Primary from '@/components/buttons/Primary';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import ProjectCard from '@/components/ProjectCard';
import { ProjectDetail } from '@/data/types';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import styles from './projects.module.scss'

const Modal = dynamic(() => import('react-modal'), { ssr: false })

export default function Projects() {
  const [modalAsset, setModalAsset] = useState<null | ProjectDetail>(null)
  const closeModal = () => {
    setModalAsset(null)
  }

  return (
    <>
      <Head>
        <title>Danny's IO | Projects</title>
        <meta name="description" content="Daniel (Danny) Romero Web Developer projects collection." />
        <link rel="preconnect" crossOrigin='anonymous' href="https://www.gstatic.com" />
        <link rel="preconnect" crossOrigin='anonymous' href="https://lh3.googleusercontent.com" />
      </Head>
      <Page>
        <Modal
          isOpen={modalAsset !== null}
          contentLabel={modalAsset?.alt || modalAsset?.alt}
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          onRequestClose={closeModal}
          contentElement={() => modalAsset != null ?
            <div className={styles.imageModalContainer}>
              <div className={styles.imageModalClose}>
                <Primary aria-label='Close image preview modal' as='button' onClick={closeModal}>
                  <BaseIcon iconName={IconNames.close} inverse />
                </Primary>
              </div>

              <div className={styles.modalContent}>
                <ProjectDetailModal projectDetail={modalAsset} />
              </div>
            </div> :
            <></>
          } />

        <div className={styles.pageContainer}>
          <Heading className={styles.heading}>Projects</Heading>

          <Heading size='h2' className={styles.heading}>Work Experience</Heading>
          <div className={styles.description}>
            <P>In the last few years of my career I've had the fortune of working at companies that value great user interfaces (UIs) and think about the user as the front and center.</P>
            <P>These work experience video samples showcase my versatility with frontend technologies to create enterprise grade UIs and optimal web apps.</P>
          </div>

          <div className={styles.cards}>
            {
              workExperience.map(project => <ProjectCard
                key={project.url}
                onClickItem={(index) => {
                  setModalAsset(project.assets[index])
                }}
                project={project}
              />)
            }
          </div>

          <br />

          <Heading size='h2' className={styles.heading}>Coding Challenges</Heading>
          <div className={styles.description}>
            <P>Through the years, I've completed several coding challenges with potential employers to showcase my skills as a web developer and my ability to create effective digital solutions on a strict timeline.</P>
            <P>These coding challenges have ranged from landing pages to simple applications demanding my expertise with JavaScript libraries and frameworks such as VueJS, ReactJS, Angular, NodeJS, and other technologies.</P>
          </div>

          <div className={styles.cards}>
            {
              codingChallenges.map(project => <ProjectCard
                key={project.url}
                onClickItem={(index) => {
                  setModalAsset(project.assets[index])
                }}
                project={project}
              />)
            }
          </div>
        </div>
      </Page >
    </>
  )
}
