import React,{useEffect, useState} from 'react'
import axios from "axios";

export default function StudentFormTA(props) {
  
    const{onClose,show,data}={...props}
    const[student,setStudent]=useState({
        roll_number:"",
        grade:"",
        whyApply:"",
        experience:"",
        user_id:data.user_id,
        subject:data.subject,
        ta_vacancy_id:data.ta_vac_id
    })
    
    
    const onChange=(e)=>{
        setStudent({...student, [e.target.name]: e.target.value });
    }
    
    const handleSubmit =async(e)=>{
      console.log(student);
      const token = sessionStorage.getItem("token");
      await axios.post(`https://qq83tpt61e.execute-api.ap-south-1.amazonaws.com/dev/ta_request/post_ta_request_details`,
      student
      ,{
      headers: {
        Authorization: "Bearer " + token,
      }}
      )
      .then((res)=>{
        console.log(res.data)
        window.location.reload(true)
      })
      .catch(err=>console.log(err))


      console.log("form submitted");
    }
  return (
    
    <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="p-6">
          <h4 className="text-2xl font-bold mb-4 text-black   ">
            TA Form
          </h4>
          <form >
            <div className='grid gap-6 grid-cols-2'>
          <div className="mb-1">
            <label className="block text-gray-700 mb-1 text-sm" htmlFor="username">
              Roll Number:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="roll_number"
              type="text"
              placeholder="Enter your roll number"
              name="roll_number"
              value={student.roll_number}
              onChange={onChange}
            />
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 mb-1 text-sm" htmlFor="username">
              Subject Name:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="subject"
              placeholder="Enter your subject"
              name="subject"
              value={student.subject}
              readOnly={true}
            />
          </div>
          
          <div className="mb-1">
            <label className="block text-gray-700 mb-1 text-sm" htmlFor="username">
            Grade:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="grade"
              type="text"
              placeholder="Enter your grade"
              name="grade"
              value={student.grade}
              onChange={onChange}
            />
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 mb-1 text-sm" htmlFor="username">
            Experience
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="experience"
              type="text"
              placeholder="Enter your experience"
              name="experience"
              value={student.experience}
              onChange={onChange}
            />
          </div> 
          </div>
        
          <div className="mt-3">
            <label className="block text-gray-700 mb-1 text-sm" htmlFor="username">
            Why you want to apply for thr TA ship?
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="whyApply"
              type="text"
              name="whyApply"
              value={student.whyApply}
              onChange={onChange}
            />
          </div>
        </form>
        <div className="flex justify-end">
            <button
              className="bg-black text-white  py-1 px-4 m-1 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}>
              Apply
            </button>
            <button
            className="bg-black text-center text-white py-1 px-4 m-1 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            onClick={() => {
              onClose(false);
              // console.log("show value on close button",show)
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
