import BaseButton, { BaseButtonProps } from './Base';
import styles from './Primary.module.scss'

export default function Primary(props: BaseButtonProps) {
  const { children, className, ...rest } = props

  return <BaseButton className={styles.primary} {...rest}>
    {children}
  </BaseButton>
}
