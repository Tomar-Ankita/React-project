import React from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './home';


    function About(){
        const navigate=useNavigate();
        function handleClick(){
    
    navigate('/');
        }
        return(
            <>
            <div id="screenWrapper">
            <div id="aboutBox">
            About 
            <p>Hi....</p>
            <p>This is about page</p>
            <p>How can I help you....</p>
            <button onClick={handleClick}>Move to Home page</button>
            </div>
            </div>
            </>
        )
    }

export default About;