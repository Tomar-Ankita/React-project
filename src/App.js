// // import React from 'react';
// // import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import Home from './home.jsx';
// // import About from './about.jsx';
// // import NavBar from './navBar.jsx'; // Importing NavBar properly
// // import './navBar.css';

// // // Create your routes using createBrowserRouter
// // const router = createBrowserRouter([
// //   {
// //     path: '/', 
// //     element: (
// //       <div>
// //         <NavBar /> {/* Correct usage: Render the NavBar */}
// //         <Home />
// //       </div>
// //     ),
// //   },
// //   {
// //     path: '/about', 
// //     element: (
// //       <div>
// //         <NavBar /> {/* Correct usage: Render the NavBar */}
// //         <About />
// //       </div>
// //     ),
// //   }
// // ]);

// // // The main App component
// // function App() {
// //   return (
// //     <>
// //       <RouterProvider router={router} /> {/* Providing the router to render routes */}
// //     </>
// //   );
// // }

// // export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { CartProvider } from './context/cartContext';
// import Navbar from './components/navBar';
// import Footer from './components/footer';
// import RestaurantList from './components/restaurantList';
// import RestaurantPage from './components/restaurentPage';
// import Cart from './components/cart';
// import HomepageShowcase from './components/homePage';  // Import HomepageShowcase
// import './App.css'; // Import styles

// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <Navbar />
        
//         {/* Display HomepageShowcase on the homepage route ("/") */}
//         <Routes>
//           <Route path="/" element={<HomepageShowcase />} />  {/* Add HomepageShowcase here */}
//           <Route path="/restaurants" element={<RestaurantList />} />
//           <Route path="/restaurant/:id" element={<RestaurantPage />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="*" element={<div className="container mt-4"><h2>404 - Page Not Found</h2></div>} />
//         </Routes>

//         <Footer />
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HTML from './pages/html';
import JavaScript from './pages/javaScript';
import CSS from './pages/css';
import Codemind from './pages/codeMind';
import ReactPage from './pages/reactPage';
import Navbar from './components/navBarSecond';
import './index.css';





function App() {
  console.log("App rendered");
  return (
   
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Codemind />} />
        <Route path="/html" element={<HTML />} />
        <Route path="/css" element={<CSS />} />
        <Route path="/javascript" element={<JavaScript />} />
        <Route path="/react" element={<ReactPage />} />
      </Routes>
    </Router>
  );
}

export default App;