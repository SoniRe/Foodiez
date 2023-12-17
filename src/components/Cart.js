import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./MenuCard";
import { clearCart } from "./../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const disptach = useDispatch();

  const handleClearCart = () => {
    disptach(clearCart());
  };

  return (
    <div id="cart">
      <div id="cart-top">
        <h1>{cartItems.length === 0 ? "Empty Cart" : "Cart"}</h1>
        {cartItems.length > 0 && (
          <button onClick={handleClearCart}>
            Clear Cart <i id="trash-bin" class="ri-delete-bin-line"></i>
          </button>
        )}
      </div>

      {cartItems?.map((item) => {
        return <MenuCard key={item?.card?.info?.id} dishData={item} />;
      })}
    </div>
  );
};

export default Cart;
