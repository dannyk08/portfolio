import BaseElevation from './elevations/Base';
import Menu from './icons/Menu';
import { useEffect, useState } from 'react';
import windowSize from 'effects/windowSize';
import SubNavList from './SubNavbar';
import Modal from './Modal';
import { useRouter } from 'next/router';
import Logo from './icons/Logo';
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
          menuActive && <SubNavList />
        }
      </Modal>
    </nav>
  </BaseElevation>

}
