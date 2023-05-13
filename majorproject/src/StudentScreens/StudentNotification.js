import React, { useState, useEffect } from "react";
import "./TAData";
import DisplayTaships from "./DisplayTaships";
import StudentFormTA from "./StudentFormTA";
import { CircularProgress } from "@mui/material";

import axios from "axios";
import TaVacancyDisplayData from "../Screens/TaVacancyDisplayData";

export default function () {
  const [taShip, settaShip] = useState(null);
  const [iserror, setIsError] = useState("");
  const token = sessionStorage.getItem("token");
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [modalData, setModalData] = useState({});
  const [show1, setShow1] = useState(false);

  const [modalData1, setModalData1] = useState({});

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
    <div className="overflow-auto">
      {/* Modal */}
      {show === true && (
        <div>
          <StudentFormTA onClose={setShow} data={modalData} show={show} />
        </div>
      )}
      {show1 === true && (
        <div>
          <TaVacancyDisplayData
            show={show}
            onClose={setShow1}
            data={modalData}
          />
        </div>
      )}
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
              Current registered
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
          {isLoading === false ? (
            <tbody className=" divide-y divide-gray-200">
              {taShip?.map((item, index) => {
                return (
                  <>
                    <tr key={item.ta_vac_id}>
                      <td className="px-6 py-4 whitespace-nowrap  bg-white bg-opacity-25">
                        {item.subject}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap  bg-white bg-opacity-25">
                        {item.number_of_vacancy}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap  bg-white bg-opacity-25">
                        {item.minimum_grade}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap  bg-white bg-opacity-25">
                        {item.semester}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap  bg-white bg-opacity-25">
                        {item.current_registered}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap  bg-white bg-opacity-25">
                        {new Date(item.deadline)
                          .toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })
                          .replace(/(\d+)(st|nd|rd|th)/, "$1")}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap  bg-white bg-opacity-25">
                        <button
                          className="bg-blue-500 hover:bg-blue-600 text-white font-semi  ml-1 py-2 px-4 rounded-lg "
                          onClick={() => {
                            setShow1(true);
                            setModalData(item);
                          }}
                        >
                          View
                        </button>
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-semi  ml-1 py-2 px-4 rounded-lg "
                          onClick={() => {
                            setModalData(item);
                            setShow(true);
                          }}
                        >
                          Apply
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          ) : (
            <tbody>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h1>Please Wait....</h1>
                <CircularProgress size={60} color="secondary" />
              </div>
            </tbody>
          )}
        </>
      </table>
    </div>
  );
}
