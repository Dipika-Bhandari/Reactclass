import React from 'react'
import { useNavigate } from 'react-router-dom'



const Home = () => {

  const navigateme = useNavigate();

  const pathao = () => {
    navigateme('/about')
  }



  return (
    <>
    
    {/* <div>I AM HOME</div>

    <button onClick={pathao}>Go to About page</button>
    <br></br>

    <button onClick={() => window.history.forward()}>Go forward</button>

<hr></hr> */}

    </>
  )
}

export default Home