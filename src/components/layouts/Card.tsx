import classNames from 'classnames'
import { Props } from 'next/script'
import styles from './Card.module.scss'

export default function Card(props: Props) {
  const { children, className } = props
  return <div className={classNames(styles.card, className)}>{children}</div>
}
