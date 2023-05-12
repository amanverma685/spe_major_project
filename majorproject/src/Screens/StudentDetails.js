import React, { useState } from "react";

export default function StudentDetails(props) {
  const { onClose, show, id, name, value } = { ...props };
  const [isDisabled, setIsDisabled] = useState(true);
  console.log(value)

  const handleaccept = () => {
    console.log("accepted");
  };
  const handlereject = () => {
    console.log("rejected");
  };
  

  // if(!show){
  //     return null
  // }
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="p-6">
            <h4 className="text-2xl font-bold mb-4 text-black   ">
              Student Details
            </h4>
            <div>
              <div className="text-gray-900">Roll Number: {props.id}</div>
              {/* <div className="font-bold text-black">{props.id}</div> */}
              <div className="text-gray-900">Name: {props.name}</div>
              {/* <div className="font-bold text-black">{props.name}</div> */}
              <div className="text-gray-900">Email: {props.email}</div>
              {/* <div className="font-bold text-black">{props.email}</div> */}
              <div className="text-gray-900">Grade: {props.grade}</div>
              {/* <div className="font-bold text-black">{props.grade}</div> */}
              <div className="text-gray-900">
                Achievement: {props.achievements}
              </div>
              {/* <div className="font-bold text-black">{props. achievements}</div> */}
            </div>
            <div className="flex flex-row">
              <div>
                <button
                  className="bg-black text-center text-white py-1 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  onClick={() => {
                    onClose(false);
                    // console.log("show value on close button",show)
                  }}
                >
                  Close
                </button>
                {(value === 0  ||  value==2) && (
                  <button
                    className="bg-black text-center m-2 text-white py-1 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    onClick={handleaccept}
                  >
                    Accept
                  </button>
                )}

                {/* <button  className="bg-black text-center text-white py-1 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-500"
               disabled={true}> disabled</button> */}
               {(value === 0 || value ===1 ) && (
                <button
                  className="bg-black text-center text-white py-1 px-4 m-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  onClick={handlereject}
                >
                  Reject
                </button>
                )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



