import React, { useState,useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import AddIcon from "@mui/icons-material/Add";
import TARequirements from "./TARequirements";
import axios from 'axios'

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
    title: {
      display: true,
      text: "number of request/month",
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
      <div className="container ">
        <div className="flex-row ml-3 mb-3">
          <text className="font-bold text-3xl ">Welcome Back, <text className="font-bold text-2xl text-gray-700" >{userData.fname}</text></text>
        </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="max-w-md mx-auto bg-pink-200 rounded-xl shadow-md overflow-hidden ">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-black font-semibold">
              Number of request received
            </div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black ">
              {cardData?.pending}
            </h2>
          </div>
        </div>
        <div className=" max-w-md mx-auto bg-pink-200 rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-black font-semibold">
              Number of accepted request
            </div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black ">
              {cardData?.accepted}
            </h2>
          </div>
        </div>
        <div className=" max-w-md mx-auto bg-pink-200 rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-black font-semibold">
              Number of rejected request
            </div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black ">
              {cardData?.rejected}
            </h2>
          </div>
        </div>
      </div>
      <div className=" mt-4 mb-11 h-1/2  w-5/6">
        <Line data={data} options={options} />
      </div>
      <div className="absolute bottom-3 right-3">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semi  ml-1 py-2 px-4 rounded-lg"
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
  );
}

export default Home;
