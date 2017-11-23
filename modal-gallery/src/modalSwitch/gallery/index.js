import React from 'react'
import { Link } from 'react-router-dom'
import IMAGE from '../image/index'

const Thumbnail = ({color}) =>
  <div style={{
    width: 50,
    height: 50,
    background: color
  }} />

const Gallery = () => (
  <div>
    {
      IMAGE.map(i => (
        <Link
          key={i.id}
          to={{
            pathname: `/img/${i.id}`,
            state: {modal: true}
          }}
        >
          <Thumbnail color={i.color} />
          <p>{i.title}</p>
        </Link>
      ))
    }
  </div>
)

export default Gallery
