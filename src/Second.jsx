import React from 'react'
import { useState } from 'react'

const Second = () => {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }
    let a = 30
    let b = 20  
    
  return (
    <>
     <p>Hello world</p>
         <button onClick={handleClick}>
           Count: {count}
         </button>
    <div>Second</div>
    <div className='sum'>
      {a + b}
    </div>
    </>
  )
}

export default Second;
