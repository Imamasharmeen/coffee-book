import React, { useState, useEffect } from 'react'
import {  useLoaderData, useParams } from 'react-router-dom'
import Items from './Items'


export default function CoffeeCard() {
    const[coffees, setCoffees]= useState([])
    const {category}= useParams()
    const data = useLoaderData()
 
    useEffect(() => {
    
        if(category){
            const filteredByCategory = [...data].filter(
                coffee => coffee.category === category
              );
              setCoffees(filteredByCategory)
        }
        else{
            setCoffees(data.slice(0, 6))
        }
    
    }, [category, data])
    
  return (
    <div>
       
       {
        coffees.map(cards =><Items key={cards.id} cards={cards}></Items>)
       }
    </div>
  )
}
