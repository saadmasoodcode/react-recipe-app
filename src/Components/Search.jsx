import React from 'react'
import {FaSearch} from "react-icons/fa"
import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"

function Search() {

  const [search, setSearch] = useState("")
  const navigate = useNavigate()

const submitHandler = (e) => {
  e.preventDefault();
  navigate("/react-recipe-app/searched/" + search);
};

  return (
    <form onSubmit={submitHandler} className="mt-10 flex items-center justify-center relative w-full">
      <div className="relative bg-black flex items-center justify-center rounded-lg w-1/2 mx-10 h-10 text-white">
        <FaSearch className="absolute left-3 text-white" />
        <input 
          onChange={(e)=>setSearch(e.target.value)}
          value={search}
          type="text"
          className="bg-black rounded-lg w-full h-full text-white border-none outline-none pl-10"
          placeholder="Search..."
        />
      </div>
    </form>
  )
}

export default Search