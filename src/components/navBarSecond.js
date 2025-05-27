// src/components/Navbar.js
import { Link } from "react-router-dom";
 import './navBarSecond.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
       <li><Link to="/" className="navbar-item">CodeMind Tutorial</Link></li>
        <li><Link to="/html" className="navbar-item">HTML</Link></li>
        <li><Link to="/css" className="navbar-item">CSS</Link></li>
        <li><Link to="/javascript" className="navbar-item">JavaScript</Link></li>
        <li><Link to="/react" className="navbar-item">React</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
