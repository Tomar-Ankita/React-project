import React from 'react';

function Codemind() {
  return (
    <div style={{
      background: "url('MERN.webp') center/cover no-repeat",
      height: '100vh',
      position: 'relative',
      color: '#fff'
    }}>
      {/* Overlay */}
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1
      }}></div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        padding: '40px 20px',
       
      }}>
        <h1 style={{ color: 'greenyellow', marginBottom: '20px' }}>CodeMind Technology</h1>
        <p style={{ fontSize: '1.1rem' }}>
          Best IT Training Institute for Fullstack Development,
          <p>Manual Testing, Java & Angular training in Pune</p>
        </p> 

      </div>
    </div>
  );
}

export default Codemind;
