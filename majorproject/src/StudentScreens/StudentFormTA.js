import React,{useState} from 'react'

export default function StudentFormTA(props) {
    const{onClose,show}={...props}
    const[student,setStudent]=useState({
        id:"",
        name:"",
        email:"",
        grade:"",
        achievements:"",
        whyApply:"",
    })
    const onChange=(e)=>{
        setStudent({...student, [e.target.name]: e.target.value });
    }
    const handleSubmit =(e)=>{
      console.log(student);
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
            <div className='grid gap-4 grid-cols-2'>
          <div className="mb-1">
            <label className="block text-gray-700 mb-1 text-sm" htmlFor="username">
              Roll Number:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="id"
              type="number"
              placeholder="Enter your roll number"
              name="id"
              value={student.id}
              onChange={onChange}
            />
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 mb-1 text-sm" htmlFor="username">
              Name:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="name"
              placeholder="Enter your name"
              name="name"
              value={student.name}
              onChange={onChange}
            />
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 mb-1 text-sm" htmlFor="username">
             Email:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder=" Enter your email"
              name="email"
              value={student.email}
              onChange={onChange}
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
            Achievements
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="achievements"
              type="text"
              placeholder="Enter your achievements"
              name="achievements"
              value={student.achievements}
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
