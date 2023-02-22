import { Inter } from '@next/font/google'
import { Props } from 'next/script'
import styles from './Display.module.scss'

const inter = Inter({ subsets: ['latin'] })

type DisplayProps = Props & {
  weight?: 'strong' | 'light',
}

export default function Display(props: DisplayProps) {
  const { children, weight = 'strong', ...rest } = props || {}
  const headingClass = styles[weight]

  return <p className={[inter.className, headingClass].join(' ')} {...rest}>
    {children}
  </p>
}
