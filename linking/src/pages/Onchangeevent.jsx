import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const onchangeevent = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");

    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.post("https://6671136ce083e62ee439f0d8.mockapi.io/crud",
            {name,email}
        );
        e.target.reset();
    }
  return (
  <>
   <h1>Onchange effect</h1>

<form onSubmit={handlesubmit}>

{/* <h3>first tarika</h3>
    <label>enter your name</label>
    <input 
    type="text"
     name="name" 
     id="email"
     onChange={(e)=>console.log(e.target.value) }
     
     />

    <label>enter your email</label>
    <input 
    type="text"
     name="name" 
     id="name"
     onChange={(e)=>console.log(e.target.value) 
}
     
     />

<br></br> */}

<h3>second tarika</h3>
<label>enter your name</label>
    <input 
    type="text"
     name="name" 
     id="email"
     onChange={(e)=>setemail(e.target.value) }
     
     />

    <label>enter your email</label>
    <input 
    type="text"
     name="name" 
     id="name"
     onChange={(e)=>setname(e.target.value) 
}
     
     />

<button type='submit'>submit</button>

</form>

{name}

<br></br>

{email}
</>
  )
}

export default onchangeevent