import React, { useEffect, useState } from 'react'
import Loading from '../Componends/Loading'
import { useParams } from 'react-router-dom'

const CountryDetails = () => {

    const { name } = useParams()
    console.log(name)
    const [CountryData, setCountryData] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {

        fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setCountryData(data[0])
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h2 className='text-3xl font-bold p-6'>{CountryData.name.common}</h2>
            <div className='rounded-md border-2 p-10 w-fit'>
                <img className=' h-32 mb-5' src={CountryData.flags.svg} alt={CountryData.name.common} />
                <p><b>Capital:</b>{CountryData.capital?.[0]}</p>
                <p><b>Region:</b>{CountryData.region}</p>
                <p><b>population:</b>{CountryData.population?.toLocaleString()}</p>
                <p className='mt-2'>
                    <a className='text-blue-500 underline-offset-4 hover:shadow-xl hover:underline' href={CountryData.maps?.googleMaps} target='_blank'>
                        View on Google Map
                    </a>
                </p>
            </div>
        </div>
    )
}

export default CountryDetails