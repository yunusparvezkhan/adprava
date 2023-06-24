# Anaros🍍 (Version 4)
The version 4 of the Adprava app has a new page `CounterPage`, which is a basic counter component, famous in ReactJS World. The aim of this page is learning and practicing Reducer functions in ReactJS. In addition to that this page is also a practice for custom hooks, as all the logics behind the counter component is migrated to a reusable custom hook.

## Reducer Functions in ReactJS
### Introduction :-
Reducer is an alternative to the `useState` hook in React. Reducer is also a hook and imported as `useReducer` from `react`. This hook is a better state manegement system for larger applications, as using simple `useState` in larger applications can be complicated and confusing due to its "separate declaration for separate state" theory. To address this issue, `useReducer` gives a distinguish feature of initiating all the states inside a object, passed to `useReducer()`'s second argument. Now, although the state updation process may seem like overwhelming, it is actually more descriptive and formal in my sense. To update a state, the specific function `dispatch()` is to be called, with an value, which then goes to a defined function, which the developer then decide what to do with that value. These things may go over the head of many people, but we will discuss in details on what and how to use `useReducer`.

### Use of the `useState` hook
We use `useState` hook to create states like class components are used to have. To declare a state we write on the top of the code inside the function component,
```js
    const [exampleState, setExampleState] = useState('The Default Value and default Data Type');
```
So the entire component may look something like,

```js
const App = () => {
    const [exampleState, setExampleState] = useState('The Default Value and default Data Type');
    // More code
    // More code
    return(
        <div>
            {exampleState}
        </div>
    );
};
``` 

The first value `exampeState` is the variable for the state. The second value `setExampleState` is the setter function for that state. You must have noticed that to call the state, we do not need to mention `this.state.exampleState`, rather we directly called the state by `exampleState`, as like calling a variable. Then the setter function can be also directly called as 

```js
setExampleState("New Value");
```

### Declaration of `useReducer` hook
The declaration of the `useReducer` hook is much similar to the `useState` hook. To declare `useReducer` hook, we write on the top of the code inside the functional component,

```js
const [state, dispatch] = useReducer(reducer, {
    state1:'Default value of state1',
    state2:'Default value of state2',
    state3:5,
})
```
There is nothing special about the terms `state` and `dispatch`, but as international convention almost every developer uses these default terms. Then inside the `useReducer()` function call, the first argument is a function, that should be declared somewhere in the file, and the second argument is the entire state. It definitely can be an object or any other data types. The variable `state` is reference to the entire state, declared in the second argument of the `useReducer()` function call.

### Accessing the `useReducer` state
To access the state created by using the `useReducer` hook, the varibale assinged to it, can be used 

Example - The component with the state declaration by using `useReducer` hook in the previous point may look like,

```js
import React, { useReducer } from "react";

export default const App = () => {
    const [state, dispatch] = useReducer(reducer, {
        state1:'Default value of state1',
        state2:'Default value of state2',
        state3:5,
    })

    //  Some more code

    return(
        <div>Some JSX</div>
    )
}
```
Now here inside the `return()` function, if we want to access any of the state values, we may write,
```js
return(
    <div>
        State 1 --> {state.state1}
        State 2 --> {state.state2}
        State 3 --> {state.state3}
    </div>
)
```
And this will give us back the values of corresponding states.

### Updating the `useReducer` state
Remember we have passed reference of a function `reducer` as the first argument of `useReducer()` function call in the `useReducer` declaration. That function need to be initiated somewhere in our file. By convention developers feel it right to declare that function at the top of the file, before the component function. So now, with the `reducer()` declaration our file may look something like,

```js
import React, { useReducer } from "react";

const reducer = () => {
    // Some logic to handle state dispatch
}

export default const App = () => {
    // useReducer declaration
    const [state, dispatch] = useReducer(reducer, {
        state1:'Default value of state1',
        state2:'Default value of state2',
        state3:5,
    })

    //  Some more code

    return(
        <div>
            State 1 --> {state.state1}
            State 2 --> {state.state2}
            State 3 --> {state.state3}
        </div>
    )
}
```
To update the state, the `dispatch()` function is to be used. And the value passed in the first argument of the `dispatch()` function will be recieved in the second argument of the `reducer()` function. In total the `reducer()` function recieves two arguments, `state` and `action`. Whenever we call `dispatch()`, it calls the `reducer()`. Then whatever the `reducer()` function will return, would be the new state. So, we can dispatch an object like,
```js 
{
    type:"UPDATE_STATE1",
    payload:"The New Value",
}
```
for updation of `state1`, now we have to recieve this in the `reducer()` and return a new state.

```js
import React, { useReducer } from "react";

const reducer = (state, action) => {
    // Some logic to handle state dispatch
    // checking dispatch types before returning new state
    if (action.type === "UPDATE_STATE1") {
        return {
            ...state,
            state1:action.payload,
        };
    };
};

export default const App = () => {
    // useReducer declaration
    const [state, dispatch] = useReducer(reducer, {
        state1:'Default value of state1',
        state2:'Default value of state2',
        state3:5,
    })

    const handleCSTabc = () => {
        // Dispatching an object with a type prop
        dispatch({
            type:"UPDATE_STATE1",
            payload:"ABC",
        })
    }

    return(
        <div>
            State 1 --> {state.state1}
            State 2 --> {state.state2}
            State 3 --> {state.state3}

            <button onclick={handleCSTabc} >Change State1 to abc</button>
        </div>
    )
}
```

As it can be seen in the examle code, that we may dispatch an object with a predefined `type` property, and then check the `type` in the `reducer()` function before returning a new state. And this process can be continued and further nested for more states, and more updates.
