import { useReducer, useState } from 'react';


const reducer = (state, action) => {

    // This code was used before for checking the action types and returning with correct object in the dispatch function
    // --------------------------------------------------------------------- //
    // if (action.type === 'CHANGE_COUNT') {                                //
    //     return {                                                        //
    //         ...state,                                                  //
    //         count: state.count + action.payload                       //
    //     }                                                            //
    // } else if (action.type === 'CHANGE_INCREMENTBY') {              //                      <--- Previous Code Here (Before [v4 Delta 1.2.1])
    //     return {                                                   //
    //         ...state,                                             //
    //         incrementBy: action.payload                          //
    //     }                                                       //
    // }                                                          //
    // ----------------------------------------------------------//


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

    // This useState declaration was used before using the useReducer hook for state manegement in commit [v4 Delta 1.2]
    // And there are setter function of useState hook below in the handler function, which are commented out.
    // ------------------------------------------------------------------------------//
    // -----------------------------------------------------------------------------//
    // const [count, setCount] = useState(initialCount);                           //           <--- Previous Code here (Before use of useReducer)
    // const [incrementBy, setIncrementBy] = useState(5);                         //
    // --------------------------------------------------------------------------//



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