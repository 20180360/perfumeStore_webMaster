import { Heart, Eye } from 'lucide-react';
import menPerfumes from '../../../menPerfums.json';

import { useProductActions } from '../../hooks/useProductActions';
import { useNavigate } from 'react-router-dom';

export default function MenPerfums() {
  const { handleAddToCart, handleAddToWishlist, isInWishlist } = useProductActions();
const navigate = useNavigate();

  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
  {menPerfumes.menPerfumes.map((perfume) => (
    <div
      key={perfume.id}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col items-center"
    >
      {/* Fixed-size Image Container */}
      <div className="relative w-[300px] h-[300px]">
        <img
          src={perfume.image}
          alt={perfume.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
          <button
            className={`bg-white p-2 rounded-full shadow transition ${
              isInWishlist(perfume.id) ? "bg-rose-100" : "hover:bg-rose-100"
            }`}
            onClick={() => handleAddToWishlist(perfume)}
          >
            <i
              className={`cursor-pointer text-rose-500 hover:text-rose-600 transition ${
                isInWishlist(perfume.id)
                  ? "fa-solid fa-heart"
                  : "fa-regular fa-heart"
              }`}
            />
          </button>
          <button
            onClick={() => navigate(`/product/${perfume.id}`)}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
          >
            <Eye size={20} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Details & Action */}
      <div className="p-4 flex flex-col justify-between w-full max-w-[300px]">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{perfume.name}</h3>
          <p className="text-sm text-gray-500">{perfume.brand}</p>
        </div>
        <div className="mt-2">
          <p className="text-md font-bold text-amber-600">${perfume.price}</p>
          <button
            className="mt-2 w-full bg-amber-950 text-white py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => handleAddToCart(perfume)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

  );
}
