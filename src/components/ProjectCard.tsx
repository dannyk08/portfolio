import { Carousel } from 'react-responsive-carousel'
import ButtonGroup from './buttons/Group.module'
import Primary from './buttons/Primary'
import Secondary from './buttons/Secondary'
import BaseIcon, { IconNames } from './icons/Base'
import Card from './layouts/Card'
import CardFooter from './layouts/CardFooter'
import CardLabel from './layouts/CardLabel'
import Heading from './typography/Heading'
import Lead from './typography/Lead'
import P from './typography/P'
import cardLabelStyles from '@/components/layouts/CardLabel.module.scss';
import styles from './ProjectCard.module.scss'
import ImageFallback from './ImageFallback'
import { ReactNode } from 'react'
import { ProjectAssetDetail, ProjectDetails, VideoProjectAssetDetail } from '@/data/types'

interface ProjectCardProps {
  project: ProjectDetails<ProjectAssetDetail | VideoProjectAssetDetail>
  onClickItem: (index: number, item: ReactNode) => void,
}

export default function ProjectCard(props: ProjectCardProps) {
  const { project, onClickItem } = props

  return <Card className={styles.card}>
    <div className={styles.mainCardContent}>
      <CardLabel>
        <Heading size='h3' className={cardLabelStyles.cardLabelHeading}>
          {project.heading}
        </Heading>
        <Lead>
          Coding Challenge
        </Lead>
      </CardLabel>

      <div>
        <P>{project.description}</P>
      </div>

      <ButtonGroup>
        {
          project.githubUrl &&
          <Primary as='link' href={project.githubUrl} aria-label='Navigate to project repository'>
            <BaseIcon iconName={IconNames.github} inverse />
          </Primary>
        }
        {
          project.url &&
          <Secondary as='link' href={project.url} aria-label='Navigate to project url'>
            <BaseIcon iconName={IconNames.share} />
          </Secondary>
        }
      </ButtonGroup>

    </div>

    <CardFooter className={styles.cardFooter}>
      <Carousel
        className={styles.imageCarousel}
        onClickItem={onClickItem}
        interval={250}
        showThumbs={false}
        showIndicators
        infiniteLoop>
        {
          project.assets.map((image) => <ImageFallback
            style={{
              aspectRatio: `${image.width}/${image.height}`
            }}
            priority={false}
            loading='lazy'
            decoding='async'
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
}
