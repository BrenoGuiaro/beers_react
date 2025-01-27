import React, { useEffect, useState } from 'react'
import { NavBar } from '../components/NavBar'

export const BeerRandom = ({ beers }) => {
    const [beer, setBeear] = useState(null)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const random = async () => {
        if (beers.length !== 0) {
            const beerRandom = Math.floor(Math.random() * beers.length)
            setBeear(beers[beerRandom])
        }
    }


    useEffect(() => {
        random()
    }, [beers, random])

    if (!beer) {
        return <p>Carregando...</p>
    }
    
    return (
        <div>
            <NavBar />

            <img className='imgSingle' src={beer?.image_url} alt='imgSingle' />
            <div className='todo'>
                <div className='boxText'>
                    <h1 className='titleSingle'>{beer?.name}</h1>
                    <p className='tagSingle'>{beer?.tagline}</p>
                </div>
                <div className='boxNumber'>
                    <p className='n1'>{beer?.attenuation_level}</p>
                    <p className='n2'>{beer?.first_brewed}</p>
                </div>
            </div>

            <div className='div2'>
                <p className='description'>{beer?.description}</p>
                <p className='contributed'>{beer?.contributed_by}</p>
            </div>

        </div>
    )
}
