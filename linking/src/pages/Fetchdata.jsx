import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Fetchdata = () => {

    const [post, setpost] = useState([]);

    useEffect(() => {

      axios.get("https://6671136ce083e62ee439f0d8.mockapi.io/crud")
      .then(res => setpost(res.data))

      .catch (err => console.log(err))




    

    
      
    }, [])
    


  return (
   <>
   <h1>Fetchdata</h1>
   <h3>here is the map data</h3>

   {post.map((post) => (
    <h4><ul key={post.id}>
    <li>{post.id}</li>
    <li>{post.name}</li>
    <li>{post.email}</li>
</ul></h4>
   ))}


   </>
  )
}

export default Fetchdata