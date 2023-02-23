import { Poppins } from '@next/font/google'
import { Props } from 'next/script'
import styles from './P.module.scss'

const inter = Poppins({
  weight: '400',
})

export default function P(props: Props) {
  const { children, ...rest } = props || {}

  return <p className={[inter.className, styles.body].join(' ')} {...rest}>
    {children}
  </p>
}
