import React from 'react'
import Banner from '../component/Banner'
import Header from '../component/Header'
import Category from '../component/Category'
import { useLoaderData } from 'react-router-dom'

export default function Home() {
  const category= useLoaderData()
  return (
    <div>
      
      {/**
       * banner
       * Header
       * dynamic
       */}

       <Banner></Banner>
       <Header title={'Browse Coffees by Category'} subtitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste.'}></Header>
       <Category category={category}></Category>
    </div>
  )
}
