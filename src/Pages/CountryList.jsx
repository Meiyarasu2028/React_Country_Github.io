import React, { useEffect, useState } from 'react'
import Loading from '../Componends/Loading'
import { Link } from 'react-router-dom'

const CountryList = () => {

    const [CountryDetails, setCountryDetails] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,flags")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setCountryDetails(data)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h1 className='text-3xl font-bold p-6 mb-6'>Countries</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 p-4'>
                {
                    CountryDetails.map((country, i) => {
                        return <Link  key={i}  to={`/country/${country.name.common}`}
                            className='p-4 border rounded-xl shadow-md flex flex-col items-center gap-4'>
                            <img className='h-32 w-full object-contain' src={country.flags.svg} alt={country.name.common} />
                            <p className='font-medium'>{country.name.common}</p>
                        </Link>
                    })  
                }
            </div>
        </div>
    )
}

export default CountryList