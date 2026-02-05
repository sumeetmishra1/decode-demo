import { useAppSelector } from "../../app/hooks";

const CartSummary = () => {
  const { totalItems, totalPrice } = useAppSelector(
    (state) => state.cart
  );

  return (
    <div>
      <h4>Total Items: {totalItems}</h4>
      <h4>Total Price: ₹{totalPrice}</h4>
    </div>
  );
};

export default CartSummary;
