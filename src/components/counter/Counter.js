/**
 * Created by deegha on 11/12/2018
 */

import React from 'react'
import './Counter.css'

export const Counter = ({counter, increment, decrement}) => (
  <div className='counterContainer'>
    <div>
      <h1 className='counterTitle'> Counter </h1>
      <p className='count' >{counter}</p>
    </div>
    
    <div className='btnArea'>
      <div className='btnIn' onClick={increment}>Increment</div>
      <div className='btnDe' onClick={decrement}>Decrement</div>
    </div>
  </div>
)