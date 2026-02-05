import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchCart, removeFromCart } from "./cartSlice";
import CartItem from "../../components/CartItem";
import Loader from "../../components/Loader";

const CartList = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (items.length === 0) return <p>Your cart is empty</p>;

  return (
    <div className="space-y-4 mt-4">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={() => dispatch(removeFromCart(item.id))}
        />
      ))}
    </div>
  );
};

export default CartList;
