import { useState, useEffect } from 'react';

const useCounter = (initialCount) => {
    const [count, setCount] = useState(initialCount);
    const [incrementBy, setIncrementBy] = useState(5);

    useEffect(() => {
        console.log(count);
    }, [count])

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    const handleIncrementByAmount = () => {
        setCount(count + Number(incrementBy))
    }

    return {
        count, handleDecrement, handleIncrement, handleIncrementByAmount, incrementBy, setIncrementBy
    }
};

export default useCounter;