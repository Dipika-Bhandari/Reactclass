import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import  Card  from './Card'
import Pagination from './Pagination'





export function Blog() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className="mx-auto max-w-xl text-center mt-10">
        <div className="mx-auto inline-flex rounded-full bg-gray-200 px-4 py-1.5">
          <p className="text-xs font-semibold uppercase tracking-widest text-hover">
             Blogs
          </p>
        </div>
        <h2 className="mt-6 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
          Read Our Latest Blogs.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit.
        </p>
      </div>
     
    
       
        {/* posts */}

      <>
      <div className="mt-8 grid grid-cols-1 ml-10 mr-10 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      <Card
      title="Web Development"
      description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
      tag1="Web Development"
      tag2="Web Design"
      date="Jan 1, 2022"
      image="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

      />
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
      </div>
      <Pagination />
      </>
 


    
      
   </>
  )
}


export default Blog