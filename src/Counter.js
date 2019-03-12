import React, { useState } from 'react';
import './Counter.css'

function Counter () {
  let [count, setCount] = useState(0);
  const setIncrement = () => setCount(count+1);
  const setDecrement = () => count > 0 && setCount(count-1);
  const setReset = () => count !== 0 && setCount (0);
  console.log(count)
  return (
    <div>
         <h1>React Counter</h1>
         <p>{count}</p>
         <div>
           <button onClick={setIncrement}>+</button>
           <button onClick={setDecrement}>-</button>
           <button onClick={setReset}>Reset</button>
         </div>
        
       </div>
  )
}

export default Counter;
