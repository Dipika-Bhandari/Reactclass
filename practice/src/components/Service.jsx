import React from 'react'

import { Monitor, Tangent, Router, Globe} from 'lucide-react'

export function Service() {
  return (
    <div className='bg-blue-100'>
        <div className="mx-auto  mt-10 mb-10 py-14  max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto inline-flex rounded-full bg-gray-200 px-4 py-1.5">
          <p className="text-xs font-semibold uppercase tracking-widest text-hover">
            Our Services
          </p>
        </div>
        <h2 className="mt-6 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
           Building A Better Future.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Monitor className="h-9 w-9 text-primary" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-primary">Web Development</h3>
          <p className="mt-4 text-sm text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Tangent className="h-9 w-9 text-primary" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-primary">Web Design</h3>
          <p className="mt-4 text-sm text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Router className="h-9 w-9 text-primary" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-primary">Web Hosting</h3>
          <p className="mt-4 text-sm text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Globe className="h-9 w-9 text-primary" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-primary">SEO Optimization</h3>
          <p className="mt-4 text-sm text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Service