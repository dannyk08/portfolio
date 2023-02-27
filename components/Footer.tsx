import Link from 'next/link';
import { Props } from 'next/script';
import BaseElevation from './elevations/Base';
import Base from './icons/Base';
import Lead from './typography/Lead';
import P from './typography/P';
import styles from './Footer.module.scss'

export default function Footer(props: Props) {
  return <BaseElevation>
    <footer>
      <ul className={styles.mainNav}>
        <li>
          <ul className={styles.subNavCredits}>
            <li>
              <P>Created with ❤️ by Daniel Romero</P>
            </li>
            <li>
              <P>Layout inspiration from <Link href="https://www.wix.com/website-template/view/html/2622">Wix template</Link>.</P>
            </li>
            <li>
              <P>UI Kit inspiration from <Link href="https://freedesignresources.net/free-core-design-system-for-figma/">Figma Core Design</Link>.</P>
            </li>
          </ul>
        </li>

        <li>
          <ul className={styles.subNavCommunications}>
            <li>
              <Lead>Follow</Lead>
              <ul className={styles.subNavIcons}>
                <li>
                  <P>
                    <Link href="https://www.linkedin.com/in/dannyk08/" target="_blank" aria-label="Visit Daniel Romero's LinkedIn">
                      <Base iconName='linkedin' />
                    </Link>
                  </P>
                </li>

                <li>
                  <P>
                    <Link href="https://github.com/dannyk08/" target="_blank" aria-label="Visit Daniel Romero's GitHub">
                      <Base iconName='github' />
                    </Link>
                  </P>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  </BaseElevation>
}
