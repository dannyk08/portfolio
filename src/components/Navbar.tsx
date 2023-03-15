import BaseElevation from './elevations/Base';
import Menu from './icons/Menu';
import { useEffect, useState } from 'react';
import useWindowSize from '@/effects/useWindowSize';
import SubNavList from './SubNavbar';
import Modal from './Modal';
import { useRouter } from 'next/router';
import Logo from './icons/Logo';
import styles from './Navbar.module.scss'

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false)
  const router = useRouter()
  const size = useWindowSize()

  const handleMenuClick = () => {
    setMenuActive(!menuActive)
  }

  useEffect(() => {
    if (menuActive) {
      handleMenuClick()
    }
  }, [router.asPath])

  return <BaseElevation elevation={3}>
    <nav>
      <ul className={styles.mainNavList}>
        <li>
          <Logo as="link" href='/' aria-label="Danny's IO Homepage" />
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
          menuActive && <ul className={styles.subNavList}>
            <SubNavList />
          </ul>
        }
      </Modal>
    </nav>
  </BaseElevation>
}
