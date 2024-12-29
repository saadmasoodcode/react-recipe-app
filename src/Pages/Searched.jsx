import React from 'react'
import {useState, useEffect} from "react"
import {useParams, Link} from "react-router-dom"
import Category from '../Components/Category';



function Searched() {

  const [searchedRecipes, setSearchedRecipes] = useState([])
  const params = useParams()

  const getSearchedRecipes = async () => {
    try {
      const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_RECIPE_API}&number=9&query=${params.search}`)
      const data = await api.json()
      setSearchedRecipes(data.results)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getSearchedRecipes()
  },[params.search])

  return (
    <>
    <Category/>
    <div className="flex justify-center flex-wrap gap-10"> 
      {searchedRecipes.map((item)=>{
        return(
        <Link to={"/react-recipe-app/detail/" + item.id} >
          <div className="flex flex-col flex-wrap max-w-72 items-center">
            <img src={item.image} alt={item.title} className="rounded-lg"/>
            <p className="mt-5 text-center">{item.title}</p>
          </div>
        </Link>
        )
      })}
    </div>
      </>
  )
}

export default Searched