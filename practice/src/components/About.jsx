import React from 'react'


const About = (props) => {
  


  return (
    <section>

    <div className="px-2 lg:flex lg:flex-row lg:items-center">
      <div className="w-full lg:w-1/2">
        <div className="my-10 lg:my-0 lg:px-10">
        <div className="mx-auto inline-flex rounded-full bg-gray-200 px-4 py-1.5">
          <p className="text-xs font-semibold uppercase tracking-widest text-hover">
            About Us
          </p>
        </div>
         <h2 className="text-3xl font-bold mt-2 leading-tight text-primary sm:text-4xl lg:text-5xl">
         {props.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
            {props.content}
          </p>
              <div className="flex w-full max-w-sm items-center mt-6 space-x-2">
                <button
                 onClick={props.onClick}
                  type="button"
                  className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                {props.button}
                </button>
              </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="ManWith Laptop"
          className="rounded-md object-cover"
        />
      </div>
    </div>
  </section>
)
}


export default About