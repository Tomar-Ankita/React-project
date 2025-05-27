import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => (
  <div className="col-md-4 mb-4">
    <div className="card">
      <img src={restaurant.image} alt={restaurant.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{restaurant.name}</h5>
        <p className="card-text">Rating: {restaurant.rating}</p>
        <Link to={`/restaurant/${restaurant.id}`} className="btn btn-primary">View Menu</Link>
      </div>
    </div>
  </div>
);

export default RestaurantCard;
