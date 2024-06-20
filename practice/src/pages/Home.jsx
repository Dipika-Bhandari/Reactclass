
import About from '../components/About'
import Blog from '../components/Blog'
import Cta from '../components/Cta'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Service from '../components/Service'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import { useNavigate } from 'react-router-dom'



const Home = () => {

  const navigateme = useNavigate();

  const pathao = () => {
    navigateme('/about')
  } 

  


  return (
    
    <>
   

    <Hero/>

    <About
    title="Where Creativity Meets Innovation"
    content="We are a team of talented designers and developers with a passion for creating beautiful, modern websites."
    button="Read More"
    onClick={pathao}
    />

    <Service/>

    <Team  
    
    />

    <Testimonials/>

    <Blog/>


    

    
    <Faq/>

    <Cta/>
   

    <Footer/>



    </>
  )
}

export default Home