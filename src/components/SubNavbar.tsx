import Link from 'next/link';
import Cap from './typography/Cap';
import styles from './SubNavbar.module.scss'

export default function SubNavList() {
  return <li className={styles.subNavbar}>
    <ul className={styles.subNavList}>
      <li>
        <Cap>
          <Link href='/about'>About</Link>
        </Cap>
      </li>
      <li>
        <Cap>
          <Link href='/resume'>Resume</Link>
        </Cap>
      </li>
      <li>
        <Cap>
          <Link href='/projects'>Projects</Link>
        </Cap>
      </li>
      <li>
        <Cap>
          <Link href='/contact'>Contact</Link>
        </Cap>
      </li>
    </ul>
  </li>
}
