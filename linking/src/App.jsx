
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
import Userdetail from './pages/Userdetail'
import Usedtatehook from './pages/Usestatehook'
import Useeffecthook from './pages/Useeffecthook'
import Usestateobj from './pages/Usestateobj'
import Onchangeevent from './pages/Onchangeevent'





function App() {
  

  return (
    <>
    <Navbar/>

    <Usedtatehook/>

    <hr></hr>

    <Useeffecthook/>

    <hr></hr>

    <Usestateobj/>
    <hr></hr>

    <Onchangeevent/>


   

   

  
    
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/services' element={<Services/>}/>

        <Route  path='/contact' element={<Contact/>}>
         <Route path='user/:id' element={<Userdetail/>}/>
        </Route>

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
