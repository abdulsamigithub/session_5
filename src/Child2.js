import React, { useReducer } from 'react'
import CounterReducer from './CounterReducer'

const Child2 = () =>{

    let [state, dispatch] = useReducer(CounterReducer, 1);
    console.log(state)
    return(
        <div>
            <h1>This is second Child using Reducer counter</h1>
            <h3>the value of state is {state}</h3>
            <button onClick = { ()=>dispatch('INCREMENT')}>increment Reducer</button>
            <button onClick = { ()=>dispatch('DECREMENT')}>Decrement Reducer</button>
        </div>
    )

}
export default Child2