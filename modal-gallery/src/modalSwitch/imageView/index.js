import React from 'react'
import IMAGE from '../image/index'

const Image = ({color}) =>
  <div style={{
    width: '100%',
    height: 400,
    background: color
  }} />

const ImageView = ({match}) => {
  const image = IMAGE[parseInt(match.params.id, 10)]
  if (!image) {
    return <div>Image not found</div>
  }
  return (
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color} />
    </div>
  )
}

export default ImageView
