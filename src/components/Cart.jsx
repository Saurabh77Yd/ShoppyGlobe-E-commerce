import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  //return all cart list
  return (
    <>
      {cartItems.length === 0 ? (
        <p className="empty-list">Your cart is empty</p>
      ) : (
        <div className="cart-container">
          {cartItems.map((item) => (
            <div className="cart-item1" key={item.id}>
              <CartItem item={item} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Cart;
