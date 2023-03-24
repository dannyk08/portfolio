import Heading from '@/components/typography/Heading';
import Head from 'next/head';
import Page from '@/components/layouts/Page';
import P from '@/components/typography/P';
import BaseIcon, { IconNames } from '@/components/icons/Base';
import Primary from '@/components/buttons/Primary';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import ProjectCard from '@/components/ProjectCard';
import { Project, ProjectDetail } from '@/data/types';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import { getProjects } from 'lib/projects';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './projects.module.scss'

const Modal = dynamic(() => import('react-modal'), { ssr: false })

export async function getStaticProps() {
  const projects = await getProjects()

  return {
    props: {
      projects
    }
  }
}

type ProjectsProps = {
  projects: Project[]
}

export default function Projects(props: ProjectsProps) {
  const { projects } = props
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

          {
            projects.map((collection) => <div key={collection.projectType}>
              <Heading size='h2' className={styles.heading}>{collection.projectType}</Heading>
              <div className={styles.description}>
                {
                  collection.description.map((desc) => <P key={desc}>{desc}</P>)
                }
              </div>

              <div className={styles.cards}>
                {
                  collection.samples.map(project => <ProjectCard
                    key={project.url}
                    onClickItem={(index) => {
                      setModalAsset(project.assets[index])
                    }}
                    project={project}
                  />)
                }
              </div>
            </div>)
          }
        </div>
      </Page >
    </>
  )
}
