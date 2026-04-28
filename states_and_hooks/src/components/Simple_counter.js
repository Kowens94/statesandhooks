import React, { useState } from 'react';

function Simplecounter() {
    const [count, setCount]= useState(0);

    function increaseClick () { setCount(count + 1);};

    function decreaseClick () { setCount(prev => (prev > 0 ? prev - 1 : prev));}



    return ( <div> <button onClick={increaseClick}>Increase</button>
    <button onClick={decreaseClick}>Decrease</button>
    <p> Number of clicks: {count}</p> </div>

     );
};

export default Simplecounter;