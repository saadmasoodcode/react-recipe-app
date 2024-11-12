import {useEffect, useState} from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

function Veggies() {

const [veggies, setVeggies] = useState([])

useEffect(()=>{
  getVeggies()
},[])


const getVeggies = async () => {
  const check = localStorage.getItem("veggies");

  if (check) {
    setVeggies(JSON.parse(check));
    
  } else {
    try {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_RECIPE_API}&number=9&tags=vegetarian`);
      const data = await api.json();

      if (Array.isArray(data.recipes)) {
        localStorage.setItem('veggies', JSON.stringify(data.recipes));
        setVeggies(data.recipes);
      } else {
        console.error('Fetched data is not an array:', data.recipes);
      }
    } catch (error) {
      console.error('Error fetching popular recipes:', error);
    }
  }
  console.log(veggies);

};

  return (
    <div className='px-32'>
      <h2 className="font-bold mb-5	ml-10">Vegetarian Picks</h2>
      <Splide className=''
      options={{
        perPage: 3,
        arrows: false,
        breakpoints: {
          768: {
            perPage: 1, // Adjust number of slides for smaller screens
          },
          1024: {
            perPage: 2, // Adjust for tablets
          },
        }
      }}>
      {veggies.map((item,index)=>{
        return(
          <SplideSlide key={item.id}>
          <div className="rounded-full p-5 w-full	" >
            <img src={item.image} alt={item.title} className="rounded-full bg-center"/>
            <h2 className="mt-3 mb-3 text-center">{item.title}</h2>
          </div>
          </SplideSlide>
        )
      })}
    </Splide>
    </div>
  )
}

export default Veggies