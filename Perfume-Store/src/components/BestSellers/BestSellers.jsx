import perfumeOne from '../../assets/images/perfume-1.webp'
import men from '../../assets/images/men.jpg'
import perfumeTwo from '../../assets/images/perfume-2.png'
import perfumeThree from '../../assets/images/perfume-3.png'
import perfumeFour from '../../assets/images/perfume-4.png'
import { ShoppingCartIcon } from 'lucide-react'
import { useProductActions } from '../../hooks/useProductActions';
import { useNavigate } from 'react-router-dom';
const products = [
  { image: perfumeOne,  id:"80", name: 'Amber Bloom', price: '$59.99', rating: 4.5 },
  { image: men, id:"81", name: 'Ocean Mist', price: '$69.99', rating: 4 },
  { image: perfumeTwo, id:"82", name: 'Rose Noir', price: '$49.99', rating: 5 },
  { image: perfumeThree, id:"83", name: 'Citrus Rush', price: '$39.99', rating: 3.5 },
  { image: perfumeFour, id:"84", name: 'Mystic Oud', price: '$89.99', rating: 4.8 },
]



export default function BestSellers() {
    const { handleAddToCart, handleAddToWishlist, isInWishlist } = useProductActions();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
      {products.map((product, index) => (
       <div
  key={index}
  className="bg-white rounded-2xl shadow-lg group overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
>
  {/* Fixed Image Size */}
  <div className="relative w-[220px] h-[300px] mx-auto">
    <img
      src={product.image}
      alt={product.name}
      className="w-[220px] h-[300px] object-cover rounded-2xl"
    />

    {/* Hover Icons */}
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button
        className={`bg-white p-2 rounded-full shadow transition ${
          isInWishlist(product.id) ? "bg-rose-100" : "hover:bg-rose-100"
        }`}
      >
        <i
          className={`cursor-pointer text-rose-500 hover:text-rose-600 transition ${
            isInWishlist(product.id)
              ? "fa-solid fa-heart"
              : "fa-regular fa-heart"
          }`}
          onClick={() => handleAddToWishlist(product)}
        ></i>
      </button>

      <button className="text-white text-2xl hover:text-blue-400">
        <ShoppingCartIcon onClick={() => handleAddToCart(product)} />
      </button>
    </div>
  </div>

  {/* Product Details */}
  <div className="p-4 text-center">
    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
    <p className="text-green-600 font-medium">{product.price}</p>
    <p className="text-yellow-600 font-medium">
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      {product.rating}
    </p>
  </div>
</div>

      ))}
    </div>
  )
}
