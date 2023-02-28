import { Poppins } from '@next/font/google'
import { Props } from 'next/script';
import styles from './Heading.module.scss'

const poppins = Poppins({
  weight: '700',
})

const headingComponents = new Set([
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
])

type HeadingProps = Props & {
  size?: string,
}

export default function Heading(props: HeadingProps) {
  const { children, className, size = 'h1' } = props || {}

  const Component = headingComponents.has(size)
  if (!Component) return null

  switch (size) {
    case 'h5':
      return <h5 className={[className, poppins.className, styles[size]].join(' ')}>{children}</h5>
    case 'h4':
      return <h4 className={[className, poppins.className, styles[size]].join(' ')}>{children}</h4>
    case 'h3':
      return <h3 className={[className, poppins.className, styles[size]].join(' ')}>{children}</h3>
    case 'h2':
      return <h2 className={[className, poppins.className, styles[size]].join(' ')}>{children}</h2>

    default:
      return <h1 className={[className, poppins.className, styles[size]].join(' ')}>{children}</h1>
  }
}
