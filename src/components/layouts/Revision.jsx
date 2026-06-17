import React from 'react'
import { Link } from 'react-router-dom'

const Revision = () => {
  return (
    <div className='flex justify-evenly h=[7vh]'>
        
       <Link to='/revision/topic1'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>
            let/const/var
            </button>
      </Link>
    </div>
  )
}

export default Revision