import React,{useState, useEffect} from 'react'
import axios from "axios"
import StudentFormTA from '../StudentScreens/StudentFormTA';
import TARequirements from './TARequirements';
import { CircularProgress } from "@mui/material";
import Swal from 'sweetalert2';
import TaVacancyDisplayData from './TaVacancyDisplayData';

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
      const [show1, setShow1] = useState(false);
      const[modalData,setModalData]=useState({})
      const[modalData1,setModalData1]=useState({})
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
                // console.log("TA vacancy list",TaVacancyList);
                setIsLoading(false);


              } catch (error) {
                setIsLoading(false);
                setIsError(error.message);
              }
        })();
      }, []);
   
    const submithandler =()=>{
        console.log(TaVacancyList);
    }

 const deleteTAVacancy=async(ta_vac_id)=> {
    console.log(ta_vac_id)
    try {
      const res = await axios.get(
        "https://2geop6r76a.execute-api.ap-south-1.amazonaws.com/dev/ta_vacancy/delete_ta_vacancy/"+ta_vac_id,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      
      return Swal.fire({
        title: 'Success!',
        text: 'TA Vacancy has been deleted successfully.',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      }).then((result) => {
        window.location.reload(true);
       });
    }
     catch (error) {
      
      return Swal.fire({
        title: 'Success Failed!',
        text: error,
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
        
      }).then((result) => {
       window.location.reload(true);
      });
    }    
 }


  return (

    <div className="overflow-auto" style={{ height: "90vh" }}>
      { 
      
                (show===true) && 
                <div>
                <TARequirements show={show} onClose={setShow} value={1} data={modalData}/>
                </div>

             }

            {
               (show1===true) && 
               <div>
               <TaVacancyDisplayData show={show} onClose={setShow1} data={modalData}/>
               </div>
            }
         
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
        {
          (isLoading===false)?(<tbody className=" divide-y divide-gray-200">
          {
          (TaVacancyList) && TaVacancyList.map((item ,index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap  bg-white bg-opacity-25">
                {item.subject}
              </td>
              <td className="px-6 py-4 whitespace-nowrap  bg-white bg-opacity-25">
                {item.number_of_vacancy}
              </td>
             
              <td className="px-6 py-4 whitespace-wrap  bg-white bg-opacity-25">
                {item.minimum_grade}
              </td>
              <td className="px-6 py-4 whitespace-nowrap  bg-white bg-opacity-25">
                {item.semester}
              </td>
             
              <td className="px-6 py-4 whitespace-nowrap  bg-white bg-opacity-25">
                {item.current_registered}
              </td>
              
              <td className="px-6 py-4 whitespace-nowrap  bg-white bg-opacity-25">
                {new Date(item.deadline).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).replace(/(\d+)(st|nd|rd|th)/, "$1")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap  bg-white bg-opacity-25">
           
           
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semi  ml-1 py-2 px-4 rounded-lg"
                onClick={() => {
                setShow(true);
                setModalData(item)
                }}
                 >
                Edit
             </button>
             <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semi  ml-1 py-2 px-4 rounded-lg "
                onClick={() => {
                setShow1(true);
                setModalData(item)
                }}
                 >
                View
             </button>
             <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semi  ml-1 py-2 px-4 rounded-lg"
                onClick={() => {
                deleteTAVacancy(item.ta_vac_id)
                
                }}
                 >
                Delete
             </button>
             
               
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
