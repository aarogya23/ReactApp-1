import React from 'react'

const Student = (props) => {
  return (
    <div className='p-10 text-2xl'>


       
       <h1>
            Name : {props.name}
       </h1>
       <h2>
         Roll No. : {props.roll}
       </h2>
       <h2>
        Address : {props.address}
       </h2>
        

        

    </div>

  )
}

// Destructuring
// const Student = ({name = 'n/a',roll = 'n/a',address = = 'n/a'}) => {
//   return (
//     <div className='p-10 text-2xl'>


       
//        <h1>
//             Name : {props.name}
//        </h1>
//        <h2>
//          Roll No. : {props.roll}
//        </h2>
//        <h2>
//         Address : {props.address}
//        </h2>
        

        

//     </div>

export default Student