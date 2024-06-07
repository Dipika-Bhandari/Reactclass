
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Blogpage from './pages/Blogpage'
import Ourservices from './pages/Ourservices'
import Contact from './pages/Contact'


function App() {
  

  return (
    <>
    <Navbar/>

  

   <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/about' element={<Aboutus/>}/>
        <Route  path='/blog' element={<Blogpage/>}/>
        <Route  path='/services' element={<Ourservices/>}/>
        <Route  path='/contact' element={<Contact/>}/>
  </Routes>
    </>
  )
}

export default App
