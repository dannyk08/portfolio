import { Props } from 'next/script';
import Navbar from '../Navbar';

export default function Layout({ children }: Props) {
  return <>
    <Navbar />
    <main>{children}</main>
  </>

}
