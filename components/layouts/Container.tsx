import { Props } from 'next/script';
import styles from './Container.module.scss'

export default function Container(props: Props) {
  const { children, className } = props

  return <div className={[styles.container, className].join(' ')}>{children}</div>
}
