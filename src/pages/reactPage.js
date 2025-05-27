import React from 'react';

function ReactPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Sidebar */}
      <div style={{
        width: '200px',
        backgroundColor: '#008080',
        color:'white',
        padding: '20px',
        borderRight: '1px solid #ccc'
      }}>
        <h3>Topics</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li  ><a href="#react" style={{ color: 'white' }}>What is React?</a></li><br></br>
          <li ><a href="#hooks" style={{ color: 'white' }}>React Hooks</a></li><br></br>
          <li ><a href="#components" style={{ color: 'white' }}>Components</a></li><br></br>
          <li><a href="#jsx" style={{ color: 'white' }}>JSX</a></li><br></br>
          <li><a href="#virtual-dom" style={{ color: 'white' }}>Virtual DOM</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '30px' }}>
        <h2 id="react">What is React.js?</h2>
        <p><strong>React.js</strong> is a popular open-source JavaScript library...</p>

        <h3>Key Features:</h3>
        <ul>
          <li>Component-Based</li>
          <li>Declarative</li>
          <li>Virtual DOM</li>
          <li>Unidirectional Data Flow</li>
        </ul>

        <h3>Why Use React?</h3>
        <p>React simplifies the process of building dynamic web applications.</p>

        
        

        {/* Extra sections for sidebar links */}
        <h3 id="hooks">React Hooks</h3>
        <p>Hooks let you use state and other features in functional components.React Hooks are functions that allow functional components in React to manage state, handle side effects, and access other React features without needing class components. They provide a simpler and more efficient way to manage component logic.</p>
        <h3>Why Use React Hooks?</h3>
<p>Simplifies Code: Hooks provide a simpler and cleaner way to write components by using functions instead of classes.
State and Side Effects: Hooks allow you to use state (useState) and side effects (useEffect) in functional components.
Reusability: Hooks make it easier to share logic across components by creating custom hooks.
Readability: Functional components with hooks tend to be more concise and easier to read than class components.</p>
        <h3 id="components">Components</h3>
        <p>Components are reusable UI blocks.</p>

        <h3 id="jsx">JSX</h3>
        <p>JSX lets you write HTML in React.</p>

        <h3 id="virtual-dom">Virtual DOM</h3>
        <p>The virtual DOM is a lightweight copy of the real DOM.</p>

        <p>
          For more info visit:&nbsp;
          <a
            href="https://www.geeksforgeeks.org/react/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#007acc' }}
          >
            GeeksforGeeks
          </a>
        </p>
      </div>
    </div>
  );
}

export default ReactPage;
