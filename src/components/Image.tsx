import React from 'react'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  width?: number
  height?: number
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height, ...props }) => {
  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  )
}

export default Image
