import React from 'react'
import { useState } from 'react'

const Usestatehook = () => {

    const myarray=useState(" dipika");

    const [myname,setmyname]=useState(" dipika");
    const changemyname=()=>{
        setmyname(" aditya")
    }

    

  return (
    <>
    <h1>Usestatehook</h1>
    <h2>first tarika</h2>
    <h1>my name is{myarray[0]}</h1>
    <button onClick={()=>myarray[1](" aditya")}>change name</button>
    


    <h2>second tarika</h2>

<h1>my name is{myname}</h1>
<button onClick={changemyname}>change name</button>


    </>
  )
}

export default Usestatehook