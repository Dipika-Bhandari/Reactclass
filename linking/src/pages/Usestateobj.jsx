import React, { useState } from 'react'

const Usestateobj = () => {


    const obj={
        name:"dell",
        age:23,
        model:"xps",
        brand:"dell",
        year:2023,
        color:"black",
        isAvailable:true
        };

        const[value,setValue]=useState(obj);

        const changestate = () => {
          setValue({
            name: "lenovo",
            age:21,
            model:"xps",
            brand:"lenovo",
            year:2021,
            color:"white",
            isAvailable:false
          });
        };

        const changemystate = () => {
          setValue({
            ...value,
            name: "dipika",
          });
        };

  return (
    <>
    <h1>UseStateObj</h1>
    <h2>{value.name}</h2>
    <h2>{value.age}</h2>
    <h2>{value.model}</h2>
    <h2>{value.brand}</h2>
    <h2>{value.year}</h2>
    <h2>{value.color}</h2>
    <h2>{value.isAvailable.toString()}</h2>


    <button onClick={changestate}>click me to change whole obj</button>

    <br></br>

    <button onClick={changemystate}>click me to obj name</button>



    </>
  )
}

export default Usestateobj