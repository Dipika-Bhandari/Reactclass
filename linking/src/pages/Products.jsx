import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
        <h1>Products</h1>

        <ul>
            <li>
                <Link to ="Tshirt">Tshirts</Link>
            </li>
            <li>
                <Link to ="Shoes">Shoes</Link>
            </li>
           
        </ul>

        <Outlet/>
    </div>

  )
}

export default Products