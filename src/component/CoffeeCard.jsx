import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CoffeeCard() {
    const {category}= useParams()
    const data= useLoaderData()
    console.log(data)
  return (
    <div>
      <h1>CoffeeCard...{category}</h1>
     
    </div>
  )
}
