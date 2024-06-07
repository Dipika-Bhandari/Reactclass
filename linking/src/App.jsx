
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './compnents/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Pagenot from './pages/Pagenot'
import Products from './pages/Products'
import Tshirt from './pages/Tshirt'
import Shoes from './pages/Shoes'


function App() {
  

  return (
    <>
    <Navbar/>
    
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/services' element={<Services/>}/>
        <Route  path='/contact' element={<Contact/>}/>

        <Route  path='/products' element={<Products/>}>
         <Route index element={<Tshirt/>}/>
         <Route  path='Tshirt' element={<Tshirt/>}/>
         <Route  path='Shoes' element={<Shoes/>}/>
        

        </Route>


    
        <Route path='/*' element={<Pagenot/>}/>
      </Routes>
    </>
  )
}

export default App
