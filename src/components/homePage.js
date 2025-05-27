import React from 'react';
import { Link } from 'react-router-dom';

const HomepageShowcase = () => {
  const offers = [
    {
      name: 'Pizza Palce',
      image: 'https://via.placeholder.com/300x180',
      
      id: 1, // You can use the ID to link to the restaurant page
    },
    {
      name: 'Burger House',
      image: 'https://via.placeholder.com/300x180',
      
      id: 2,
    },
    
    {
      name: 'Pizza Hut',
      image: 'https://via.placeholder.com/300x180',
      
      id: 4,
    },
     {
    name: 'Biryani Express',
    image: 'https://via.placeholder.com/300x180',
    
    id: 5,
  },
   {
    name: 'Sushi World',
    image: 'https://via.placeholder.com/300x180',
    
    id: 6,
  },
   {
    name: 'Pasta King',
    image: 'https://via.placeholder.com/300x180',
   
    id: 7,
  },
   {
    name: 'Noodle Express',
    image: 'https://via.placeholder.com/300x180',
   
    id: 8,
  },
  {
    name: 'KFC',
    image: "/french-fries.webp",
    
    id: 9,
  },
    {
    name: 'The Donut Shop',
    image: 'https://via.placeholder.com/300x180',
    offer: 'Buy 1 Get 1 Free on Donuts',
    id: 10,
  },

  ];

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Best Offers for You</h3>
      <div className="row">
        {offers.map((res, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card position-relative">
              <img src={res.image} alt={res.name} className="card-img-top" />
              <div className="card-body">
                <Link to={`/restaurant/${res.id}`} className="card-title">
                  {res.name}
                </Link>
              </div>
              <span className="offer-badge position-absolute top-0 start-0 m-2">{res.offer}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepageShowcase;
