import React, { useState, useEffect } from 'react'
import {  useLoaderData, useNavigate, useParams } from 'react-router-dom'
import Items from './Items'


export default function CoffeeCard() {
    const navigate=useNavigate()
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
       
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
      {
        coffees.map(cards =><Items key={cards.id} cards={cards}></Items>)
       }
      </div>

       <button className='btn btn-warning' onClick={()=> navigate('/coffees')}>View All</button>
    </div>
  )
}
