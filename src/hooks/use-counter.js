import { useReducer } from 'react';


const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COUNT':
            return {
                ...state,
                count: state.count + action.payload,
            }
        case 'CHANGE_INCREMENTBY':
            return {
                ...state,
                incrementBy: action.payload
            }
        default:
            return state;
    }
}

const useCounter = (initialCount) => {
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        incrementBy: 5
    })

    const handleIncrement = () => {
        dispatch({
            type: 'CHANGE_COUNT',
            payload: 1,
        })
    }

    const handleDecrement = () => {
        dispatch({
            type: 'CHANGE_COUNT',
            payload: -1,
        })
    }

    const handleIncrementByAmount = () => {
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