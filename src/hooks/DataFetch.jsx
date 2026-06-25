import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const DataFetch = () => {

    let [post, setPost] = useState([]);
    let [length, setLength] = useState(20);


    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => 
            response.json()
        )
        .then(data => setPost(data.slice(0, length)))
        .catch(error => 
            console.log(error)
        )
    },[length])


  return (
    <div>
        {
            post.map((post)=>{

                return <div className='p-5 shadow-2xl rounded-2xl' key={post.id}>
                    <Link to={`/post/${post.id}`}>{post.id}. {post.title}</Link>

                    
                    </div>

            })
        }
        {
            length < 100 ?
            <button onClick={() => setLength(length + 20)} className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors">Load More</button>
            :
            <div>All posts loaded</div>
        }

        {
            length > 20 ?
            <button onClick={() => setLength(length - 20)} className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">Load Less</button>
            :
            <div className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors">Minimum posts loaded</div>

        }

         

        
    </div>
  )
}

export default DataFetch