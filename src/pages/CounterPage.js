import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

const CounterPage = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);
    const [incrementBy, setIncrementBy] = useState()

    useEffect(() => {
        console.log(count);
    }, [count])

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    return (
        <div className='ml-20 mt-10'>
            <div className='text-3xl font-bold'>
                Count - {count}
            </div>
            <div className='flex items-center'>
                <Button primary rounded className="ml-0" onClick={handleIncrement} >Increment</Button>
                <Button primary rounded className="ml-0" onClick={handleDecrement} >Decrement</Button>
            </div>
            <div>
                <label>Increment By</label>
                <br></br>
                <input type="number" value={incrementBy} onChange={(e) => setIncrementBy(e.target.value)} className='input border border-gray-500 px-2 py-1 block' />
                <Button primary rounded className="ml-0" onClick={() => setCount(count + Number(incrementBy))}>Increment</Button>
            </div>
        </div>
    )
}

export default CounterPage