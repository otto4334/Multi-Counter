import {useState} from 'react';

export const Counters = () =>{
    const [counters, setCounters] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addCounter = ()=>{
        
    }
    return (
        <div className="counters">
        <input onChange={()=>{setInputValue(value)}} type="text" />
        <button onClick={addCounter}></button>
        </div>
    )
};