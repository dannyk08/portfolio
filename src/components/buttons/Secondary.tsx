import BaseButton, { BaseButtonProps } from './Base';
import styles from './Secondary.module.scss'

export default function Secondary(props: BaseButtonProps) {
  const { children, className, ...rest } = props

  return <BaseButton className={styles.secondary} {...rest}>
    {children}
  </BaseButton>
}
