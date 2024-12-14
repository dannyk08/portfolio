import Link from "next/link";
import BaseElevation from "./elevations/Base";
import Base, { IconNames } from "./icons/Base";
import Lead from "./typography/Lead";
import P from "./typography/P";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <BaseElevation>
      <footer>
        <ul className={styles.mainNav}>
          <li>
            <ul className={styles.subNavCredits}>
              <li>
                <P>Created with ❤️ by Daniel Joffe</P>
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
                      <Link
                        href="https://www.linkedin.com/in/dannyk08/"
                        target="_blank"
                        aria-label="Visit Daniel Joffe's LinkedIn"
                      >
                        <Base iconName={IconNames.linkedin} />
                      </Link>
                    </P>
                  </li>

                  <li>
                    <P>
                      <Link
                        href="https://github.com/dannyk08/"
                        target="_blank"
                        aria-label="Visit Daniel Joffe's GitHub"
                      >
                        <Base iconName={IconNames.github} />
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
  );
}
