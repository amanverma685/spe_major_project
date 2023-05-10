import React,{useState, useEffect} from 'react'
import axios from "axios"
import StudentFormTA from '../StudentScreens/StudentFormTA';
import TARequirements from './TARequirements';
import { CircularProgress } from "@mui/material";

export default function TaVacancyList() {
    const [TARequirement, setTArequirement] = useState({
        subject: "",
        number_of_vacancy:0,
        eligibility: "",
        deadline: "",
        minimum_grade:0,
        semester: 0,
        remarks: "",
        current_registered: "",
        status: "",
      });

      const [isLoading,setIsLoading]= useState(true)
      const [TaVacancyList, setTaVacancyList] = useState([]);
      const [iserror, setIsError] = useState("");
      const token = sessionStorage.getItem("token");
      const [show, setShow] = useState(false);
    //   const [refresh,setRefresh] = useState(false);
    
      useEffect(() => {
        // get_ta_vacancy_list();
        (async()=>{
            try {
              setIsLoading(true);
                const res = await axios.get(
                  "https://2geop6r76a.execute-api.ap-south-1.amazonaws.com/dev/ta_vacancy/get_ta_vacancy_list_by_user_id",
                  {
                    headers: {
                      Authorization: "Bearer " + token,
                    },
                  }
                );
          
                const taData = res.data.responseData;
                

                console.log("TA vacancy data" ,taData)

                setTaVacancyList(taData);

                // setRefresh((pv) => {
                //     return !pv;
                // })
                //  console.log(res.data)
                console.log("TA vacancy list",TaVacancyList);
                setIsLoading(false);


              } catch (error) {
                setIsLoading(false);
                setIsError(error.message);
              }
        })();
      }, []);
    // useEffect(() => {
    //     getTaship();
    //     // async function fetchData() {
    //     //   await getTaship();
    //     // }
    //     // fetchData();
    //   }, []);
    
    //   const get_ta_vacancy_list = async () => {
       
    //         try {
    //           const res = await axios.get(
    //             "https://2geop6r76a.execute-api.ap-south-1.amazonaws.com/dev/ta_vacancy/get_ta_vacancy_list",
    //             {
    //               headers: {
    //                 Authorization: "Bearer " + token,
    //               },
    //             }
    //           );
        
    //           const taData = res.data.responseData;
    //           // console.log(taData)
    //           settaShip(taData);
    //           //  console.log(res.data)
    //           console.log(taShip);
    //         } catch (error) {
    //           setIsError(error.message);
    //         }
          
        
    //   };

    const submithandler =()=>{
        console.log(TaVacancyList);
    }

  return (
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
          (isLoading===false)?(<tbody className=" divide-y divide-gray-200">
          {(TaVacancyList) && TaVacancyList.map((item ,index) => (
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
              <td className="px-6 py-4 whitespace-wrap  bg-white bg-opacity-25">
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
           
           
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white  py-2 px-4 rounded-full "
                onClick={() => {
                setShow(true);
                }}
                 >
                Edit
             </button>
             {
                (show===true) && <TARequirements show={show} onClose={setShow} value={1}/>

             }
               
              </td>
            </tr>
          ))}
        </tbody>):(
        <tbody><div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        ><h1>Please Wait....</h1>
          <CircularProgress size={60} color="secondary" />
        </div>
        </tbody>)
        }
        </>
      </table>
    </div>
  )
}
