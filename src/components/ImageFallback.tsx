import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import classNames from 'classnames';
import styles from './ImageFallback.module.scss'

export const getDummyImage = (props: Partial<ImageProps>) => `https://dummyimage.com/${props.width ?? 200}x${props.height ?? 200}/000/fff.png&text=Loading...`

export default function ImageFallback(props: ImageProps) {
  const { className, src, ...rest } = props
  const [fallbackImage, setFallbackImage] = useState(getDummyImage(props))
  const [imgSrc, setImgSrc] = useState(src)

  return <Image
    {...rest}
    src={imgSrc}
    style={{
      backgroundImage: `url(${fallbackImage})`,
    }}
    className={classNames(styles.imageFallback, className)}
    onError={() => {
      setImgSrc(fallbackImage)
    }}
    onLoad={() => {
      setFallbackImage('')
    }}
  />
}
