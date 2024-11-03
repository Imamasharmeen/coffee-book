import React from 'react'
import {  useLoaderData, useParams } from 'react-router-dom'
import Items from './Items'


export default function CoffeeCard() {
    const {category}= useParams()
    const data = useLoaderData()
    console.log(data)
    
  return (
    <div>
       <h1>{category}</h1>
       {
        data.map(cards =><Items key={cards.category} cards={cards}></Items>)
       }
    </div>
  )
}
