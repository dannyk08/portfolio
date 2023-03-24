import { ProjectDetail } from '@/data/types'
import ImageFallback, { getDummyImage } from './ImageFallback'
import styles from './ProjectDetailModal.module.scss'

interface ProjectDetailModalProps {
  projectDetail: ProjectDetail,
}

export default function ProjectDetailModal(props: ProjectDetailModalProps) {
  const { projectDetail } = props

  if (projectDetail.videoUrl) {
    return <video
      className={styles.modalImage}
      style={{
        aspectRatio: `${projectDetail.width}/${projectDetail.height}`
      }}
      autoPlay
      controls
      controlsList='nodownload noremoteplayback'
      placeholder={getDummyImage(projectDetail)}
      key={projectDetail.videoUrl}
      src={projectDetail.videoUrl}
      title={projectDetail.alt}
      height={projectDetail.height}
      width={projectDetail.width}
    />
  }

  if (projectDetail.url) {
    return <ImageFallback
      className={styles.modalImage}
      style={{
        aspectRatio: `${projectDetail.width}/${projectDetail.height}`
      }}
      src={projectDetail.url}
      alt={projectDetail.alt}
      height={projectDetail.height * 2}
      width={projectDetail.width * 2} />
  }

  return null
}
