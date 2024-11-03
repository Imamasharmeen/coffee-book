import React from 'react'
import { Link} from 'react-router-dom'

export default function Items({cards}) {
    const { name, image, category, origin, type, id, rating, popularity } =
    cards || {}
  return (
    <div>
        <Link to={`/coffee/${id}`}
            className='transition  hover:scale-105 shadow-xl overflow-hidden rounded-xl '>
            <figure className='w-full h-48 overflow-hidden rounded-xl '>
                <img className='' src={image} alt='' />
            </figure>
            <div className='p-4'>
                <h1 className='text-xl'>Name: {name}</h1>
                <p>Category: {category}</p>
                <p>Type: {type}</p>
                <p>Origin: {origin}</p>
                <p>Rating: {rating}</p>
                <p>Popular: {popularity}</p>
            </div>
        </Link>
    </div>
  )
}
