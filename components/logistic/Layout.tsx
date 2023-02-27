import classNames from 'classnames';
import Footer from 'components/Footer';
import { useRouter } from 'next/router';
import { Props } from 'next/script';
import Navbar from '../Navbar';
import styles from './Layout.module.scss'

export default function Layout({ children }: Props) {
  const router = useRouter()

  return <>
    <Navbar />
    <main className={classNames(styles.layout, {
      [styles.home]: router.route == '/',
    })}>{children}</main>
    <Footer />
  </>

}
