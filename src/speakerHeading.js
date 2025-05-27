import React, { useState } from "react";
import Services from "./service.js";  // Import Services component

function Speaker() {
  const [showContact, setShowContact] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleContact = () => setShowContact(prev => !prev);

  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  return (
    <section id="hero">
      <h1>KS Speakers</h1>
      <p>Pro DJ Speakers — Custom Built, Professionally Repaired.</p>

      <button onClick={() => window.location = 'mailto:KSSpeaker@gmail.com'}>
        Request a Quote
      </button>

      {/* Navigation Section */}
      <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', marginTop: '30px' }}>
        {/* Contact Section */}
        <div style={{ textAlign: 'center', position: 'relative' }}>
          <p style={{ margin: 0, cursor: 'pointer' }} onClick={toggleContact}>
            <i className="bi bi-telephone-fill"></i> Contact
          </p>
          {showContact && (
            <div style={{ marginTop: '5px', fontSize: '0.9rem' }}>
              📞 +1 (234) 567-8901
            </div>
          )}
        </div>

        {/* Cart Section */}
        <p style={{ margin: 0, cursor: 'pointer' }} onClick={() => alert(`Cart has ${cartItems.length} item(s)`)} >
          <i className="bi bi-cart-fill"></i> Cart
        </p>

        {/* Services Section */}
        <div style={{ textAlign: 'center', position: 'relative' }}>
          <p style={{ margin: 0, cursor: 'pointer' }} onClick={() => alert("Services Section")}>
            <i className="bi bi-gear-fill"></i> Services
          </p>
        </div>
      </div>

      {/* Add Services Component - Ensure it is rendered only once */}
      <Services addToCart={addToCart} />

      {/* Cart Items Display */}
      {cartItems.length > 0 && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h4>Cart Items:</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cartItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default Speaker;
