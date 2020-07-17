import React, { useState }  from 'react';
import './App.css';
import Parent from './Parent.js'
import CounterContext from './CounterContaxt';

function App() {

  //let [] =useState(30)  
  let countState =useState(1) //count, setCount
  return (
    <div>
      <CounterContext.Provider value={countState}>
        <Parent />

       
      </CounterContext.Provider>
    </div>

  );
}

export default App;
