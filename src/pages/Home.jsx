import React from 'react'
import Banner from '../component/Banner'
import Header from '../component/Header'
import Category from '../component/Category'

export default function Home() {
  return (
    <div>
      <h1>Home...</h1>
      {/**
       * banner
       * Header
       * dynamic
       */}

       <Banner></Banner>
       <Header></Header>
       <Category></Category>
    </div>
  )
}
