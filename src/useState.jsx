

import React ,{useState} from 'react';
function Counter(){
    const[count,setCount]=useState(0);
    return(
        <>
        <h1>Click counter</h1>
        <p>You clicked {count} times</p>
        <button onClick={()=>setCount(count+1)}>Click me</button>
        <button onClick={setCount}>Reset</button>
        </>
    );
}
export default Counter;



