import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../../redux/cartSlice';

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };
 const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Add some perfumes before checking out!");
      return;
    }

    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );

   
    alert(`Checkout successful! Total amount: $${totalPrice.toFixed(2)}`);

    
    dispatch(clearCart());  

    
  };
  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
  <h2 className="text-2xl sm:text-3xl font-bold mb-6">Your Shopping Cart</h2>

  {cartItems.length === 0 ? (
    <p className="text-gray-500">Your cart is empty.</p>
  ) : (
    <>
      <div className="space-y-6">
        {cartItems.map((item) => (
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

     
            <div className="flex items-center justify-center sm:justify-end flex-wrap gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="text-red-500 hover:underline"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

     
      <div className="mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h3 className="text-xl font-semibold">Total: ${total}</h3>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleCheckout}
            className="bg-amber-950 text-white py-2 px-4 rounded hover:bg-rose-600 transition"
          >
            Checkout
          </button>
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </>
  )}
</div>

  );
}
