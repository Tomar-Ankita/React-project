import React, { useState } from 'react';
import { restaurants } from '../data/restaurants';
import RestaurantCard from './restaurentCard';
import SearchBar from './searchBar';

const RestaurantList = () => {
  const [query, setQuery] = useState('');

  const filteredRestaurants = restaurants.filter(res =>
    res.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Popular Restaurants</h2>
      <SearchBar query={query} setQuery={setQuery} />
      <div className="row">
        {filteredRestaurants.map(res => (
          <RestaurantCard key={res.id} restaurant={res} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
