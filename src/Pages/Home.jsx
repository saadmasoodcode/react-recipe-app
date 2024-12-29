import React from 'react'
import Popular from '../Components/Popular'
import Veggies from '../Components/Veggies'
import Category from '../Components/Category'
import Search from '../Components/Search'

function Home() {
  return (
  <>
    <Search/>
    <Category/>
    <Popular/>
    <Veggies/>
  </>
  )
}

export default Home