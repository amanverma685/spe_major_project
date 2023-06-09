import React, { useState, useEffect } from "react";
import SampleData from "../SampleData";
import DisplayCard from "./DisplayCard";
import axios from "axios";
import Swal from "sweetalert2";

function TAShipRequestList() {
  const [value, setvalue] = useState(0);

  const [requested, setRequested] = useState([]);

  useEffect(() => {
    // setRequested(SampleData)
    // console.log("Sample Data",SampleData)
    getListOfStudentRequestedForTA();
 
  }, []);

  let acceptedList = [];
  let rejectedList = [];
  let pendingList = [];
  const sortStudentData = () => {
    requested?.filter((request) => {
      if (request.request_status === "accepted") {
        acceptedList.push(request);
      } else if (request.request_status === "rejected") {
        rejectedList.push(request);
      } else if (request.request_status === "pending") {
        pendingList.push(request);
      }
    });
    // console.log("Pending list",pendingList)
    // console.log("Acceptedlist",acceptedList)
    // console.log("Rejected list",rejectedList)
  };

  const getListOfStudentRequestedForTA = async () => {
    const token = sessionStorage.getItem("token");
    // console.log(token);
    await axios
      .get(
        `https://qq83tpt61e.execute-api.ap-south-1.amazonaws.com/dev/ta_request/list_of_students_requested_for_ta`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )

      .then((res) => {
        // console.log("TA applied list",res.data);
        // console.log(res.data.responseData)
        setRequested(res.data.responseData);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        flex: 1,
      }}
    >
      {   
      sortStudentData()}
      <nav className="bg-gray-300 py-2">
        <ul className="flex justify-around">
          <li className="mx-4">
            &nbsp;&nbsp;&nbsp;
            <button
              className="btn btn-sm btn-outline-secondary"
              type="button"
              onClick={() => {
                setvalue(0);
              }}
            >
              Requested
            </button>
          </li>
          <li className="mx-4">
            <button
              className="btn btn-sm btn-outline-secondary"
              type="button"
              onClick={() => {
                setvalue(1);
              }}
            >
              Accepted
            </button>
          </li>
          <li className="mx-4">
            <button
              className="btn btn-sm btn-outline-secondary"
              type="button"
              onClick={() => {
                setvalue(2);
              }}
            >
              Rejected
            </button>
          </li>
        </ul>
      </nav>
      {value === 0 && (
        <>
          <div className="overflow-auto" style={{ height: "90vh" }}>
            <h1 className="font-semibold text-center m-3">
              {" "}
              List of student requested for TAship
            </h1>
            <div className="my-3">
             { console.log("Pending list",pendingList)}

              {pendingList?.map((e, i) => {
                return <DisplayCard e={e} key={i} value={0} />;
              })}
            </div>
          </div>
        </>
      )}
      {value === 1 && (
        <>
          <div className="overflow-auto" style={{ height: "90vh" }}>
            <h1 className="font-semibold text-center m-3">
              {" "}
              List of student accepted for TAship
            </h1>
            <div className="my-3">
              {console.log("Accepted list",acceptedList)}
              {acceptedList?.map((e, i) => {
                return <DisplayCard e={e} key={i} value={1} />;
              })}
            </div>
          </div>
        </>
      )}
      {value === 2 && (
        <>
          <div className="overflow-auto" style={{ height: "90vh" }}>
            <h1 className="font-semibold text-center m-3">
            {console.log("Rejected list",rejectedList)}
              List of student rejected for TAship
            </h1>
            <div className="my-3">
              {console.log("Rejected list",rejectedList)}
              {rejectedList?.map((e, i) => {
                return <DisplayCard e={e} key={i} value={2} />;
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TAShipRequestList;
