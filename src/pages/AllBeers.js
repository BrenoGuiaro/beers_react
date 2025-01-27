import React from 'react'
import imgAll from '../assets/beers.png'

export const AllBeers = () => {
  const subText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius'
  return (

    <div className='div'>
      <img className='img' src={imgAll} alt='beersImg' />
      <h1 className='title'>All Beers</h1>
      <p className='subText'>{subText}</p>
    </div>
  )
}
