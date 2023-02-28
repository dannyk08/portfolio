import classNames from 'classnames';
import { Props } from 'next/script';
import BaseElevation from './elevations/Base';
import styles from './Thumbnail.module.scss'

export default function Thumbnail(props: Props) {
  const { children, className, ...rest } = props
  return <BaseElevation elevation={4} className={classNames(styles.thumbnail, className)} {...rest}>
    {children}
  </BaseElevation>
}
