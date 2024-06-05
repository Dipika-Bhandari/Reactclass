import React from 'react'
import { ArrowUpRight, ArrowRight, Calendar, ShareIcon, Share2 } from 'lucide-react'

export function Card(props) {
  return (
    <div className="w-[300px] rounded-md border">
      <img
        src={props.image}
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4 text-primary">
        <h1 className="inline-flex items-centertext-  text-lg font-semibold">
          {props.title} &nbsp; <ArrowUpRight className="h-4 w-4 text-primary" />
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          {props.description}
        </p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-[10px] font-semibold text-primary">
            {props.tag1}
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-[10px] font-semibold text-primary">
            {props.tag2}
          </span>
          <span className='inline-flex items-center gap-32'>
          <span className=' inline-flex items-center gap-2'><Calendar className="h-4 w-4 text-hover" /> {props.date}</span>
          <Share2 className="h-4 w-4 text-primary" />
          </span>
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-md bg-primary rounded-xxs px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Read More
        </button>
      </div>
    </div>
  )
}


export default Card