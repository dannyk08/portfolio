import classNames from 'classnames'
import { Props } from 'next/script'
import { useInView } from 'react-intersection-observer'
import styles from './Card.module.scss'

export default function Card(props: Props) {
  const { children, className } = props
  const { ref, inView } = useInView({
    threshold: .75
  })

  return <div className={classNames(styles.card, className,{ 
    [styles.cardInView]: inView
  })} ref={ref}>
    {children}
  </div>
}
