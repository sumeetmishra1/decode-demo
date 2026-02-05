import type { CartItem as CartItemType } from "../features/cart/cartTypes";

interface Props {
  item: CartItemType;
  onRemove: (productId: number) => void;
}

const CartItem = ({ item, onRemove }: Props) => {
  return (
    <div className="flex justify-between items-center border p-3 rounded">
      <div>
        <h4 className="font-medium">{item?.name}</h4>
        <p className="text-sm text-gray-600">
          ₹{item.price} × {item.quantity}
        </p>
      </div>

      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
