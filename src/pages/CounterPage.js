import React, { useState, useEffect } from 'react'

const CounterPage = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(count);
    }, [count])

    return (
        <div>
            <div className='ml-20 mt-10 text-3xl font-bold'>
                Count - {count}
            </div>
        </div>
    )
}

export default CounterPage