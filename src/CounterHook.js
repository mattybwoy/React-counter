import React, { useState } from 'react';

const CounterHook = () => {
  const[counter, setCounter] = useState(0)

  const counterAddOne = () =>setCounter(counter +1)

  return(
    <div>
      {counter}
      <button onClick={counterAddOne}>Another One</button>
    </div>
  )
}

export default CounterHook