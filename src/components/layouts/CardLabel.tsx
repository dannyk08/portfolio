import { Props } from 'next/script'
import styles from './CardLabel.module.scss'

export default function CardLabel(props: Props) {
  const { children } = props
  return <div className={styles.cardLabel}>{children}</div>
}
