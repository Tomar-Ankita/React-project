import React from 'react';
import { useNavigate } from 'react-router-dom';
import About from './about';


function Home(){
    const navigate=useNavigate();
    function handleClick(){
   
    navigate('/about');
}
    return(
        <>
         <div id="browserColor">
            <div id="homeCss">
        Home
        <p>Hello, This is  homepage!</p>
        <p>Welcome....</p>
        <button onClick={handleClick}> Move to about page</button>
        </div>
            </div>
        </>
    )
}
export default Home;