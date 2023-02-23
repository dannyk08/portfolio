import { Poppins } from '@next/font/google'
import { Props } from 'next/script';
import styles from './Heading.module.scss'

const inter = Poppins({
  weight: '700',
})

const H1 = (props: Props) => <h1 {...props}>{props.children}</h1>
const H2 = (props: Props) => <h2 {...props}>{props.children}</h2>
const H3 = (props: Props) => <h3 {...props}>{props.children}</h3>
const H4 = (props: Props) => <h4 {...props}>{props.children}</h4>
const H5 = (props: Props) => <h5 {...props}>{props.children}</h5>

const headingComponents = new Map([
  ['h1', H1],
  ['h2', H2],
  ['h3', H3],
  ['h4', H4],
  ['h5', H5],
])

type HeadingProps = Props & {
  size?: string,
}

export default function Heading(props: HeadingProps) {
  const { children, className, size = 'h1', ...rest } = props || {}
  const headingClass = styles[size]

  const Component = headingComponents.get(size)

  return <Component className={[className, inter.className, headingClass].join(' ')} {...rest}>
    {children}
  </Component>
}
