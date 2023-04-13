import React from 'react'
// import Navbar from '../Components/Navbar'
import { useState } from 'react'
function AddProject() {
  const [value, setvalue] = useState(0)
  return (
    <>
        <nav className="bg-gray-300 py-2">
          <ul className="flex justify-around">
            <li className="mx-4">
            <button className="btn btn-sm btn-outline-secondary" type="button" onClick={()=>{
              setvalue(0)
            }} >Requested</button>
            </li>
            <li className="mx-4">
            <button className="btn btn-sm btn-outline-secondary" type="button" onClick={()=>{
              setvalue(1)
            }} >Accepted</button>
            </li>
            <li className="mx-4">
            <button className="btn btn-sm btn-outline-secondary" type="button" onClick={()=>{
              setvalue(2)
            }} >Rejected</button>
            </li>
          </ul>
        </nav>
      {
        (value===0) && (
          <>
          This is page 0
          </>
        )
      }
            {
        (value===1) && (
          <>
          This is page 1
          </>
        )
      }
            {
        (value===2) && (
          <>
          This is page 2
          </>
        )
      }
      
      

    </>
  )
}

export default AddProject