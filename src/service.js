import React from "react";

function Services({ addToCart }) {
  return (
    <section id="services">
      <h2>Our Services</h2>
      
      {/* Speaker Manufacturing Service */}
      <div className="service" style={{ textAlign: 'center' }}>
        <h3>Speaker Manufacturing</h3>
        <p>Custom-built DJ sound systems.</p>
        <img 
          src="/image.png"
          alt="Speaker Manufacturing"
          style={{ width: '200px', height: '200px', cursor: 'pointer' }}
          onClick={() => addToCart('Speaker Model 1')}
        />
      </div>

      {/* Speaker Repair Service */}
      <div className="service" style={{ textAlign: 'center' }}>
        <h3>Speaker Repair</h3>
        <p>Fast and reliable repair services.</p>
        <img 
          src="/audio spk.avif"
          alt="Speaker Repair"
          style={{ width: '200px', height: '200px', cursor: 'pointer' }}
          onClick={() => addToCart('Speaker Model 2')}
        />
      </div>
    </section>
  );
}

export default Services;
