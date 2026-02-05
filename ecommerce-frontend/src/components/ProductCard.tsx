import type{ Product } from "../features/products/productTypes";
import { addToCart, fetchCart } from "../features/cart/cartSlice";
import { useAppDispatch } from "../app/hooks";

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  const handleAdd = async () => {
    await dispatch(addToCart(product.id));
    dispatch(fetchCart());
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 p-4 flex flex-col">
  {/* Image */}
  <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-center h-40">
    <img
      src={product.imageUrl}
      alt={product.name}
      className="object-contain h-full"
    />
  </div>

  {/* Info */}
  <h3 className="mt-4 text-lg font-semibold text-gray-800 truncate">
    {product.name}
  </h3>

  <p className="text-orange-600 font-bold text-lg mt-1">
    ₹{product.price.toLocaleString()}
  </p>

  {/* Action */}
  <button
    onClick={handleAdd}
    className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition"
  >
    Add to Cart
  </button>
</div>

  );
};

export default ProductCard;
