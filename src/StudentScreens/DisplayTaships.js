import React, { useState } from "react";
import StudentFormTA from "./StudentFormTA";

export default function DisplayTaships(props) {
  const [show, setShow] = useState(false);
  
  return (
    <div>
      <div className="flex items-center shadow-lg shadow-black  bg-white bg-opacity-25  rounded-20 m-4">
        <div className="flex flex-row">
          <div className="px-4 py-2 m-2">
            <div className="text-sm"> Subject: {props.e.subject}</div>
          </div>
          <div className="px-4 py-2 m-2">
            <div className="text-sm ">Number of vacancy: {props.e.number_of_vacancy}</div>
          </div>
          <div className="px-4 py-2 m-2">
            <div className="text-sm ">Elligibility: {props.e.eligibility}</div>
          </div>
          <div className="px-4 py-2 m-2">
            <div className="text-sm ">
              Minimum grade: {props.e.minimum_grade}
            </div>
          </div>
          <div className="px-4 py-2 m-2">
            <div className="text-sm ">Semester: {props.e.semester}</div>
          </div>
          <div className="px-4 py-2 m-2">
            <div className="text-sm ">
              Current registered: {props.e.current_registered}
            </div>
          </div>
          <div className="px-4 py-2 m-2">
            <div className="text-sm ">Status: {props.e.status}</div>
          </div>
          <div className="px-4 py-2 m-2">
            <div className="text-sm ">Remarks: {props.e.remarks}</div>
          </div>
          <div className="px-4 py-2 m-2">
            <div className="text-sm ">Deadline : {props.e.deadline}</div>
          </div>
          <div className="px-4 py-2 m-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semi justify-end rounded-lg w-40 h-10"
              onClick={() => setShow(true)}
            >
              Apply
            </button>
            {show === true && <StudentFormTA onClose={setShow} show={show} />}
          </div>
        </div>
      </div>
    </div>
  );
}
