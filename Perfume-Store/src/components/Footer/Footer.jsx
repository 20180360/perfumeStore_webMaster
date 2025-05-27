import React, { useEffect, useState } from 'react'
import itemone from '../../assets/images/item-instagram-1.jpg'
import itemtwo from '../../assets/images/item-instagram-2.jpg'
import itemthree from '../../assets/images/item-instagram-3.jpg'
import itemfour from '../../assets/images/item-instagram-4.webp'
import itemfive from '../../assets/images/item-instagram-5.webp'
export default function Footer() {
    const [first, setfirst] = useState(0);
    useEffect(() => {
      
    
      
    }, [])
      const images = [itemone, itemtwo, itemthree, itemfour, itemfive];

  return <> 
<div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
        <i className="fa-brands fa-instagram text-5xl text-yellow-900 transition-transform hover:scale-110 cursor-pointer"></i>
        <h2 className="text-2xl font-semibold text-gray-800">Instagram Feed</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 pb-12 max-w-6xl mx-auto justify-center">
  {images.map((img, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow flex justify-center items-center"
    >
      <img
        src={img}
        alt={`Instagram ${index + 1}`}
        className="w-60 h-60 object-cover hover:scale-105 transition-transform duration-300" 
       
      />
    </div>
  ))}
</div>

<footer className="bg-gray-100 text-gray-700 pt-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
       
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Menu</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-800">New Arrivals</a></li>
            <li><a href="#" className="hover:text-yellow-800">Life Style</a></li>
            <li><a href="#" className="hover:text-yellow-800">Accents</a></li>
            <li><a href="#" className="hover:text-yellow-800">Tables</a></li>
            <li><a href="#" className="hover:text-yellow-800">Dining</a></li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Sign up for our free video course and urban garden inspiration.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-800"
            />
            <button className="bg-yellow-800 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition">
              SUBSCRIBE
            </button>
          </form>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-800">FAQs</a></li>
            <li><a href="#" className="hover:text-yellow-800">Track Order</a></li>
            <li><a href="#" className="hover:text-yellow-800">Delivery</a></li>
            <li><a href="#" className="hover:text-yellow-800">Contact Us</a></li>
            <li><a href="#" className="hover:text-yellow-800">Return</a></li>
          </ul>
        </div>
      </div>

     
      <div className="border-t pt-6 text-center text-sm text-gray-500">
        Copyright © 2020 <span className="font-semibold text-gray-700">Arome</span>. All rights reserved.
      </div>
    </footer>
  </>
}
