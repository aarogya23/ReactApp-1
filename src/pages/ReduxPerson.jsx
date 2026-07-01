import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxPerson = () => {
//three options:
    //let personStore = useSelector(store => store)

    //let name = useSelector(store => store.name)
    //let phone = useSelector(store => store.phone)

    //let (name, phone) = useSelector(store => store)
  
  let { name, phone } = useSelector(store => store.person)
  let dispatch = useDispatch()
  let [newName, setNewName] = useState('')
  let [newPhone, setNewPhone] = useState('')

    return (
    <div className='flex justify-center items-center flex-col h-[70vh]'>
        <h2>NAME: {name}</h2>
        <input
          type="text"
          className='border border-gray-300 rounded py-2 px-4 mt-4'
          placeholder='Enter Name'
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
        <button
          className='bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mt-2'
          onClick={() => dispatch({ type: 'UPDATE_NAME', payload: newName })}
        >
          UPDATE NAME
        </button>

        <h2>PHONE: {phone}</h2>
        <input
          type="text"
          className='border border-gray-300 rounded py-2 px-4 mt-4'
          placeholder='Enter Phone'
          value={newPhone}
          onChange={(event) => setNewPhone(event.target.value)}
        />
        <button
          className='bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mt-2'
          onClick={() => dispatch({ type: 'UPDATE_PHONE', payload: newPhone })}
        >
          UPDATE PHONE
        </button>
    </div>
  )
}

export default ReduxPerson
