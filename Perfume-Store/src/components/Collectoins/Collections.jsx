
import { useState } from 'react';
import BestSellers from '../BestSellers/BestSellers';
import NewArrivals from '../NewArrivals/NewArrivals';
import TopRelated from '../TopRelated/TopRelated';

const Collections = () => {
  const [activeTab, setActiveTab] = useState('best');

  return (
    <section className="w-full py-10">
      <h2 className="text-3xl text-center font-bold mb-6">Our Products</h2>

      
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab('best')}
          className={`px-4 py-2 rounded-full ${activeTab === 'best' ? 'bg-amber-950 text-white' : 'bg-gray-200'}`}
        >
          Best Sellers
        </button>
        <button
          onClick={() => setActiveTab('new')}
          className={`px-4 py-2 rounded-full ${activeTab === 'new' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
        >
          New Arrivals
        </button>
        <button
          onClick={() => setActiveTab('top')}
          className={`px-4 py-2 rounded-full ${activeTab === 'top' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
        >
          Top Related
        </button>
      </div>

      
      <div className="container mx-auto px-4">
        {activeTab === 'best' && <BestSellers />}
        {activeTab === 'new' && <NewArrivals />}
        {activeTab === 'top' && <TopRelated />}
      </div>
    </section>
  );
};

export default Collections;
