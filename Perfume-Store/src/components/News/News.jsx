import React, { useState } from 'react'
import { FaTruck, FaCreditCard, FaHeadset } from 'react-icons/fa'
import sliderone from'../../assets/images/slider1.jpg'
import slidertwo from'../../assets/images/slider2.webp'
import sliderthree from'../../assets/images/slider3.webp'
import sliderfour from'../../assets/images/slider4.jpg'
import sliderfive from'../../assets/images/slider5.webp'
import slidersix from'../../assets/images/slider6.jpg'
const items = [
  { id: 1, image: sliderone, title: 'We bring you the best ', description: 'Phasellus condimentum nulla a arcu lacinia, a venenatis ex congue' },
  { id: 2, image: slidertwo, title: 'We know that buying Items', description: 'Using Lorem Ipsum allows designers to put together layoutsand the form content'},
  { id: 3, image: sliderthree, title: 'We design functional Items', description: 'Risus non porta suscipit lobortis habitasse felis, aptentinterdum pretium ut' },
  { id: 4, image: sliderfour, title: 'We know that buying Items', description: 'Class integer tellus praesent at torquent cras, potenti erat fames volutpat etiam.' },
  { id: 5, image: sliderfive, title: 'We bring you the bes', description: ' Phasellus condimentum nulla a arcu lacinia, a venenatis ex congue.Mauris nec ante magna.' },
  { id: 6, image: slidersix, title: 'We know that buying Item', description: 'Using Lorem Ipsum allows designers to put together layoutsand the form content' },
];

const VISIBLE_COUNT = 3; 
const STEP = 2;
export default function News() {

  const [startIndex, setStartIndex] = useState(0);
  const maxStart = items.length - VISIBLE_COUNT;

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + STEP, maxStart));
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - STEP, 0));
  };

  const visibleItems = items.slice(startIndex, startIndex + VISIBLE_COUNT);


  return (
    <>
    <div className="bg-yellow-900  py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
   
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
          <div className="text-yellow-700 text-4xl mb-4 mx-auto">
            <FaTruck />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">EU Free Delivery</h3>
          <p className="text-gray-600 text-sm">
            Free delivery on all orders from EU over <span className="font-medium">$90.00</span>.
          </p>
        </div>

        
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
          <div className="text-yellow-700 text-4xl mb-4 mx-auto">
            <FaCreditCard />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Secure Payments</h3>
          <p className="text-gray-600 text-sm">
            We offer secure and fast payment options for all major credit cards.
          </p>
        </div>

    
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
          <div className="text-yellow-700 text-4xl mb-4 mx-auto">
            <FaHeadset />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">24/7 Support</h3>
          <p className="text-gray-600 text-sm">
            Our team is available 24/7 to assist you with any inquiries or support.
          </p>
        </div>
      </div>
    </div>
    <div className='flex justify-center py-6'>
        <h2>Our Latest News</h2>

    </div>
  
<div className="mx-auto p-6 max-w-7xl">
  <div className="flex items-center space-x-4">
    <button
      onClick={handlePrev}
      disabled={startIndex === 0}
      className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
    >
      Prev
    </button>
    <div className="flex flex-1 justify-center overflow-x-auto space-x-6 scrollbar-hide">
      {visibleItems.map(({ id, image, title, description }) => (
        <div
          key={id}
          className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg p-4"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded mb-3"
          />
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      ))}
    </div>

    <button
      onClick={handleNext}
      disabled={startIndex >= maxStart}
      className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
    >
      Next
    </button>
  </div>
</div>

   
    </>
  )
}

