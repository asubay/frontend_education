import React, {useState} from 'react';

const Counter = () => {
    const[count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement()  {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button className="button-70" onClick={increment}>increment</button>
            <button className="button-70" onClick={decrement}>decrement</button>
        </div>
    );
};

export default Counter;