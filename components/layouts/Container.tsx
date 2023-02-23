import { Props } from 'next/script';
import styles from './Container.module.scss'

export default function Container(props: Props) {
  const { children, className, ...rest } = props

  return <div className={[styles.container, className].join(' ')} {...rest}>{children}</div>
}
