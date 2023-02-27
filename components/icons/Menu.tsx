import BaseButton from 'components/buttons/Base';

import styles from './Menu.module.scss'

type MenuIconProps = {
  active: boolean,
  onClick: () => void
}

export default function Menu({ active = false, onClick, ...rest }: MenuIconProps) {
  return <BaseButton {...rest} onClick={onClick} aria-label="Open navigation menu">
    <svg width="28" height="26" viewBox="0 0 800 790" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={[styles.menuSVG1, active ? styles.activeSVG1 : ''].join(' ')} d="M80 139H720C764.181 139 800 107.883 800 69.5C800 31.1175 764.181 0 720 0H80C35.8187 0 0 31.1175 0 69.5C0 107.883 35.8187 139 80 139Z" fill="#F5F5F5" />
      <path className={[styles.menuSVG2, active ? styles.activeSVG2 : ''].join(' ')} d="M80 469.5H720C764.181 469.5 800 438.383 800 400C800 361.617 764.181 330.5 720 330.5H80C35.8187 330.5 0 361.617 0 400C0 438.383 35.8187 469.5 80 469.5Z" fill="#F5F5F5" />
      <path className={[styles.menuSVG3, active ? styles.activeSVG3 : ''].join(' ')} d="M80 790H720C764.181 790 800 758.883 800 720.5C800 682.117 764.181 651 720 651H80C35.8187 651 0 682.117 0 720.5C0 758.883 35.8187 790 80 790Z" fill="#F5F5F5" />
    </svg>
  </BaseButton>
}
