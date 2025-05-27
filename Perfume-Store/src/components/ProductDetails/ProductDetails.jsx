import { useParams } from 'react-router-dom';
import womenPerfumes from '../../../womanPerfums.json';
import menPerfumes from '../../../menPerfums.json';
import { useProductActions } from '../../hooks/useProductActions';
export default function ProductDetails() {
     const { handleAddToCart } = useProductActions();
  const { id } = useParams();

  // Combine both datasets
  const allPerfumes = [
    ...womenPerfumes.womenPerfumes,
    ...menPerfumes.menPerfumes,
  ];

  const product = allPerfumes.find((p) => p.id === parseInt(id));

  if (!product) return <div className="p-4 text-red-500">Product not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 rounded-xl shadow" />
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-lg text-gray-600">{product.brand}</p>
          <p className="text-2xl font-bold text-rose-600">${product.price}</p>
          <p className="text-l font-bold text-rose-600  border-b-4 border-black pb-4 ">{product.stock}</p>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
          <button onClick={() => handleAddToCart(product)}
className="mt-4 bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600 transition">
            Add to Cart
          </button>


        </div>
      </div>
                <div className="mt-10">
  <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Reviews</h3>

  <div className="space-y-6">
    {/* Review 1 */}
    <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40?img=1"
            alt="Reviewer"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">Sarah Johnson</p>
            <p className="text-xs text-gray-500">April 15, 2025</p>
          </div>
        </div>
        <div className="text-yellow-400">
          ★★★★☆
        </div>
      </div>
      <p className="text-gray-700">
        Absolutely love this perfume! It lasts all day and I always get compliments. Will repurchase for sure!
      </p>
    </div>

    {/* Review 2 */}
    <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40?img=5"
            alt="Reviewer"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">Liam Carter</p>
            <p className="text-xs text-gray-500">March 30, 2025</p>
          </div>
        </div>
        <div className="text-yellow-400">
          ★★★★★
        </div>
      </div>
      <p className="text-gray-700">
        The scent is very elegant and not too overpowering. Great for evening wear. Definitely recommend.
      </p>
    </div>
    {/* Review 3 */}
    <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <img src="https://i.pravatar.cc/40?img=11" alt="Mia" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm font-medium text-gray-800">Mia Torres</p>
            <p className="text-xs text-gray-500">March 18, 2025</p>
          </div>
        </div>
        <div className="text-yellow-400 text-sm">★★★★☆</div>
      </div>
      <p className="text-gray-700">
        I was surprised by how long it lasts. Beautiful scent with a nice balance of floral and warmth.
      </p>
    </div>

    {/* Review 4 */}
    <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <img src="https://i.pravatar.cc/40?img=15" alt="Noah" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm font-medium text-gray-800">Noah Bennett</p>
            <p className="text-xs text-gray-500">February 22, 2025</p>
          </div>
        </div>
        <div className="text-yellow-400 text-sm">★★★☆☆</div>
      </div>
      <p className="text-gray-700">
        Nice fragrance but slightly too sweet for my preference. Still a good value for the price.
      </p>
    </div>
  </div>
</div>
    </div>
  );
}
