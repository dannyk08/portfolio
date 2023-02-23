import Link from 'next/link';
import { Props } from 'next/script';
import styles from './SubNavbar.module.scss'
import Cap from './typography/Cap';

export default function SubNavList(props: Props) {
  return <div className={styles.subNavbar}>
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
