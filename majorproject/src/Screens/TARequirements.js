import React,{useState} from 'react'


export default function (props) {
    const { onClose,show} = { ...props };

    const [TARequirement, setTArequirement] = useState({
        subject:"",
        number:"",
        elligibility:"",
        requirement:"",
        deadline:""
      });
    
        const onChange = (e) => {
            // console.log(e);
            setTArequirement({ ...TARequirement, [e.target.name]: e.target.value });
          };

        const handleSubmit = ()=>{
            console.log(TARequirement)
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
            TA Requirements
          </h4>
          <form className='grid gap-4 grid-cols-2'>
          <div className="mb-1">
            <label className="block text-gray-700 mb-1 text-sm" htmlFor="username">
              Subject:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Subject"
              name="subject"
              value={TARequirement.subject}
              onChange={onChange}
            />
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 mb-1 text-sm" htmlFor="username">
              Number:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="number"
              type="number"
              placeholder="Number of TA required"
              name="number"
              value={TARequirement.number}
              onChange={onChange}
            />
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 mb-1 text-sm" htmlFor="username">
              Elligibilty
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="elligibility"
              type="text"
              placeholder=" Elligibilty"
              name="elligibility"
              value={TARequirement.elligibility}
              onChange={onChange}
            />
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 mb-1 text-sm" htmlFor="username">
              Special Requirements
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="requirement"
              type="text"
              placeholder="Special Requirements"
              name="requirement"
              value={TARequirement.requirement}
              onChange={onChange}
            />
          </div>
          <div className="mb-1">
            <label className="block text-gray-700 mb-1 text-sm" htmlFor="username">
              Deadline
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="deadline"
              type="date"
              placeholder="Deadline"
              name="deadline"
              value={TARequirement.deadline}
              onChange={onChange}
            />
          </div>
          
         
          
        </form>
        <div className="flex justify-end">
            <button
              className="bg-black text-white  py-1 px-4 m-1 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Save
            </button>
            <button
            className="bg-black text-center text-white py-1 px-4 m-1 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            onClick={() => {
              onClose(false);
              console.log("show value on close button",show)
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
