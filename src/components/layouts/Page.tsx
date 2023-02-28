import classNames from 'classnames';
import { Props } from 'next/script';
import Container from './Container';
import styles from './Page.module.scss'

export default function Page(props: Props) {
  const { children, className } = props

  return <div className={classNames(styles.page, className)}>
    <Container className={styles.container}>
      {children}
    </Container>
  </div>
}
