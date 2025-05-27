import React from "react";
import aboutimage from"../../assets/images/about.webp";
import about2 from"../../assets/images/1443.webp";
import personone from"../../assets/images/team5.webp";
import persontwo from"../../assets/images/team3.webp";
import personthree from"../../assets/images/team4.webp";
import personfour from"../../assets/images/team6.webp";
export default function About() {
  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      <section className="px-4 py-10 flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-8">
  <div className="flex justify-center w-full lg:w-1/2">
    <img
      src={aboutimage}
      alt="About Arome"
      className="object-cover rounded" 
    />
  </div>

  <div className="w-full lg:w-1/2 px-2 lg:px-6 text-center lg:text-left">
    <h2 className="text-amber-950 font-bold mb-4 text-sm tracking-wide">WHO WE ARE</h2>
    <h2 className="text-3xl sm:text-4xl font-semibold mb-6 leading-snug">
      <strong>Arome®</strong> was founded on the belief that Perfect Perfume is more than just a necessity.
    </h2>
    <p className="text-gray-600 py-4 text-base">
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.
    </p>
    <button className="bg-amber-950 text-white px-6 py-2 rounded-xl hover:bg-rose-700 transition">
      Shop Now
    </button>
  </div>
</section>

 <section className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10 text-center bg-amber-950  text-white">
          <div>
          <p className="text-4xl font-bold">1.5K</p>
          <p className="uppercase text-sm">Retail Outlets</p>
        </div>
        <div>
          <p className="text-4xl font-bold">1.3 MILLION</p>
          <p className="uppercase text-sm"> Customers</p>
        </div>
        <div>
          <p className="text-4xl font-bold">2.5K</p>
          <p className="uppercase text-sm">Pharmacists</p>
        </div>
      
        <div>
          <p className="text-4xl font-bold">5.0K</p>
          <p className="uppercase text-sm">Products</p>
        </div>
      </section>
      <section className=" dark:bg-gray-800 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-10">What Our Customers Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {["Megan Steele", "Karen Summers", "Darrel Austin"].map((name, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                <p className="italic mb-4">“Arome supplements have been a game-changer for me! I feel more energized and healthier than ever. Highly recommend!”</p>
               <div className="icons text-amber-900 py-4">
                 <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
               </div>
                <p className="font-semibold">{name}</p>
<p className="text-sm text-amber-900 ">
                    <i class="fa-solid fa-circle-check mr-2"></i>
                    Verified Buyer</p>
          
              </div>
            ))}
          </div>
        </div>
      </section>

     <section className="flex flex-col-reverse md:flex-row items-center px-6 py-16 bg-white dark:bg-gray-900 gap-10 max-w-6xl mx-auto">
  
  <div className="w-full lg:w-1/2 text-center lg:text-left">
    <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-rose-700">WHY CHOOSE US</h3>
    <h2 className="text-3xl sm:text-4xl font-semibold leading-snug mb-6">
      Fast, Reliable, and Committed to Your Satisfaction.
    </h2>
    <p className="text-lg max-w-xl mx-auto lg:mx-0 mb-6 text-gray-600">
      Our team consists of highly skilled professionals with extensive training and certifications, ensuring top-quality service.
    </p>
    <button className="bg-rose-600 text-white px-6 py-2 rounded-xl hover:bg-rose-700 transition">
      Shop Now
    </button>
  </div>

  
  <div className="w-full lg:w-1/2 flex justify-center">
    <img
      src={about2}
      alt="Why Choose Us"
      className=" object-cover rounded"
    />
  </div>
</section>

    

     
     <section className="bg-gray-50 dark:bg-gray-800 py-14 px-6">
  <h3 className="text-2xl font-bold text-center mb-10">Meet Our Experts</h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {[
      { name: "Michael Murray", role: "Perfume Expert", image: personone },
      { name: "Kevin Berke", role: "Administrator", image: persontwo },
      { name: "Kristopher Bunn", role: "Perfume Expert", image: personthree },
      { name: "Barbara Hamby", role: "Lab Assistant", image: personfour},
    ].map((expert, idx) => (
      <div key={idx} className="text-center">
        <img
          src={expert.image}
          alt={expert.name}
          className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-2 border-rose-300"
        />
        <p className="font-semibold">{expert.name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-300">{expert.role}</p>
      </div>
    ))}
  </div>
</section>


   

    </div>
  );
}

