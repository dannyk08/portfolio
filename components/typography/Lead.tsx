import { Poppins } from '@next/font/google'
import { Props } from 'next/script'
import styles from './Lead.module.scss'

const poppins = Poppins({
  weight: '700',
})

export default function Lead(props: Props) {
  const { children } = props || {}

  return <p className={[poppins.className, styles.lead].join(' ')}>
    {children}
  </p>
}
