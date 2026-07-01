import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxCounter = () => {
//instead of these two
    // let counterStore = useSelector(store => store)
    // let count = counterStore.count
//can be this too
    // let count = useSelector(store => store.count)
//OR
    let {count} = useSelector(store => store.counter)
    const dispatch = useDispatch()


  return (
    <div className='h-[80vh] flex justify-center items-center text-3xl'>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch({ type: 'INCREASE' })}>INCREASE</button>
        <button onClick={() => dispatch({ type: 'DECREASE' })}>DECREASE</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
    </div>
  )
}

export default ReduxCounter
