import classNames from 'classnames'
import { Props } from 'next/script'
import styles from './CardFooter.module.scss'

export default function CardFooter(props: Props) {
  const { children, className } = props
  return <div className={classNames(styles.cardFooter, className)}>{children}</div>
}
