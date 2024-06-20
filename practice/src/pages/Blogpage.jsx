import React from 'react'
import Subbanner from '../components/Subbanner'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'

const Blogpage = () => {

  

  return (
    <>
    <Subbanner
    title="Blog"
    Breadcrumb="Blog"/>
  
  
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 justify-center">
  <div className="flex flex-col  space-y-8 pb-10 pt-12 md:pt-24">
          <p className="text-3xl font-bold text-primary md:text-5xl md:leading-10">
            Resources and insights
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates
            neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
          </p>
          <div className="mt-6 flex w-full items-center space-x-2 md:w-1/3">
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Search Topics"
            ></input>
            <button
              type="button"
              className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Search
            </button>
          </div>
        </div>
        <div className="mt-10 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row">
          <div className="flex w-full items-end border-b border-gray-300">
            {['Design', 'Product', 'Software Engineering', 'Customer Success'].map(
              (filter, index) => (
                <div
                  className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black"
                  key={filter}
                >
                  {filter}
                </div>
              )
            )}
          </div>
        </div>
  </div>


  <div className="mt-8 grid grid-cols-1 ml-10 mr-10 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
  <Card
       title="Web Design"
       description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
       tag1="Web Development"
       tag2="Web Design"
       date="june 15, 2022"
       image="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  />
  <Card
       title="SEO Optimization"
       description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
       tag1="Web Development"
       tag2="Web Design"
       date="feb 15, 2024"
       image="https://plus.unsplash.com/premium_photo-1685208166973-558684d8d822?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   />
  <Card
       title="Web Development"
       description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
       tag1="Web Development"
       tag2="Web Design"
       date="jan 1, 2022"
       image="https://plus.unsplash.com/premium_photo-1661270415926-37a9d24aff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  />
   <Card
       title="Web Development"
       description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
       tag1="Web Development"
       tag2="Web Design"
       date="jan 1, 2022"
       image="https://plus.unsplash.com/premium_photo-1661270415926-37a9d24aff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  />
      </div>

      
  <div className="mt-8 grid grid-cols-1 ml-10 mr-10 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
  
  <Card
       title="SEO Optimization"
       description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
       tag1="Web Development"
       tag2="Web Design"
       date="feb 15, 2024"
       image="https://plus.unsplash.com/premium_photo-1685208166973-558684d8d822?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   />
  <Card
       title="Web Development"
       description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
       tag1="Web Development"
       tag2="Web Design"
       date="jan 1, 2022"
       image="https://plus.unsplash.com/premium_photo-1661270415926-37a9d24aff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  />
   <Card
       title="Web Development"
       description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
       tag1="Web Development"
       tag2="Web Design"
       date="jan 1, 2022"
       image="https://plus.unsplash.com/premium_photo-1661270415926-37a9d24aff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  />
  <Card
       title="Web Design"
       description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
       tag1="Web Development"
       tag2="Web Design"
       date="june 15, 2022"
       image="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  />
      </div>

      
  <div className="mt-8 grid grid-cols-1 ml-10 mr-10 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
  <Card
       title="Web Design"
       description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
       tag1="Web Development"
       tag2="Web Design"
       date="june 15, 2022"
       image="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  />
  
   <Card
       title="Web Development"
       description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
       tag1="Web Development"
       tag2="Web Design"
       date="jan 1, 2022"
       image="https://plus.unsplash.com/premium_photo-1661270415926-37a9d24aff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  />
  <Card
       title="SEO Optimization"
       description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
       tag1="Web Development"
       tag2="Web Design"
       date="feb 15, 2024"
       image="https://plus.unsplash.com/premium_photo-1685208166973-558684d8d822?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   />
  <Card
       title="Web Development"
       description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
       tag1="Web Development"
       tag2="Web Design"
       date="jan 1, 2022"
       image="https://plus.unsplash.com/premium_photo-1661270415926-37a9d24aff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  />
      </div>

      <Pagination />


      <Footer/>




    
    </>
  )
}

 

export default Blogpage