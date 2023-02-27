import { Poppins } from '@next/font/google'
import { Props } from 'next/script'
import styles from './Cap.module.scss'

const poppins = Poppins({
  weight: '300',
})

export default function Cap(props: Props) {
  const { children, } = props || {}

  return <p className={[poppins.className, styles.cap].join(' ')} >
    {children}
  </p>
}
