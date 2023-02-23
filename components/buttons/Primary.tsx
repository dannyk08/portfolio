import { Props } from 'next/script';
import BaseButton from './Base';
import styles from './Primary.module.scss'

export default function Primary(props: Props) {
  const { children, className, ...rest } = props

  return <BaseButton className={styles.primary} {...rest}>
    {children}
  </BaseButton>
}
