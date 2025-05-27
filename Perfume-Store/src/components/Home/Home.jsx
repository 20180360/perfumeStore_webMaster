import React, { useEffect, useState } from 'react'
import HomeSlider from '../HomeSlider/HomeSlider';
import Categories from '../Categories/Categories';
import Collections from '../Collectoins/Collections';
import News from '../News/News';
import Footer from '../Footer/Footer';


export default function Home() {
    const [first, setfirst] = useState(0);
    useEffect(() => {
      
     
      
    }, [])
    
  return <>
  <HomeSlider/>
  <Categories/>
  <Collections/>
  <News/>
  
  </>
}
