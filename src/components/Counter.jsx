import { useState } from 'react';

export function Counter({title}) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };

    const addFive = () => {
        setCount(count + 5);
    };

    const subtractFive = () => {
        setCount(count - 5);
    };

    return (
        <div>   {/* Counter Container  */}
            <h2>{title}</h2>
            <span>{count}</span>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={addFive}>+5</button>
            <button onClick={subtractFive}>-5</button>
            
        </div>
    )
}