import React from 'react'
import './Home.css'
import { AllBeers } from './AllBeers'
import { RandomBeer } from './RandomBeer'
import { NewBeer } from './NewBeer'
import { Link } from 'react-router-dom'


export const Home = () => {

  return (

    <div className='body'>
      <Link to='/beer' style={{ textDecoration: 'none' }}><AllBeers /></Link>
      <Link to='/random' style={{ textDecoration: 'none' }}><RandomBeer /></Link>

      <NewBeer />
    </div>


  )
}
