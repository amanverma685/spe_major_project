import React from 'react'
import {Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto';

function Home() {
  const data={
    labels:['Jan','Feb','Mar','Apr','May'],
    datasets:[
      {
        label:'Number of requests received',
        data:[3,2,2,4,1]
      },
      {
        label:'Number of accepted received',
        data:[1,2,1,4,1]
      }
    ]
  }
  return (
    
     <div className="container">
      <div className="grid grid-cols-3 gap-4">
      <div className="max-w-md mx-auto bg-pink-200 rounded-xl shadow-md overflow-hidden ">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-black font-semibold">
              Number of request received
            </div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black ">
              20
            </h2>
        </div>
      </div>
      <div className=" max-w-md mx-auto bg-pink-200 rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-black font-semibold">
              Number of accepted request
            </div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black ">
              20
            </h2>
        </div>
      </div>
      <div className=" max-w-md mx-auto bg-pink-200 rounded-xl shadow-md overflow-hidden">
       
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-black font-semibold">
              Number of rejected  request
            </div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black ">
              20
            </h2>
        </div>
      </div> 
      </div>
      <div className='h-80 w-100 mt-4'>
       <Line data={data}/>  
       </div>
    </div>
    
 
  )
}

export default Home