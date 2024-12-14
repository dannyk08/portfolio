import Heading from "@/components/typography/Heading";
import Head from "next/head";
import Page from "@/components/layouts/Page";
import P from "@/components/typography/P";
import BaseIcon, { IconNames } from "@/components/icons/Base";
import Primary from "@/components/buttons/Primary";
import { useState } from "react";
import dynamic from "next/dynamic";
import ProjectCard from "@/components/ProjectCard";
import { Project, ProjectDetail } from "@/data/types";
import ProjectDetailModal from "@/components/ProjectDetailModal";
import { getProjects } from "lib/projects";
import Divider from "@/components/layouts/Divider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./projects.module.scss";

const Modal = dynamic(() => import("react-modal"), { ssr: false });

export async function getStaticProps() {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
}

type ProjectsProps = {
  projects: Project[];
};

export default function Projects(props: ProjectsProps) {
  const { projects } = props;
  const [modalAsset, setModalAsset] = useState<null | ProjectDetail>(null);
  const closeModal = () => {
    setModalAsset(null);
  };

  return (
    <>
      <Head>
        <title>Danny's IO | Projects</title>
        <meta
          name="description"
          content="Daniel (Danny) Joffe Web Developer projects collection."
        />
      </Head>
      <Page>
        <Modal
          isOpen={modalAsset !== null}
          contentLabel={modalAsset?.alt || modalAsset?.alt}
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          onRequestClose={closeModal}
          contentElement={() =>
            modalAsset != null ? (
              <div className={styles.imageModalContainer}>
                <div className={styles.imageModalClose}>
                  <Primary
                    aria-label="Close image preview modal"
                    as="button"
                    onClick={closeModal}
                  >
                    <BaseIcon iconName={IconNames.close} inverse />
                  </Primary>
                </div>

                <div className={styles.modalContent}>
                  <ProjectDetailModal projectDetail={modalAsset} />
                </div>
              </div>
            ) : (
              <></>
            )
          }
        />

        <div className={styles.pageContainer}>
          <Heading className={styles.projectHeading}>Projects</Heading>

          {projects.map((collection) => (
            <div key={collection.projectType}>
              <Divider enhanced />
              <Heading size="h2" className={styles.projectHeading}>
                {collection.projectType}
              </Heading>
              <div className={styles.projectDescription}>
                {collection.description.map((desc) => (
                  <P key={desc}>{desc}</P>
                ))}
              </div>

              <div className={styles.projectCards}>
                {collection.samples.map((project) => (
                  <ProjectCard
                    key={project.url}
                    onClickItem={(index) => {
                      setModalAsset(project.assets[index]);
                    }}
                    project={project}
                    projectType={collection.projectType}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Page>
    </>
  );
}
