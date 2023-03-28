import { Poppins } from 'next/font/google'
import { Props } from 'next/script'
import styles from './Display.module.scss'

const poppins = Poppins({
  weight: '700',
})

type DisplayProps = Props & {
  weight?: 'strong' | 'light',
}

export default function Display(props: DisplayProps) {
  const { children, weight = 'strong' } = props || {}
  const headingClass = styles[weight]

  return <p className={[poppins.className, headingClass].join(' ')}>
    {children}
  </p>
}
