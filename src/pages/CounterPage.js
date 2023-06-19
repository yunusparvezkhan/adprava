import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import useCounter from '../hooks/use-counter';

const CounterPage = ({ initialCount }) => {

    const { count, handleDecrement, handleIncrement, handleIncrementByAmount, incrementBy, setIncrementBy } = useCounter(initialCount);
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
                <Button primary rounded className="ml-0" onClick={handleIncrementByAmount}>Increment</Button>
            </div>
        </div>
    )
}

export default CounterPage