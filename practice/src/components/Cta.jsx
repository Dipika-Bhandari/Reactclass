import React from 'react'
import { useNavigate } from 'react-router-dom'



export function Cta() {

  const navigateme = useNavigate();

  const pathao = () => {
    navigateme('/contact')
  }

  return (
    <section className="pt-4  bg-blue-100 align-middle ">
      <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl  text-center">

<h2 className="mt-8 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:mt-12 lg:text-5xl">
  Join <span className="border-b-8 border-hover">1,500</span> other developers
</h2>
<p className="mx-auto mt-6 max-w-xl text-base text-gray-600 md:mt-10 lg:text-xl">
  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
  consequat duis.
</p>

<button
  onClick={pathao}
  type="button"
  className="mt-8 mb-12 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
>
  Contact Us Now
</button>
</div>
      </div>
    </section>
  )
}


export default Cta