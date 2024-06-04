import React from 'react'

const Card = (Props) => {
  return (
    <> 
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={Props.img} alt="picture"/>
    <div className="px-6 py-4">
     <div className="font-bold text-3xl  mb-2">{Props.title}</div>
      <div className="font-bold text-l mb-2">{Props.post}</div>
      
      <p className="text-gray-700 text-base">
        {Props.description}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href={Props.facebook} target='_blank'>Facebook</a></span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href={Props.github} target='_blank' >Github</a></span>
    </div>
  </div>
  </>
  )
}

export default Card