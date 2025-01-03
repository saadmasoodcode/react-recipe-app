import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import Category from '../Components/Category';
import {Link} from 'react-router-dom'


function Cousine() {

  const [cousine, setCousine] = useState([])

  const params = useParams()
  console.log(params.type);
  
  const getCousine = async () => {
    try {
          const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_RECIPE_API}&number=9&cuisine=${params.type}`)
          const data = await api.json() 
          setCousine(data.results)
    } catch (error) {
      console.log(error);
      
    }

  }

  console.log(cousine);
  

  useEffect(()=>{
    getCousine()
  },[params.type])


  return (
    <>
    <Category/>
    <div className="flex justify-center flex-wrap gap-10"> 
      {cousine.map((item)=>{
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

export default Cousine