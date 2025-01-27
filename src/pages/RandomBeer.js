import React from 'react'
import imgRandom from '../assets/random-beer.png'
const subText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius'

export const RandomBeer = () => {
  return (
    <div className='div'>
      <img className='img' src={imgRandom} alt=' ' />
      <h1 className='title'>Random Beer</h1>
      <p className='subText'>{subText}</p>
    </div>
  )
}
