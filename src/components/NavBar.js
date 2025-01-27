import React from 'react'
import {FaHome} from 'react-icons/fa'
import '../pages/Home.css'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='head'>
      <Link to='/'><FaHome style={{color: 'white', fontSize: '40px', margin:'10px 0px 0px 0px'}}/></Link>
      </div>
  )
}
