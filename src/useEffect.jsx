import React,{useState,useEffect} from 'react';

function Timer (){
    const[count,setCount]=useState(0);
    useEffect(()=>{
        const interval=setInterval(()=>setCount(c=>c+1),1000);
        return()=>clearInterval(interval);
    },[]);
    return<h1> seconds passed {count}</h1>;

}
export default Timer;