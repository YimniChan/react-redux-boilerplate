// Create components/Counter.jsx
import React, { Component } from 'react'

//const Counter = ({ value, onIncrement,onIncrement5, onDecrement, onClear }) => (
  const Counter = ({ value, onIncrement, onDecrement, onClear }) => (
  <div>
    <h1> Value: {value} </h1>
    <button onClick={()=>onIncrement(1)}> +</button>
    <button onClick={()=>onIncrement(5)}>+5 </button>
    <button onClick={onDecrement}> - </button>
    <button onClick={onClear}> Clear </button>

  </div>
);
//  <button onClick={onIncrement}> + </button>
//     <button onClick={onIncrement5}> + 5</button>

export default Counter;
