import classNames from 'classnames'
import { Props } from 'next/script'
import styles from './Divider.module.scss'

type DividerProps = Props & {
  enhanced?: boolean,
}

export default function Divider(props: DividerProps) {
  const { enhanced } = props
  return <hr className={classNames(styles.divider, {
    [styles.enhanced]: enhanced,
  })} />
}
