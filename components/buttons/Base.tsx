import { Poppins } from '@next/font/google';
import Link, { LinkProps } from 'next/link';
import styles from './Base.module.scss'

type BaseProps = {}

type ButtonAsButton = BaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
  type?: 'button' | 'submit',
  as?: 'button'
}

type ButtonAsLink = BaseProps & Omit<LinkProps, keyof BaseProps> & {
  children: React.ReactNode,
  className?: string,
  as: 'link'
}

export type BaseButtonProps = ButtonAsButton | ButtonAsLink

const poppins = Poppins({
  weight: '600',
})

export default function BaseButton(props: BaseButtonProps): JSX.Element {
  if (props.as == 'link') {
    const { children, className, as, ...rest } = props
    return <Link className={[styles.button, styles[as], poppins.className, className].join(' ')} {...rest}>{children}</ Link>
  }

  const { children, className, as = 'button', ...rest } = props
  return <button className={[styles.button, styles[as], poppins.className, className].join(' ')} {...rest}>{children}</button>
}
