import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addToWishlist } from '../redux/wishlistSlice';
import toast from 'react-hot-toast';

export const useProductActions = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const handleAddToCart = (product) => {
    try {
      dispatch(addToCart(product));
      toast.success(`${product.name} added to cart`);
    } catch (error) {
      toast.error('Failed to add to cart');
    }
  };

  const handleAddToWishlist = (product) => {
    try {
      dispatch(addToWishlist(product));
      toast.success(`${product.name} added to wishlist`);
    } catch (error) {
      toast.error('Failed to add to wishlist');
    }
  };

  const isInWishlist = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  return {
    handleAddToCart,
    handleAddToWishlist,
    isInWishlist,
  };
};
