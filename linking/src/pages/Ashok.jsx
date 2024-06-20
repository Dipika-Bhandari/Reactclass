import React, { useContext } from 'react'
import { paaisadeu } from '../App'

const Ashok = () => {

    const meropaisa = useContext(paaisadeu)

  return (
    <>
    <h1>Ashok le {meropaisa} paisa payo</h1>
    </>
  )
}

export default Ashok