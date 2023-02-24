import { Poppins } from '@next/font/google'
import { Props } from 'next/script'
import styles from './Lead.module.scss'

const inter = Poppins({
  weight: '700',
})

export default function Lead(props: Props) {
  const { children, ...rest } = props || {}

  return <p className={[inter.className, styles.lead].join(' ')} {...rest}>
    {children}
  </p>
}
