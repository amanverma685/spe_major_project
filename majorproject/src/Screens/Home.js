import React, { useState,useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import AddIcon from "@mui/icons-material/Add";
import TARequirements from "./TARequirements";
import axios from 'axios'

function Home(props) {
  const [show, setShow] = useState(false);
  const [userData,setUserData]=useState(props.data);

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
  return (
      <div className="container h-90% w-90% ">
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
              20
            </h2>
          </div>
        </div>
        <div className=" max-w-md mx-auto bg-pink-200 rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-black font-semibold">
              Number of accepted request
            </div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black ">
              20
            </h2>
          </div>
        </div>
        <div className=" max-w-md mx-auto bg-pink-200 rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-black font-semibold">
              Number of rejected request
            </div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black ">
              20
            </h2>
          </div>
        </div>
      </div>
      <div className=" mt-4 mb-11">
        <Line data={data} options={options} />
      </div>
      <div className="absolute bottom-3 right-3">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full "
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
