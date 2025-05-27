import React from "react";
import Slider from "react-slick";
import mainSlider_1 from '../../assets/images/smx1.webp';
import mainSlider_2 from '../../assets/images/smx123_copy.webp';
import mainSlider_3 from '../../assets/images/smx12.webp';

function HomeSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="flex mb-3 relative ">
      <div className="w-full">
        <Slider {...settings}>
        
          <div className="relative w-full h-screen">
            <img
              className="w-full h-full object-cover"
              src={mainSlider_1}
              alt=""
            />
         <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 md:px-10 bg-black/30">
  <div className="text-white max-w-xl">
                <p className="text-5xl mb-2 font-light">
      Fragrances Define You
    </p>
    <h2 className=" text-5xl font-bold leading-tight">
      Explore Your Signature Scent
    </h2>
  </div>
</div>

          </div>

       
          <div className="relative w-full h-screen">
            <img
              className="w-full h-full object-cover"
              src={mainSlider_2}
              alt=""
            />
           <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 md:px-10 bg-black/30">
  <div className="text-white max-w-xl">
                <p className="text-sm sm:text-lg md:text-2xl mb-2 font-light">
      Fragrances Define You
    </p>
    <h2 className="text-xl sm:text-3xl md:text-5xl font-bold leading-tight">
      Explore Your Signature Scent
    </h2>
  </div>
</div>

          </div>

        
          <div className="relative w-full h-screen">
            <img
              className="w-full h-full object-cover"
              src={mainSlider_3}
              alt=""
            />
          <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 md:px-10 bg-black/30">
  <div className="text-white max-w-xl">
                <p className="text-sm sm:text-lg md:text-2xl mb-2 font-light">
      Fragrances Define You
    </p>
    <h2 className="text-xl sm:text-3xl md:text-5xl font-bold leading-tight">
      Explore Your Signature Scent
    </h2>
  </div>
</div>

          </div>
        </Slider>
      </div>
    </div>
    
  );
}

export default HomeSlider;
