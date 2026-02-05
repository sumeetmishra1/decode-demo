import { useEffect } from "react";
import { fetchProducts } from "./productSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ProductCard from "../../components/ProductCard";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((product) => (
        <div
          key={product.id}
          className="bg-linear-to-br from-orange-50 to-pink-50 rounded-xl p-1"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
