import CartList from "../features/cart/CartList";
import CartSummary from "../features/cart/CartSummary";
import ProductList from "../features/products/ProductList";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
  {/* Header */}
  <header className="bg-white shadow-sm">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">
        🛍️ Product Store
      </h1>

      <CartSummary />
    </div>
  </header>

  {/* Main Content */}
  <main className="max-w-6xl mx-auto px-6 py-8">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Products Section */}
      <section className="lg:col-span-2">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Products
        </h2>

        <ProductList />
      </section>

      {/* Cart Section */}
      <div className="bg-white rounded-xl shadow-sm p-5 h-fit sticky top-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Your Cart
        </h2>

        <CartList />
      </div>

    </div>
  </main>
</div>

  );
};

export default Home;
