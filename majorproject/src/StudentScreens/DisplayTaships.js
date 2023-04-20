import React, { useState } from 'react'
import StudentFormTA from './StudentFormTA'

export default function DisplayTaships(props) {
    const[show,setShow]=useState(false)
  return (
    <div> 
    <div className="flex items-center shadow-lg shadow-black bg-gray-500  rounded-20 m-4">   

 <div className='flex flex-row'>
      <div className="px-4 py-2 m-2">
      <div className="text-sm"> Subject: {props.e.subject}</div>
      </div>
      <div className="px-4 py-2 m-2">
      <div className="text-sm ">Number : {props.e.number}</div>
      </div>
      <div className="px-4 py-2 m-2">
      <div className="text-sm ">Elligibility: {props.e.elligibility}</div>
      </div>
      <div className="px-4 py-2 m-2">
      <div className="text-sm ">Requirements: {props.e.requirement}</div>
      </div>
      <div className="px-4 py-2 m-2">
      <div className="text-sm ">Deadline : {props.e.deadline}</div>
      </div>
      <div className="px-4 py-2 m-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semi justify-end rounded-lg w-40 h-10" 
        onClick={()=>setShow(true)}>
     Apply
        </button>
        {
          (show === true) && <StudentFormTA onClose={setShow} show={show}/>
        }
        </div>
      </div>
 </div>
 </div>
  )
}
