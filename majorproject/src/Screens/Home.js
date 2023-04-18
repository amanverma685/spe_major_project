import React from 'react'


function Home() {
  return (
    <div>
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
    </div>
    
    </div>
  )
}

export default Home