import React, { useState } from 'react'

export default function TaVacancyDisplayData(props) {
  const { onClose, show ,value,data} = { ...props };
  // console.log(data)

  const [TARequirement, setTArequirement] = useState({
    subject:"",
    number_of_vacancy:"",
    eligibility: "",
    deadline: "",
    minimum_grade:"",
    semester: "",
    remarks: "",
    current_registered:"",
    status:"Active",
  });
  const onChange = (e) => {
    // console.log(e);
    setTArequirement({ ...TARequirement, [e.target.name]: e.target.value });
  };
  return (
    <div className="fixed z-20 inset-0 overflow-y-auto">
    {/* {console.log(props.value)} */}
    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div className="inline-block align-bottom bg-white  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="p-6 ">
          <h4 className="text-2xl font-bold mb-4 text-black   ">
            TA Requirements
          </h4>
          <form >
            <div className="m-2 ">
              <label
                className="block text-gray-700 mb-1 text-sm"
                htmlFor="username"
              >
                Subject: {data.subject}
              </label>
              
            </div>
            <div className="m-2">
              <label
                className="block text-gray-700 mb-1 text-sm"
                htmlFor="username"
              >
                Number of vacancy: {data.number_of_vacancy}
              </label>
              
            </div>
            <div className="m-2">
              <label
                className="block text-gray-700 mb-1 text-sm"
                htmlFor="username"
              >
                Elligibilty:{data.eligibility}
              </label>
              
            </div>
            <div className="m-2">
              <label
                className="block text-gray-700 mb-1 text-sm"
                htmlFor="username"
              >
                Remarks: {data.remarks}
              </label>
             
            </div>
            <div className="m-2">
              <label
                className="block text-gray-700 mb-1 text-sm"
                htmlFor="username"
              >
                Minimum grade: {data.minimum_grade}
              </label>
              
            </div>
            
            <div className="m-2">
              <label
                className="block text-gray-700 mb-1 text-sm"
                htmlFor="username"
              >
                Semester: {data.semester}
              </label>
              
            </div>
            
            <div className="m-2">
              <label
                className="block text-gray-700 mb-1 text-sm"
                htmlFor="username"
              >
                Deadline: {new Date(data.deadline).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).replace(/(\d+)(st|nd|rd|th)/, "$1")}
              </label>
             
            </div>
            <div className="m-2">
              <label
                className="block text-gray-700 mb-1 text-sm"
                htmlFor="username"
              >
                Status: {data.status}
              </label>
             
            </div>
          </form>
          <div className="flex justify-end">
            <button
              className="bg-black text-center text-white py-1 px-4 m-1 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              onClick={() => {
                onClose(false);
                console.log("show value on close button", show);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
