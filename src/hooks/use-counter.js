import { useReducer, useState } from 'react';


const reducer = (state, action) => {
    if (action.type === 'CHANGE_COUNT') {
        return {
            ...state,
            count: state.count + action.payload
        }
    } else if (action.type === 'CHANGE_INCREMENTBY') {
        return {
            ...state,
            incrementBy: action.payload
        }
    }
}

const useCounter = (initialCount) => {
    // const [count, setCount] = useState(initialCount);
    // const [incrementBy, setIncrementBy] = useState(5);

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        incrementBy: 5
    })

    const handleIncrement = () => {
        // setCount(count + 1);
        dispatch({
            type: 'CHANGE_COUNT',
            payload: 1,
        })
    }

    const handleDecrement = () => {
        // setCount(count - 1);
        dispatch({
            type: 'CHANGE_COUNT',
            payload: -1,
        })
    }

    const handleIncrementByAmount = () => {
        // setCount(count + Number(incrementBy))
        dispatch({
            type: 'CHANGE_COUNT',
            payload: state.incrementBy,
        })
    }

    const setIncrementBy = (value) => {
        dispatch({
            type: 'CHANGE_INCREMENTBY',
            payload: Number(value),
        })
    }

    return {
        count: state.count, handleDecrement, handleIncrement, handleIncrementByAmount, incrementBy: state.incrementBy, setIncrementBy
    }
};

export default useCounter;