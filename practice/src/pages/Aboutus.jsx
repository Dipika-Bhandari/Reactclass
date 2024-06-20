import React from 'react'
import Subbanner from '../components/Subbanner'
import Footer from '../components/Footer'
import About from '../components/About'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import Cta from '../components/Cta'

import { useNavigate } from 'react-router-dom'

const Aboutus = () => {

  const navigateme = useNavigate();

  const pathao = () => {
    navigateme('/contact')
  }
  return (
    <>
<Subbanner
title="About Us"
Breadcrumb="About Us"
/>

<About
title="Our Story"
content="We are a team of talented designers and developers with a passion for creating beautiful, modern websites.We are a team of talented designers and developers with a passion for creating beautiful, modern websites.We are a team of talented designers and developers with a passion for creating beautiful, modern websites.We are a team of talented designers and developers with a passion for creating beautiful, modern websites.We are a team of talented designers and developers with a passion for creating beautiful, modern websites.We are a team of talented designers and developers with a passion for creating beautiful, modern websites."
button="Contact Us"
onClick={pathao}
/>

<div className="mt-10">
  <Team/>
</div>

<Testimonials/>

<Faq/>

<Cta/>


<Footer/>
    </>
  )
}

export default Aboutus