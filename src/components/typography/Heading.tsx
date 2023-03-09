import { Poppins } from '@next/font/google'
import classNames from 'classnames';
import { Props } from 'next/script';
import styles from './Heading.module.scss'

const poppins = Poppins({
  weight: '700',
})

export const headings = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
] as const

type Headings = typeof headings[number]

const headingComponents = new Set(headings)

type HeadingProps = Props & {
  size?: Headings,
}

export default function Heading(props: HeadingProps) {
  const { children, className, size = 'h1' } = props || {}

  const Component = headingComponents.has(size)
  if (!Component) return null

  switch (size) {
    case 'h5':
      return <h5 className={classNames(className, poppins.className, styles[size])}>{children}</h5>
    case 'h4':
      return <h4 className={classNames(className, poppins.className, styles[size])}>{children}</h4>
    case 'h3':
      return <h3 className={classNames(className, poppins.className, styles[size])}>{children}</h3>
    case 'h2':
      return <h2 className={classNames(className, poppins.className, styles[size])}>{children}</h2>

    default:
      return <h1 className={classNames(className, poppins.className, styles[size])}>{children}</h1>
  }
}
