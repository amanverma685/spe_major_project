import React, { useState,useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import AddIcon from "@mui/icons-material/Add";
import TARequirements from "./TARequirements";
import axios from 'axios'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

function Home(props) {
  const [show, setShow] = useState(false);
  const [userData,setUserData]=useState(props.data);
  const token=sessionStorage.getItem("token");

  const[cardData,setCardData]=useState("")
  

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Number of requests received",
        data: [3, 2, 2, 4, 1],
      },
      {
        label: "Number of accepted received",
        data: [1, 2, 1, 4, 1],
      },
    ],
  };
  const options = {
    
    scales: {
      y: {
        title: {
          display: true,
          text: "Number of request",
        },
        min: 0,
        max: 15,
      },
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
    },
  };


  useEffect(() => {
    getData()
  }, [])
  
const getData = async()=>{

  try {
    const res = await axios.get(
      "https://b1upqyjnvk.execute-api.ap-south-1.amazonaws.com/dev/ta_management_metrics/professor_dashboard_metrics",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    ); 
    console.log(res.data.responseData);
    setCardData(res.data.responseData);
  }  
  catch (err){
console.log(err)
  } 

}
  return (
    
    //   <div className="container ">
    //     {console.log(props)}
    //     <div className="flex-row ml-3 mb-3">
    //       <text className="font-bold text-3xl ">Welcome Back, <text className="font-bold text-2xl text-gray-700" >{userData.fname} <SentimentSatisfiedAltIcon></SentimentSatisfiedAltIcon></text></text>
    //     </div>
    //   <div className="grid grid-cols-3 gap-4">
    //     <div className="max-w-md mx-auto bg-pink-200 rounded-xl shadow-md overflow-hidden ">
    //       <div className="p-8">
    //         <div className="uppercase tracking-wide text-sm text-black font-semibold">
    //           Number of request received
    //         </div>
    //         <h2 className="block mt-1 text-lg leading-tight font-medium text-black ">
    //           {cardData?.pending}
    //         </h2>
    //       </div>
    //     </div>
    //     <div className=" max-w-md mx-auto bg-pink-200 rounded-xl shadow-md overflow-hidden">
    //       <div className="p-8">
    //         <div className="uppercase tracking-wide text-sm text-black font-semibold">
    //           Number of accepted request
    //         </div>
    //         <h2 className="block mt-1 text-lg leading-tight font-medium text-black ">
    //           {cardData?.accepted}
    //         </h2>
    //       </div>
    //     </div>
    //     <div className=" max-w-md mx-auto bg-pink-200 rounded-xl shadow-md overflow-hidden">
    //       <div className="p-8">
    //         <div className="uppercase tracking-wide text-sm text-black font-semibold">
    //           Number of rejected request
    //         </div>
    //         <h2 className="block mt-1 text-lg leading-tight font-medium text-black ">
    //           {cardData?.rejected}
    //         </h2>
    //       </div>
    //     </div>
    //   </div>
    //   <div className=" mt-4 mb-11 h-1/2  w-5/6">
    //     <Line data={data} options={options} />
    //   </div>
    //   <div className="absolute bottom-3 right-3">
    //     <button
    //       className="bg-blue-500 hover:bg-blue-600 text-white font-semi  ml-1 py-2 px-4  mb-8 mr-8 rounded-lg"
    //       onClick={() => {
    //         setShow(true);
    //       }}
    //     >
    //       <AddIcon /> TA requirements
    //     </button>
    //     {
    //       (show===true) && <TARequirements show={show} onClose={setShow} value={0}/>

    //     }
    //   </div>
    // </div>

    <div className="container overflow-auto">
      {console.log(props)}
      <div className="bg-blue-100 p-8 h-full">
        <h2 className="text-3xl font-bold mb-4">
          Welcome back, {props.data.fname}{" "}
          <SentimentSatisfiedAltIcon/>
        </h2>
        <div className="flex flex-row">
          <div className=" flex-1">
            <img
              src="https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg"
              alt="Image description"
              className="h-32 w-40 rounded-full relative left-24"
            />
            <div className=" font-semibold text-lg m-12">
             {/* <p className="m-1">Roll Number: {props.roll_number}</p>  */}
             {/* <ul className="list-disc pl-6">
                  {subject.length === 0 ? (
                    <div className=" font-bold text-sm ">
                      You are not selected for any subject{" "}
                      <SentimentVeryDissatisfiedIcon></SentimentVeryDissatisfiedIcon>
                    </div>
                  ) : (
                    subject?.map((subject) => (
                      <li key={subject} className="text-lg">
                        {subject}
                      </li>
                    )) */}
              <p className="m-1">Name: {props.data.fname + " " +props.data.mname+" "+ props.data.lname}</p>
              <p className="m-1">Email: {props.data.email}</p>
              <p className="m-1">Contact Number: {props.data.mobile_number}</p>
            </div>
          </div>
          <div className=" flex-1">
            <div>
              <div className="max-w-md mx-auto bg-pink-200 rounded-xl shadow-md overflow-hidden mb-3">
                <div className="p-4 uppercase tracking-wide text-sm text-black font-semibold">
                Number of request received
                  <h2 className="block mt-1 text-sm leading-tight  justify-center font-medium text-black ">
                    {cardData.pending}
                  </h2>
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-pink-200 rounded-xl shadow-md overflow-hidden mb-3">
              <div className="p-4 uppercase tracking-wide text-sm text-black font-semibold">
                Number of accepted request
                <h2 className="block mt-1 text-sm leading-tight  justify-center font-medium text-black ">
                  {cardData.accepted}
                </h2>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-pink-200 rounded-xl shadow-md overflow-hidden mb-3">
              <div className="p-4 uppercase tracking-wide text-sm text-black font-semibold">
              Number of rejected request
                <h2 className="block mt-1 text-sm leading-tight  justify-center font-medium text-black ">
                  {cardData.rejected}
                </h2>
              </div>
            </div>

            <div className="absolute bottom-3 right-3">
     <button  className="bg-blue-500 hover:bg-blue-600 text-white font-semi  ml-1 py-2 px-4  mb-8 mr-8 rounded-lg"
          onClick={() => {
           setShow(true);
         }}
       >
          <AddIcon /> TA requirements
       </button>
      {
        (show===true) && <TARequirements show={show} onClose={setShow} value={0}/>

       }
     </div>
          </div>
        </div>
      </div>
    </div>
  );
}

    


export default Home;
