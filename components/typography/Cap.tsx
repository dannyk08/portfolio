import { Poppins } from '@next/font/google'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Cap.module.scss'

const poppins = Poppins({
  weight: '300',
})

type CapProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> & {}

export default function Cap(props: CapProps) {
  const { children, className } = props || {}

  return <p className={[poppins.className, styles.cap, className].join(' ')}>
    {children}
  </p>
}
