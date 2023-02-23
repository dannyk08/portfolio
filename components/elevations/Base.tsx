import { Props } from 'next/script';
import styles from './Base.module.scss'

type BaseElevationProps = Props & {
  elevation?: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export default function BaseElevation(props: BaseElevationProps) {
  const { children, className, elevation = 0, ...rest } = props
  const elevationClass = `elevation-${elevation}`

  return <div className={[className, styles[elevationClass]].join(' ')} {...rest}>
    {children}
  </div>
}
