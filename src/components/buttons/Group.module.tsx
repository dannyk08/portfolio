import classNames from 'classnames'
import { Props } from 'next/script'
import styles from './Group.module.scss'

export default function ButtonGroup({ children, className }: Props) {
  if (children == null) return null

  return <div className={classNames(styles.group, className)}>
    {children}
  </div>
}
