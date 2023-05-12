import React, { useState } from "react";
import StudentDetails from "./StudentDetails";

export default function DisplayCard(props) {
  const [show, setShow] = useState(false);
  const { onClose, value, id, name } = { ...props };

  return (
    <div className="flex items-center shadow-lg shadow-black bg-white bg-opacity-25  rounded-20 m-4">
      {/* <img className="w-10 h-10 rounded-full" src={props.e.url} alt="Rounded avatar"/> */}

      <div className="px-4 py-2 m-2 flex flex-row ">
        <div className="flex-1">
          <div className="text-sm ">Roll Number: {props.e.roll_number}</div>
        </div>
        <div className="px-4 py-2 m-2 flex-2">
          <div className="text-sm">
            Name: {props.e.fname + " " + props.e.mname + " " + props.e.lname}
          </div>
        </div>
        <div className="px-4 py-2 m-2 flex-1">
          <div className="text-sm">Grade: {props.e.previous_grade}</div>
        </div>
        <div className="px-4 py-2 m-2 flex-1">
          <div className="text-sm">Email: {props.e.email}</div>
        </div>
        <div className="px-4 py-2 m-2 flex-1">
          <div className="text-sm">Subject: {props.e.subject_name}</div>
        </div>
        {/* <div className="px-4 py-2 m-2">
      <div className="text-xl ">{props.e.achievements}</div>
      </div> */}
        <div className="px-4 py-2 m-2 flex-1">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white justify-end text-sm w-36 h-8
             rounded-lg  m-1"
            onClick={() => setShow(true)}
          >
            View Details
          </button>
          {show === true && (
            <StudentDetails
              onClose={setShow}
              show={show}
              // roll_number={props.e.roll_number}
              // name={props.e.name}
              // grade={props.e.subject}
              // achievements={props.e.achievements}
              // email={props.e.email}
              // value={value}
              data={props.e} value={value}
            />
          )}
        </div>
      </div>
    </div>
  );
}
