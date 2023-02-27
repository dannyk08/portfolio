import { Poppins } from '@next/font/google'
import { Props } from 'next/script'
import styles from './P.module.scss'

const poppins = Poppins({
  weight: '300',
})

export default function P(props: Props) {
  const { children } = props || {}

  return <p className={[poppins.className, styles.body].join(' ')}>
    {children}
  </p>
}
