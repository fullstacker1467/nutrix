import React from 'react'
import Basic from '../components/Basic'
import Chefs from '../components/Chefs'
import Header from '../components/Header'
import Recipe from '../components/Recipe'
import Topsale from '../components/Topsale'
import Work from '../components/Work'

function Home() {
  return (
    <>
    <Header />
    <Basic />
    <Work />
    <Topsale />
    <Chefs />
    <Recipe />
    </>
  )
}

export default Home