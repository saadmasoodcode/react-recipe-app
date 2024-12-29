import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Category from '../Components/Category'


function Detail() {

  let params = useParams()
  const [details, setDetails] = useState({})
  const [active, setActive] = useState("instructions")

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${import.meta.env.VITE_RECIPE_API}`);
    const detailData = await data.json();
    setDetails(detailData)
  }

  useEffect(() => {
    fetchDetails()
  }, [params.id])
  
  return (
    <>
        <Category/>
      <div className="flex m-20 justify-center flex-col md:flex-row ">

        <div className=''>
          <img src={details.image} className="w-full	rounded-lg md:w-9/12" alt="img" />
          <h1 className="text-xl text my-5 w-9/12">{details.title}</h1>
        </div>
        <div className="w-full md:w-1/2">
          <button 
            className={active === "instructions" ? "bg-black text-white h-10 p-2 border-2 " : "bg-white text-black h-10 p-2 border-2"} onClick={()=>{
            setActive("instructions")
            }}>Instructions
          </button>
          <button 
            className={active === "ingredients" ? "bg-black text-white h-10 p-2 border-2 " : "bg-white text-black h-10 p-2 border-2"} onClick={()=>{setActive("ingredients")}}>Ingredients
          </button>
            {active === "instructions" && (
              <div className="w-full mt-5 flex flex-col gap-5">
                <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
              </div>
            ) }

            {active === "ingredients" && (
              <ol className="mt-5">
                {details.extendedIngredients.map((ingredient)=>(
                <li key={details.id}>{ingredient.original}</li>
                ))}
              </ol>
            )}
          
          
        </div>
      </div>
    </>
  )
}

export default Detail