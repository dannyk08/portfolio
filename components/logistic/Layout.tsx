import Footer from 'components/Footer';
import { Props } from 'next/script';
import Navbar from '../Navbar';
import styles from './Layout.module.scss'

export default function Layout({ children }: Props) {
  return <>
    <Navbar />
    <main className={styles.layout}>{children}</main>
    <Footer />
  </>

}
