import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Post = () => {

    // let params = useParams()
    // // params - {id: "1"}
    // const id = params.id
    const {id} = useParams()


    let [post, setPost] = useState({})


    useEffect(()=>{
       axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .then((response)=>{
        setPost(response.data)
       })
       .catch((error)=>{
        console.log(error)
       })
    },[])

  return (
    <div className='p-5 m-5 w-1/2 mx-auto shadow-lg'>
        <h2> {id}.{post.title}</h2>
        <p>{post.body}</p>
    </div>
  )
}

export default Post