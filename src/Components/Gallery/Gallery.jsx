import React from 'react'
import './Gallery.css'
import gym_1 from '../../assets/gym1.jpeg'
import gym_2 from '../../assets/gym2.jpeg'
import gym_3 from '../../assets/gym3.jpg'
import white_arrow from '../../assets/white-arrow.png'

const Gallery = () => {
  return (
    <div className='gymPhotos'>
      <div className="gallery">
        <img src={gym_1} alt="" />
        <img src={gym_3} alt="" />
        <img src={gym_2} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Gallery
