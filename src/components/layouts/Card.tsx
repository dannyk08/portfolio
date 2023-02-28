import { Props } from 'next/script'
import styles from './Card.module.scss'

export default function Card(props: Props) {
  const { children } = props
  return <div className={styles.card}>{children}</div>
}
