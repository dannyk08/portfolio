import { Props } from 'next/script';
import styles from './Base.module.scss'

export default function BaseButton(props: Props) {
  const { children, className, ...rest } = props

  return <button {...rest} className={[styles.button, className].join(' ')} >
    {children}
  </button>
}
