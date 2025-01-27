import React from 'react'
import { NavBar } from '../components/NavBar'
import '../pages/Home.css'
import { Link } from 'react-router-dom'

export const ListBeers = ({ beers }) => {



  return (

    <div>
      <NavBar />
      {beers.map((beer) => {
        return (
          <Link  to={`/${beer._id}`} style={{textDecoration: 'none'}}>
            <div className='listBeer'>
              <img src={beer.image_url} className='imgProducts' alt=' ' />
              <div className='divText'>
                <h1 className='name'>{beer.name}</h1>
                <p className='tag'>{beer.tagline}</p>
                <p className='create'><p style={{ fontWeight: 'bold' }}>Create by:</p>{beer.name}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>

  )
}
