import { Props } from 'next/script';
import BaseElevation from './elevations/Base';

export default function Thumbnail(props: Props) {
  const { children, ...rest } = props
  return <BaseElevation elevation={4} {...rest}>
    {children}
  </BaseElevation>
}
