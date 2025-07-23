

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Resume from './resumePractice/resumeBuild';
import Second from './resumePractice/resumeSecondPage';
import UploadResume from './resumePractice/thirdPage';
import Description from './resumePractice/jobDesc';
import PersonalDetailsForm from './resumePractice/experience';
import Processing from './resumePractice/processing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Resume />} />
      <Route path="/resume-second" element={<Second />} />
      <Route path="/thirdPage" element={<UploadResume />} />
      <Route path="/description" element={<Description />} />
      <Route path="/exp" element={<PersonalDetailsForm />} />
      <Route path="/Processing" element={<Processing/>}/>
      <Route path='/second' element={<Second/>}/>
      <Route path='/firstPage' element={<Resume/>}/>
      <Route path='/continue' element={<Processing/>}/>
      
    </Routes>
  );
}

export default App;




















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


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HTML from './pages/html';
// import JavaScript from './pages/javaScript';
// import CSS from './pages/css';
// import Codemind from './pages/codeMind';
// import ReactPage from './pages/reactPage';
// import Navbar from './components/navBarSecond';
// import './index.css';





// function App() {
//   console.log("App rendered");
//   return (
   
//     <Router>
//       <Navbar />
//       <Routes> {/*provide routes */}
//         <Route path="/" element={<Codemind />} />
//         <Route path="/html" element={<HTML />} />
//         <Route path="/css" element={<CSS />} />
//         <Route path="/javascript" element={<JavaScript />} />
//         <Route path="/react" element={<ReactPage />} />
//       </Routes>
//     </Router>
//   );
// }





// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Login from './loginPage';
// import Signup from './signUpPage';
// import Dashboard from './dashboard';
// import TaskPage from './taskPage';
// import './taskManager.css';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/taskPage" element={<TaskPage />} />
//     </Routes>
//   );
// }

// export default App;
