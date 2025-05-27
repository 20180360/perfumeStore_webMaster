import React, { useState } from 'react'
import woman from '../../assets/images/259.webp'
import men from '../../assets/images/men.jpg'
import gift from '../../assets/images/gift.jpg'
import WomenPerfumes from '../WomanPerfums/WomanPerfums'
import { Link } from 'react-router-dom'
export default function Categories() {

  return (
    <>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
  <div className="lg:col-span-3 col-span-1 flex flex-col items-center">
    <div className="w-[100%] max-w-[900px] h-[300px] overflow-hidden rounded">
      <Link to="/woman">
        <img
          className="w-[100%] h-[100%] object-cover rounded cursor-pointer transform transition duration-300 hover:scale-105 hover:opacity-80"
          src={woman}
          alt="Woman Perfumes"
        />
      </Link>
    </div>
    <div className="flex justify-between py-4 w-full max-w-[900px]">
      <p className="text-lg">Woman Perfumes</p>
    </div>
  </div>

 
  <div className="col-span-1 flex flex-col items-center">
    <div className="w-[100%] max-w-[300px] h-[300px] overflow-hidden rounded">
      <Link to="/men">
        <img
          className="w-[100%] h-[100%] object-cover rounded cursor-pointer transform transition duration-300 hover:scale-105 hover:opacity-80"
          src={men}
          alt="Men Colognes"
        />
      </Link>
    </div>
    <div className="flex justify-between py-4 w-full max-w-[300px]">
      <p className="text-lg">Men Colognes</p>
    </div>
  </div>
</div>


    </> 
  )
}
