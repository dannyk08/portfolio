import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Cap from './typography/Cap';
import styles from './SubNavbar.module.scss'

interface Routes {
  url: string,
  redirect?: string,
  label: string,
}

const routes: Routes[] = [
  {
    url: '/about',
    redirect: '/',
    label: 'About',
  },
  {
    url: '/resume',
    label: 'Resume',
  },
  {
    url: '/projects',
    label: 'Projects',
  },
  {
    url: '/contact',
    label: 'Contact',
  },
]

export default function SubNavList() {
  const router = useRouter()

  return <li className={styles.subNavbar}>
    <ul className={styles.subNavList}>
      {
        routes.map(({
          url,
          redirect,
          label,
        }) => <li key={url}>
            <Cap>
              <Link
                className={classNames({
                  [styles.activeLink]: router.pathname == redirect || router.pathname == url
                })}
                href={url}
              >
                {label}
              </Link>
            </Cap>
          </li>)
      }
    </ul>
  </li>
}
