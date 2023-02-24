import Image from 'next/image';
import Link from 'next/link';
import BaseElevation from './elevations/Base';
import Menu from './icons/Menu';
import { useEffect, useState } from 'react';
import windowSize from 'effects/windowSize';
import SubNavList from './SubNavbar';
import Modal from './Modal';
import { useRouter } from 'next/router';
import styles from './Navbar.module.scss'

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false)
  const router = useRouter()
  const size = windowSize()

  const handleMenuClick = () => {
    setMenuActive(!menuActive)
  }

  useEffect(() => {
    if (menuActive) {
      setMenuActive(!menuActive)
    }
  }, [router.asPath])

  return <BaseElevation elevation={3}>
    <nav>
      <ul className={styles.mainNavList}>
        <li>
          <Link href='/' aria-label='Home page'>
            <Image src='/favicon.svg' alt="Danny's IO logo" width={50} height={50} priority />
          </Link>
        </li>

        {
          size.isMobile &&
          <li>
            <Menu active={menuActive} onClick={handleMenuClick} />
          </li>
        }

        {
          !size.isMobile && <SubNavList />
        }
      </ul>

      <Modal active={size.isMobile && menuActive}>
        {
          size.isMobile &&
          menuActive && <SubNavList />
        }
      </Modal>
    </nav>
  </BaseElevation>

}
