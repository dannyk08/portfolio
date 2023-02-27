import Link, { LinkProps } from 'next/link';
import { Props } from 'next/script';
import styles from './Base.module.scss'

type BaseProps = {
  children: React.ReactNode,
  className?: string,
  styleType?: 'primary' | 'secondary' | 'unassigned',
}

type ButtonAsButton = BaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
  as?: 'button'
}

type ButtonAsLink = BaseProps & Omit<LinkProps, keyof BaseProps> & {
  as: 'link'
}

export type BaseButtonProps = ButtonAsButton | ButtonAsLink

export default function BaseButton(props: BaseButtonProps): JSX.Element {
  if (props.as == 'link') {
    const { children, className, as, ...rest } = props
    return <Link className={[styles.button, styles[as], className].join(' ')} {...rest}>{children}</ Link>
  }

  const { children, className, as = 'button', ...rest } = props
  return <button className={[styles.button, styles[as], className].join(' ')} {...rest}>{children}</button>
}
