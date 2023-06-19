import { produce } from 'immer';
import { useReducer } from 'react';

const reducer = (state, action) => {
    // This is how useReducer states should be updated. Which was followed previously. 
    // But now we have an optional alternative
    // ----------------------------------------------------------------------//
    // ---------------------------------------------------------------------//
    // switch (action.type) {                                              //
    //     case 'CHANGE_COUNT':                                           //
    //         return {                                                  //
    //             ...state,                                            //
    //             count: state.count + action.payload,                //
    //         }                                                      //
    //     case 'CHANGE_INCREMENTBY':                                //
    //         return {                                             //
    //             ...state,                                       //
    //             incrementBy: action.payload                    //
    //         }                                                 //
    //     default:                                             //
    //         return state;                                   //
    // }                                                      //
    // ------------------------------------------------------//


    // Assinging to the state values directly like this can be achieved through immer library,
    // which is imported at the top and the reducer function is wrapped inside the produce function
    // from immer in the first parameter of useReducer declaration in line 45.
    // --------------------------------------------------------------//
    // -------------------------------------------------------------//
    switch (action.type) {                                         //
        case 'CHANGE_COUNT':                                      //
            state.count = state.count + action.payload;          //
            return;                                             //
        case 'CHANGE_INCREMENTBY':                             //
            state.incrementBy = action.payload;               //
            return;                                          //
        default:                                            //
            return state;                                  //
    }                                                     //
}                                                        //
// -----------------------------------------------------//

const useCounter = (initialCount) => {
    const [state, dispatch] = useReducer(produce(reducer), {
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