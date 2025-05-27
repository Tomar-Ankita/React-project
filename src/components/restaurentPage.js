import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import { CartContext } from '../context/cartContext';

const RestaurantPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const restaurant = restaurants.find(r => r.id === parseInt(id));

  if (!restaurant) {
    return <div className="container mt-4"><h2>Restaurant not found</h2></div>;
  }

  return (
    <div className="container mt-4">
      <h2>{restaurant.name}</h2>
      <img src={restaurant.image} className="img-fluid mb-3" alt={restaurant.name} />
      <h4>Menu</h4>
      <ul className="list-group">
        {restaurant.items.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{item.name} - ₹{item.price}</span>
            <button className="btn btn-sm btn-success" onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantPage;
