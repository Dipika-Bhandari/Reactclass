import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Contact = () => {
  return (
    <>
   
    <div>I AM CONTACT</div>

    <h1>Contact</h1>

    <h2><Link to="user/1">User1</Link></h2>
    <h2><Link to="user/2">User2</Link></h2>
    <h2><Link to="user/3">User3</Link></h2>
    <h2><Link to="user/4">User4</Link></h2>
    <h2><Link to="user/5">User5</Link></h2>

    <Outlet/>
    </>
  )
}

export default Contact