
import { useContext } from "react";
import remove_icon from "../../assets/remove.webp";
import { ShopContext } from "../../Context/ShopContext";
import "./CartItems.css";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cartItems">
      <div className="cartitems-header">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) =>
        cartItems[e.id] > 0 ? (
          <motion.div
            key={e.id}
            className="cartitem"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img src={e.image} alt={e.name} className="cartitem-img" />
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <motion.button
              className="cartitems-quantity"
              whileTap={{ scale: 0.9 }}
            >
              {cartItems[e.id]}
            </motion.button>
            <p>${e.new_price * cartItems[e.id]}</p>
            <motion.img
              src={remove_icon}
              alt="remove"
              className="remove-icon"
              onClick={() => removeFromCart(e.id)}
              whileTap={{ scale: 0.8 }}
            />
          </motion.div>
        ) : null
      )}
      <div className="cartitems-down">
        <motion.div
          className="cartitems-total"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Cart Totals</h1>
          <div className="cartitems-total-details">
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <motion.button
            className="checkout-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PROCEED TO CHECKOUT
          </motion.button>
        </motion.div>
        <motion.div
          className="cartitems-promocode"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo code" />
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Submit
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CartItems;
