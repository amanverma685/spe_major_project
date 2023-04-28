import React, { useState } from "react";
import axios from "axios"
export default function (props) {
  const { onClose, show } = { ...props };

  const [TARequirement, setTArequirement] = useState({
    subject: "",
    number_of_vacancy: "",
    eligibility: "",
    deadline: "",
    minimum_grade: "",
    semester: "",
    remarks: "",
    current_registered: "",
    status: "",
  });

  const onChange = (e) => {
    // console.log(e);
    setTArequirement({ ...TARequirement, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log(TARequirement);

    const token = sessionStorage.getItem("token");
    await axios
      .post(
        `https://wche6pxyti.execute-api.ap-south-1.amazonaws.com/dev/ta_vacancy/post_form_details`,
        TARequirement,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        console.log("TA requirement added successfull")
        // window.location.reload(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="fixed z-20 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="inline-block align-bottom bg-white  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="p-6 ">
            <h4 className="text-2xl font-bold mb-4 text-black   ">
              TA Requirements
            </h4>
            <form className="grid gap-4 grid-cols-2">
              <div className="mb-1">
                <label
                  className="block text-gray-700 mb-1 text-sm"
                  htmlFor="username"
                >
                  Subject:
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                  type="text"
                  placeholder="Enter the subject"
                  name="subject"
                  value={TARequirement.subject}
                  onChange={onChange}
                />
              </div>
              <div className="mb-1">
                <label
                  className="block text-gray-700 mb-1 text-sm"
                  htmlFor="username"
                >
                  Number of vacancy:
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="number_of_vacancy"
                  type="number_of_vacancy"
                  placeholder="Number of TA required"
                  name="number_of_vacancy"
                  value={TARequirement.number_of_vacancy}
                  onChange={onChange}
                />
              </div>
              <div className="mb-1">
                <label
                  className="block text-gray-700 mb-1 text-sm"
                  htmlFor="username"
                >
                  Elligibilty
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="eligibility"
                  type="text"
                  placeholder="Enter the eligibility"
                  name="eligibility"
                  value={TARequirement.eligibility}
                  onChange={onChange}
                />
              </div>
              <div className="mb-1">
                <label
                  className="block text-gray-700 mb-1 text-sm"
                  htmlFor="username"
                >
                  Remarks:
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="remarks"
                  type="text"
                  placeholder="Enter some remarks"
                  name="remarks"
                  value={TARequirement.remarks}
                  onChange={onChange}
                />
              </div>
              <div className="mb-1">
                <label
                  className="block text-gray-700 mb-1 text-sm"
                  htmlFor="username"
                >
                  Minimum grade:
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="minimum_grade"
                  type="minimum_grade"
                  placeholder="Enter your grade"
                  name="minimum_grade"
                  value={TARequirement.minimum_grade}
                  onChange={onChange}
                />
              </div>
              <div className="mb-1">
                <label
                  className="block text-gray-700 mb-1 text-sm"
                  htmlFor="username"
                >
                  Status:
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="status"
                  type="text"
                  placeholder="Active/Inactive"
                  name="status"
                  value={TARequirement.status}
                  onChange={onChange}
                />
              </div>
              <div className="mb-1">
                <label
                  className="block text-gray-700 mb-1 text-sm"
                  htmlFor="username"
                >
                  Semester:
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="semester"
                  type="semester"
                  placeholder=" Enter your current semester"
                  name="semester"
                  value={TARequirement.semester}
                  onChange={onChange}
                />
              </div>
              <div className="mb-1">
                <label
                  className="block text-gray-700 mb-1 text-sm"
                  htmlFor="username"
                >
                  Current registered:
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="current_registered"
                  type="current_registered"
                  placeholder=" Enter current registered"
                  name="current_registered"
                  value={TARequirement.current_registered}
                  onChange={onChange}
                />
              </div>
              <div className="mb-1">
                <label
                  className="block text-gray-700 mb-1 text-sm"
                  htmlFor="username"
                >
                  Deadline:
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
  );
}
