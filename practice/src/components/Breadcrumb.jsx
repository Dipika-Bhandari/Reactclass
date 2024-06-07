import React from 'react'
import { Home, ChevronRight } from 'lucide-react'

const Breadcrumb = (props) => {
  return (
    // <nav className="flex"  aria-label="Breadcrumb">
    <ol className="inline-flex  items-center space-x-1 md:space-x-3">
      
      <li>
        <div className="flex items-center">
          
          <a href="#" className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
            Home
          </a>
        </div>
      </li>
      <li aria-current="page">
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4" />
          <span className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
            {props.Breadcrumb}
          </span>
        </div>
      </li>
    </ol>
//   </nav>
  )
}

export default Breadcrumb