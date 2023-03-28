import { Poppins } from 'next/font/google';
import classNames from 'classnames';
import { DetailedHTMLProps, LabelHTMLAttributes } from 'react';
import styles from './Label.module.scss'

type LabelProps = DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> & {
  value: string,
}

const poppins = Poppins({
  weight: '700',
})

export default function Label(props: LabelProps) {
  const { children, value } = props

  return <label className={classNames(poppins.className, styles.label)}>
    <span>{value}</span>
    {children}
  </label>
}
