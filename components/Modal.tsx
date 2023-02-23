import { Props } from 'next/script';
import classNames from 'classnames';
import styles from './Modal.module.scss'

type ModalProps = Props & {
  active?: boolean
}
export default function Modal(props: ModalProps) {
  const { children, active } = props
  return <div className={classNames(styles.modal, { [styles.active]: active })}>
    {children}
  </div>
}
