import React from 'react'

export default function () {
    const handleRequested=()=>{
        
    }
  return (
    <div >
      <nav className="bg-gray-300 py-2">
      <ul className="flex justify-between">
        <li className="mx-4">
        <button className="btn btn-sm btn-outline-secondary" type="button" onClick={handleRequested} >Requested</button>
        </li>
        <li className="mx-4">
        <button className="btn btn-sm btn-outline-secondary" type="button">Accepted</button>
        </li>
        <li className="mx-4">
        <button className="btn btn-sm btn-outline-secondary" type="button">Rejected</button>
        </li>
      </ul>
    </nav>
    </div>
  )
}
