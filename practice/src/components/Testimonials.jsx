import React from 'react'

export function Testimonials() {
  return (
    <div className='bg-blue-100 mt-10'>
        <section className="px-2 py-10 md:px-0">
      <div className="mx-auto max-w-4xl">
        <div className="md:flex md:items-center md:justify-center md:space-x-14">
          <div className="relative h-48 w-48 flex-shrink-0">
            <img
              className="relative h-48 w-48 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>

       
    
<div className="mt-10 md:mt-0">
            <blockquote>
            <div className="mx-auto inline-flex rounded-full bg-gray-200 px-4 py-1.5">
          <p className="text-xs font-semibold uppercase tracking-widest text-hover">
            Testimonials
          </p>
        </div>
            <h2 className="mt-4 mb-4 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
          What Our Clients Say.
        </h2>
              <p className="text-xl text-grey-600">
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquam repellat
                laborum minima tempore deserunt explicabo placeat! Fugit, molestias nesciunt.”
              </p>
            </blockquote>
            <p className="mt-7 text-lg font-semibold text-primary">John Doe</p>
            <p className="mt-1 text-base text-hover">Frontend Developer at Google</p>
          </div>
        </div>
      </div>

    </section>
    </div>
  )
}


export default Testimonials