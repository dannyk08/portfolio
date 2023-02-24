import Link from 'next/link';
import { Props } from 'next/script';
import Cap from './typography/Cap';
import styles from './SubNavbar.module.scss'

export default function SubNavList(props: Props) {
  return <div className={styles.subNavbar}>
    <ul className={styles.subNavList}>
      <li>
        <Cap>
          <Link href='/'>About</Link>
        </Cap>
      </li>
      <li>
        <Cap>
          <Link href='/resume'>Resume</Link>
        </Cap>
      </li>
      <li>
        <Cap>
          <Link href='/project'>Projects</Link>
        </Cap>
      </li>
      <li>
        <Cap>
          <Link href='/contact'>Contact</Link>
        </Cap>
      </li>
    </ul>
  </div>
}
