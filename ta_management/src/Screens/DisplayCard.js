import React from 'react'

export default function DisplayCard(props) {
  return (
    <div className="flex items-center shadow-lg shadow-black bg-gray-500  rounded-20 m-4">
      <div className="w-16 h-16 rounded-full  bg-gray-400"></div>
      <div className='flex flex-row'>
      <div className="px-4 py-2 m-2">
      <div className="text-xl font-semibold">{props.e.id}</div>
      </div>
      <div className="px-4 py-2 m-2">
      <div className="text-xl font-semibold">{props.e.name}</div>
      </div>
      <div className="px-4 py-2 m-2">
      <div className="text-xl font-semibold">{props.e.grade}</div>
      </div>
      <div className="px-4 py-2 m-2">
      <div className="text-xl font-semibold">{props.e.subject}</div>
      </div>
      <div className="px-4 py-2 m-2">
      <div className="text-xl ">{props.e.achievements}</div>
      </div>
      <div className="px-4 py-2 m-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semi h-12 justify-end rounded-lg w-40 h-10">
          View Details
        </button>
        </div>
      </div>
    </div>
  )
}
