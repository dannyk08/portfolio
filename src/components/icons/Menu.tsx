import BaseButton, { BaseButtonProps } from '@/components/buttons/Base';
import classNames from 'classnames';

import styles from './Menu.module.scss'

type MenuIconProps = BaseButtonProps & {
  active: boolean,
  onClick: () => void
}

export default function Menu({ active = false, onClick, ...rest }: MenuIconProps) {
  return <BaseButton className={styles.menuButton} onClick={onClick} aria-label="Open navigation menu" {...rest}>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={classNames(styles.menuSVG1, { [styles.activeSVG1]: active })}
        d="M22 15.25C22 14.836 21.664 14.5 21.25 14.5H2.75C2.336 14.5 2 14.836 2 15.25C2 15.664 2.336 16 2.75 16H21.25C21.664 16 22 15.664 22 15.25ZM22 15.25C22 14.836 21.664 14.5 21.25 14.5H2.75C2.336 14.5 2 14.836 2 15.25C2 15.664 2.336 16 2.75 16H21.25C21.664 16 22 15.664 22 15.25Z" fill="black" />
      <path
        className={classNames(styles.menuSVG2, { [styles.activeSVG2]: active })}
        d="M21.25 8C21.664 8 22 8.336 22 8.75C22 9.164 21.664 9.5 21.25 9.5H2.75C2.336 9.5 2 9.164 2 8.75C2 8.336 2.336 8 2.75 8H21.25Z" fill="black" />
    </svg>
  </BaseButton>
}
