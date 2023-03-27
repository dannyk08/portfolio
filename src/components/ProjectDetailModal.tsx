import { ProjectDetail } from '@/data/types'
import ImageFallback, { getDummyImage } from './ImageFallback'
import styles from './ProjectDetailModal.module.scss'

interface ProjectDetailModalProps {
  projectDetail: ProjectDetail,
}

const getUrlExt = (url: string) => {
  const [string] = (url || '').split(/[#?]/)
  const ext = (string || '').split('.').pop()
  if (ext) {
    return `video/${ext.trim()}`
  }
}

export default function ProjectDetailModal(props: ProjectDetailModalProps) {
  const { projectDetail } = props

  if ((projectDetail.videoUrls ?? []).length) {
    return <video
      className={styles.modalImage}
      style={{
        aspectRatio: `${projectDetail.width}/${projectDetail.height}`
      }}
      autoPlay
      controls
      controlsList='nodownload noremoteplayback'
      placeholder={getDummyImage(projectDetail)}
      title={projectDetail.alt}
      height={projectDetail.height}
      width={projectDetail.width}
    >
      {
        (projectDetail.videoUrls ?? []).map((url) => {
          const fileType = getUrlExt(url)
          return <source key={url} src={url} type={fileType} />
        })
      }
    </video>
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
