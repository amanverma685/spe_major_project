import React, { useState } from 'react'
import StudentDetails from './StudentDetails'

export default function DisplayCard(props) {
  const[show,setShow]=useState(false)
  const url="https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg"
  return (
    <div className="flex items-center shadow-lg shadow-black bg-gray-500  rounded-20 m-4">
      {/* <div className="w-16 h-16 rounded-full  bg-gray-400"></div> */}
      
<img class="w-10 h-10 rounded-full" src={url} alt="Rounded avatar"/>
{/* <img class="w-10 h-10 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Default avatar"> */}

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
      <div className="text-xl font-semibold">{props.e.email}</div>
      </div>
      <div className="px-4 py-2 m-2">
      <div className="text-xl font-semibold">{props.e.subject}</div>
      </div>
      {/* <div className="px-4 py-2 m-2">
      <div className="text-xl ">{props.e.achievements}</div>
      </div> */}
      <div className="px-4 py-2 m-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semi justify-end rounded-lg w-40 h-10" 
        onClick={()=>setShow(true)}>
          View Details 
        </button>
        {
          (show === true) && <StudentDetails onClose={setShow} show={show} id={props.e.id} name={props.e.name} grade={props.e.subject} achievements={props.e.achievements} email={props.e.email} url={props.e.url}/>
        }
        </div>
      </div>
    </div>
  )
}
