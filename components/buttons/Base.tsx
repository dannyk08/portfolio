import Link from 'next/link';
import { Props } from 'next/script';
import styles from './Base.module.scss'

const Button = ({ children, ...rest }: Props) => <button {...rest}>{children}</button>
const Url = ({ children, ...rest }: Props) => <Link {...rest}>{children}</Link>

const buttonType = new Map([
  ['button', Button],
  ['link', Url]
])

type BaseButtonProps = Props & {
  type: 'button' | 'link'
}

export default function BaseButton(props: BaseButtonProps) {
  const { children, className, type = 'button', ...rest } = props

  const Component = buttonType.get(type)

  if (!Component) return null

  return <Component {...rest} className={[styles.button, className].join(' ')} >
    {children}
  </Component>
}
