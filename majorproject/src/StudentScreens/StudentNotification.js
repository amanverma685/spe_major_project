import React, { useState, useEffect } from "react";
import "./TAData";
import DisplayTaships from "./DisplayTaships";
import StudentFormTA from "./StudentFormTA";
import { CircularProgress } from "@mui/material";

import axios from "axios";

export default function () {
  const [taShip, settaShip] = useState(null);
  const [iserror, setIsError] = useState("");
  const token = sessionStorage.getItem("token");
  const [show, setShow] = useState(false);
  const [isLoading,setIsLoading]= useState(true)


  useEffect(() => {

    getTaship();


    // async function fetchData() {
    //   await getTaship();
    // }
    // fetchData();
  }, []);

  const getTaship = async () => {
    try {
      setIsLoading(true);

      const res = await axios.get(
        "https://2geop6r76a.execute-api.ap-south-1.amazonaws.com/dev/ta_vacancy/get_ta_vacancy_list",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      const taData = res.data.responseData;
      // console.log(taData)
      settaShip(taData);
      //  console.log(res.data)
      // console.log(taShip);
      setIsLoading(false);

    } catch (error) {
      setIsLoading(false);

      setIsError(error.message);
    }
  };

  return (
    // <div>
    //      <div className='overflow-auto' style={{height:'90vh'}}>
    //         <h1 className='font-semibold  text-center m-3'>   TAship requirement</h1>
    //         <div className='my-3'>
    //           {/* {console.log(taShip)} */}
    //             {taShip && taShip.map((e, i) => {
    //                 return <DisplayTaships e={e} key={i} />
    //             })}
    //         </div>
    //     </div>
    // </div>
    <div className="overflow-auto" style={{ height: "90vh" }}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Subject
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Number of Vacancy
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Elligibity
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Minimum Grade
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Semester
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Remarks
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Current registered
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Deadline
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            ></th>
          </tr>
        </thead>
        
        <>
        {
        (isLoading===false)?(
          <tbody className=" divide-y divide-gray-200">
          {taShip && taShip.map((item,index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap  bg-white bg-opacity-25">
                {item.subject}
              </td>
              <td className="px-6 py-4 whitespace-nowrap  bg-white bg-opacity-25">
                {item.number_of_vacancy}
              </td>
              <td className="px-6 py-4 whitespace-wrap  bg-white bg-opacity-25">
                {item.eligibility}
              </td>
              <td className="px-6 py-4 whitespace-nowrap  bg-white bg-opacity-25">
                {item.minimum_grade}
              </td>
              <td className="px-6 py-4 whitespace-nowrap  bg-white bg-opacity-25">
                {item.semester}
              </td>
              <td className="px-6 py-4 whitespace-wrap  bg-white bg-opacity-25">
                {item.remarks}
              </td>
              <td className="px-6 py-4 whitespace-nowrap  bg-white bg-opacity-25">
                {item.current_registered}
              </td>
              <td className="px-6 py-4 whitespace-nowrap  bg-white bg-opacity-25">
                {item.status}
              </td>
              <td className="px-6 py-4 whitespace-nowrap  bg-white bg-opacity-25">
              {new Date(item.deadline).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).replace(/(\d+)(st|nd|rd|th)/, "$1")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap  bg-white bg-opacity-25">
                {/* <div className="px-4 py-2 m-2"> */}
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semi justify-end rounded-lg w-40 h-10"
                  onClick={() => setShow(true)}
                >
                  Apply
                </button>
                {/* {console.log("TAship",item)} */}
                {/* {console.log("TAship",item)}
                <StudentFormTA onClose={setShow} data={item} show={show} /> */}
                {show === true && (
                  
                  <StudentFormTA onClose={setShow} data={item} show={show}  key={index}/>
                )}
                {/* </div> */}
              </td>
            </tr>
          ))}
        </tbody>
        ):(
          <tbody>
            <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        ><h1>Please Wait....</h1>
          <CircularProgress size={60} color="secondary" />
        </div>
          </tbody>
        )
}</>
      </table>
    </div>
  );
}
