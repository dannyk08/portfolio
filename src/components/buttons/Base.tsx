import { Poppins } from 'next/font/google';
import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import styles from './Base.module.scss'

type BaseProps = {
  noElevation?: boolean
}

type ButtonAsButton = BaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
  type?: 'button' | 'submit',
  as?: 'button'
}

type ButtonAsLink = BaseProps & Omit<LinkProps, keyof BaseProps> & {
  children?: React.ReactNode,
  className?: string,
  as: 'link'
}

export type BaseButtonProps = ButtonAsButton | ButtonAsLink

const poppins = Poppins({
  weight: '600',
})

export default function BaseButton(props: BaseButtonProps): JSX.Element {
  if (props.as == 'link') {
    const { children, className, noElevation, as, ...rest } = props
    return <Link className={classNames(
      styles.button,
      styles[as],
      { [styles.noElevation]: noElevation },
      poppins.className,
      className
    )} {...rest}>{children}</ Link>
  }

  const { children, className, noElevation, as = 'button', ...rest } = props
  return <button className={classNames(
    styles.button,
    styles[as],
    { [styles.noElevation]: noElevation },
    poppins.className,
    className
  )} {...rest}>{children}</button>
}
