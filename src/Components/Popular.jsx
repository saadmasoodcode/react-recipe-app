import {useEffect, useState} from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

function Popular() {

const [popular, setPopular] = useState([])

useEffect(()=>{
  getPopular()
},[])


const getPopular = async () => {
  const check = localStorage.getItem("popular");

  if (check) {
    setPopular(JSON.parse(check));
    
  } else {
    try {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_RECIPE_API}&number=9`);
      const data = await api.json();

      if (Array.isArray(data.recipes)) {
        localStorage.setItem('popular', JSON.stringify(data.recipes));
        setPopular(data.recipes);
      } else {
        console.error('Fetched data is not an array:', data.recipes);
      }
    } catch (error) {
      console.error('Error fetching popular recipes:', error);
    }
  }
  console.log(popular);

};

  return (
    <div className='px-32'>
      <h2 className="font-bold mb-5	ml-10">Popular Picks</h2>
      <Splide className=''
      options={{
        perPage: 4,
        arrows: false,
      }}>
      {popular.map((item,index)=>{
        return(
          <SplideSlide key={item.id}>
          <div className="rounded-full p-5 w-full	 min-h-8" >
            <img src={item.image} alt={item.title} className="rounded-full bg-center	"/>
            <h2 className="mt-3 mb-3 text-center">{item.title}</h2>
          </div>
          </SplideSlide>
        )
      })}
    </Splide>
    </div>
  )
}

export default Popular