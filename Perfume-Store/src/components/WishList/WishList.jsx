import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist, clearWishlist } from '../../redux/wishlistSlice';
import { useProductActions } from '../../hooks/useProductActions';

export default function WishlistPage() {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();
  const { handleAddToCart } = useProductActions();

  return (
   <div className="p-4 sm:p-6 max-w-4xl mx-auto">
  <h2 className="text-2xl sm:text-3xl font-bold mb-6">Your Wishlist</h2>

  {wishlistItems.length === 0 ? (
    <p className="text-gray-500">Your wishlist is empty.</p>
  ) : (
    <>
      <div className="space-y-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-4 rounded-lg shadow gap-4"
          >
           
            <div className="flex flex-col sm:flex-row items-center gap-4 flex-1">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.brand}</p>
                <p className="text-rose-600 font-bold">${item.price}</p>
              </div>
            </div>

          
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-right ">
              <button
                className=" mx-auto  w-1/2 sm:w-auto bg-amber-950 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition-colors  "
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
              <button
                onClick={() => dispatch(removeFromWishlist(item.id))}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-end">
        <button
          onClick={() => dispatch(clearWishlist())}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear Wishlist
        </button>
      </div>
    </>
  )}
</div>

  );
}

