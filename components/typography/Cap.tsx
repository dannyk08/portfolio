import { Poppins } from '@next/font/google'
import { Props } from 'next/script'
import styles from './Cap.module.scss'

const inter = Poppins({
  weight: '300',
})

export default function Cap(props: Props) {
  const { children, ...rest } = props || {}

  return <p className={[inter.className, styles.cap].join(' ')} {...rest}>
    {children}
  </p>
}
