import React from 'react'
import { FaPizzaSlice } from "react-icons/fa";
import { PiHamburgerFill } from "react-icons/pi";
import { GiNoodles } from "react-icons/gi";
import { GiChopsticks } from "react-icons/gi";



function Category() {
  return (
    <div className="flex justify-center py-10 gap-10">
      <div className="flex items-center flex-col bg-black rounded-full w-20 justify-center text-white py-5 cursor-pointer">
        <FaPizzaSlice/>
        <h6 className="text-xs mt-1">Italian</h6>
      </div>
      <div className="flex items-center flex-col bg-black rounded-full w-20 justify-center text-white py-5 cursor-pointer">
        <PiHamburgerFill/>
        <h3  className="text-xs mt-1">American</h3>
      </div>
      <div className="flex items-center flex-col bg-black rounded-full w-20 justify-center text-white py-5 cursor-pointer">
        <GiNoodles/>
        <h3 className="text-xs mt-1">Thai</h3>
      </div>
      <div className="flex items-center flex-col bg-black rounded-full w-20 justify-center text-white py-5 cursor-pointer">
        <GiChopsticks/>
        <h3 className="text-xs mt-1">Japanese</h3>
      </div>
    </div>
  )
}

export default Category