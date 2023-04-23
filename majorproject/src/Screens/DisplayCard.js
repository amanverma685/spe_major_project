import React, { useState } from 'react'
import StudentDetails from './StudentDetails'

export default function DisplayCard(props) {
  const[show,setShow]=useState(false)
  const { onClose, value, id, name } = { ...props };
  
  
  return (
    <div className="flex items-center shadow-lg shadow-black bg-white bg-opacity-25  rounded-20 m-4">   
    <img className="w-10 h-10 rounded-full" src={props.e.url} alt="Rounded avatar"/>


      <div className='flex flex-row'>
      <div className="px-4 py-2 m-2">
      <div className="text-sm">Roll Number: {props.e.id}</div>
      </div>
      <div className="px-4 py-2 m-2">
      <div className="text-sm">Name: {props.e.name}</div>
      </div>
      <div className="px-4 py-2 m-2">
      <div className="text-sm">Grade: {props.e.grade}</div>
      </div>
      <div className="px-4 py-2 m-2">
      <div className="text-sm">Email: {props.e.email}</div>
      </div>
      <div className="px-4 py-2 m-2">
      <div className="text-sm">Subject: {props.e.subject}</div>
      </div>
      {/* <div className="px-4 py-2 m-2">
      <div className="text-xl ">{props.e.achievements}</div>
      </div> */}
      <div className="px-4 py-2 m-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white justify-end rounded-lg w-40 h-10 m-1" 
        onClick={()=>setShow(true)}>
          View Details 
        </button>
        {
          (show === true) && <StudentDetails onClose={setShow} show={show} id={props.e.id} name={props.e.name} grade={props.e.subject} achievements={props.e.achievements} email={props.e.email} value={value} />
        }
        </div>
      </div>
    </div>
  )
}
