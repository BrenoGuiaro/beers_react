import React from 'react'
import imgNew from '../assets/new-beer.png'
const subText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius'

export const NewBeer = () => {
  return (
    <div className='div'>
      <img className='img' src={imgNew} alt=' ' />
      <h1 className='title'>New Beer</h1>
      <p className='subText'>{subText}</p>
    </div>
  )
}
