import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="container mt-4">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="list-group">
            {cartItems.map((item, idx) => (
              <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name} x {item.quantity} - ₹{item.price * item.quantity}
                <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.name)}>Remove</button>
              </li>
            ))}
          </ul>
          <p className="mt-3"><strong>Total: ₹{totalPrice}</strong></p>
        </>
      )}
    </div>
  );
};

export default Cart;
