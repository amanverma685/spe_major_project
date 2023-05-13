import React, { useState } from "react";
import axios from "axios"
import Swal from "sweetalert2";

export default function StudentDetails(props) {
  const { onClose, show, id, name, value } = { ...props };
  const [isDisabled, setIsDisabled] = useState(true);

  console.log("Status before accepting",props.data)

  const handleaccept = async (e) => {
    props.data.request_status="accepted"
    // console.log("Status after accepting",props.data)
    const token = sessionStorage.getItem("token");

    const submitdata ={
      request_status: props.data.request_status,
      student_request_id: props.data.student_request_id,
      ta_vac_id:props.data.ta_vac_id
  }
  console.log("submit data",submitdata)
    await axios
      .post(
        `https://tqbbiw97m1.execute-api.ap-south-1.amazonaws.com/dev/accept_reject_by_professor/accpet_reject`,
        submitdata,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )

       

      .then((res) => {
        // console.log(res.data);
        console.log("Student accepted for TAship successfull")
        // window.location.reload(true);
      })
      .catch((err) => console.log(err));
      return Swal.fire({
        title: 'Success!',
        text: 'Student accepted for TAship successfull.',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      
      }).then((result) => {
        if (result.isConfirmed) {
          // Handle confirm button click
          onClose(false)
          window.location.reload(true);
          
        } 
        });
  };
  const handlereject = async() => {
    props.data.request_status="rejected"
    // console.log("Status after accepting",props.data)
    const token = sessionStorage.getItem("token");
  

    const submitdata ={
        request_status: props.data.request_status,
        student_request_id: props.data.student_request_id,
        ta_vac_id:props.data.ta_vac_id
    }
    console.log("submit data",submitdata)
    await axios
      .post(
        `https://tqbbiw97m1.execute-api.ap-south-1.amazonaws.com/dev/accept_reject_by_professor/accpet_reject`,
        submitdata,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        // console.log(res.data);
        console.log("Student rejected for TAship ")
      })
      .catch((err) => console.log(err));
      return Swal.fire({
        title: 'Rejected!',
        text: 'Student rejected for TAship ',
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      
      }).then((result) => {
        if (result.isConfirmed) {
          onClose(false)
          
        } 
        });
  };
  
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="p-6">
            <h4 className="text-2xl justify-center font-bold mb-4 text-black   ">
              Student Details
            </h4>
            <div className="px-4 py-1 m-1 flex-1">
          <div className="text-sm ">Roll Number: {props.data.roll_number}</div>
        </div>
        <div className="px-4 py-1 m-1 flex-2">
          <div className="text-sm">
            Name: {props.data.fname + " " + props.data.mname + " " + props.data.lname}
          </div>
        </div>
        <div className="px-4 py-1 m-1 flex-1">
          <div className="text-sm">Grade: {props.data.previous_grade}</div>
        </div>
        <div className="px-4 py-1 m-1 flex-1">
          <div className="text-sm">Email: {props.data.email}</div>
        </div>
        <div className="px-4 py-1 m-1 flex-1">
          <div className="text-sm">Subject: {props.data.subject_name}</div>
        </div>
     
        <div className="px-4 py-1 m-1 flex-1">
          <div className="text-sm">Course: {props.data.current_course}</div>
        </div>
        <div className="px-4 py-1 m-1 flex-1">
          <div className="text-sm">Semester: {props.data.current_sem}</div>
        </div>
        <div className="px-4 py-1 m-1 flex-1">
          <div className="text-sm">Experience: {props.data.experience}</div>
        </div>
        <div className="px-4 py-1 m-1 flex-1">
          <div className="text-sm">Why applied for the TAship: {props.data.why_applied}</div>
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



