import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import '../pages/Home.css'

export const SingleBeer = () => {

    const { id } = useParams()

    const [oneBeer, setOneBeer] = useState()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getBeer = async () => {
        try {
            const { data } = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            setOneBeer(data)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getBeer()
    }, [getBeer, id])
    return (
        <div>
            <NavBar />

            <img className='imgSingle' src={oneBeer?.image_url } alt='imgSingle' />
            <div className='todo'>
                <div className='boxText'>
                    <h1 className='titleSingle'>{oneBeer?.name}</h1>
                    <p className='tagSingle'>{oneBeer?.tagline}</p>
                </div>
                <div className='boxNumber'>
                   <p className='n1'>{oneBeer?.attenuation_level}</p>
                   <p className='n2'>{oneBeer?.first_brewed}</p>
                </div>
            </div>

            <div className='div2'>
                <p className='description'>{oneBeer?.description}</p>
                <p className='contributed'>{oneBeer?.contributed_by}</p>
            </div>

        </div>
    )
}
