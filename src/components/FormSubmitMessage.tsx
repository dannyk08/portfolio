import { Props } from 'next/script'
import classNames from 'classnames'
import Cap from './typography/Cap'
import styles from './FormSubmitMessage.module.scss'

type FormSubmitMessageProps = Props & {
  success?: boolean,
}
export default function FormSubmitMessage(props: FormSubmitMessageProps) {
  const { children, success } = props || {}

  return <div className={styles.message}>
    <Cap className={classNames({
      [styles.success]: success,
      [styles.error]: !success,
    })}>
      {children}
    </Cap>
  </div>
}
