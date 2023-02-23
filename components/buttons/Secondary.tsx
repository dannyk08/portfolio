import { Props } from 'next/script';
import BaseButton from './Base';
import styles from './Secondary.module.scss'

export default function Secondary(props: Props) {
  const { children, className, ...rest } = props

  return <BaseButton className={styles.secondary} {...rest}>
    {children}
  </BaseButton>
}
