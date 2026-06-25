import React, { useContext } from 'react'
import Student from '../components/Student'
import { MyContext } from '../hooks/MyContext'

const Classroom = () => {

    let msg = useContext(MyContext)
  return (
    <div>
        <h1>{msg}</h1>
        <Student name='Ramesh' roll = '1'  address = 'Kathmandu' />
        <Student name='Raj' roll = '2'  address = 'Gatekulo 32' />
        <Student name='Rakesh' roll = '3'  address = 'Kavre' />
    </div>
    

  )
}

export default Classroom