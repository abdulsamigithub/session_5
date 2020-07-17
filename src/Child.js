import React, { useContext } from 'react'
import counterContext from './CounterContaxt';

//import counterContext from './CounterContaxt'
//import Parent from './Parent.js'



const Child = () => {

    let counterValue = useContext(counterContext)
    console.log(counterValue)
    return(
        <div>

            <h1>This is first Child using context counter</h1>
           
            <h3>Counter Value is {counterValue[0]}</h3>
            <button onClick={()=>{counterValue[1](++counterValue[0])}}> Increament Context </button>

        </div>
    )


}
export default Child;