import React, { useEffect, useState } from "react";
import axios from "axios";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function StudentHome() {
  const [iserror, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [studentData, setStudentData] = useState("");
  const [subject,setSubject]=useState("");
  useEffect(() => {
    getUserDetails();
    // getSubject();
  }, []);

  const token = sessionStorage.getItem("token");
  // const getSubject= async () => {
  //   try {
  //     setIsLoading(true);
  //     const res = await axios.get(
  //       ``,
  //       {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       }
  //     );

  //     const taData = res.data;
  //     setSubject(res.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setIsError(error.message);
  //     setIsLoading(false);
  //   }
  // };
 
  const getUserDetails = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://03wi9io086.execute-api.ap-south-1.amazonaws.com/dev/user_details/get_user`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      const taData = res.data.responseData;
      //   console.log("userdata", taData);
      setStudentData(res.data.responseData);
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message);
      setIsLoading(false);
    }
  };
  const subjects = ["SPE", "ESD", "SS"];

  return (
    <div className="container overflow-auto">
      <div className="bg-blue-100 p-8 h-full">
        <h1 className="text-3xl font-bold mb-4">
          Welcome back, {studentData.fname}!
        </h1>
        <div className=" flex flex-row ml-3 mb-3">
          <div >
            <div className="max-w-md mx-auto bg-pink-200 rounded-xl shadow-md overflow-hidden ">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-black font-semibold">
                  Number of TA ship applied
                </div>
                <h2 className="block mt-1 text-lg leading-tight  justify-center font-medium text-black ">
                  4
                </h2>
              </div>
            </div>
            
          </div>
          <div className="ml-10">
            <div className="max-w-md mx-auto bg-pink-200 rounded-xl shadow-md overflow-hidden ">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-black font-semibold">
                  Number of accepted request
                </div>
                <h2 className="block mt-1 text-lg leading-tight  justify-center font-medium text-black ">
                  2
                </h2>
              </div>
            </div>
            
          </div>
        </div>

        <div >
  <h2 class="text-xl mb-6 ml-4">List of subjects for which you are selected as a TA</h2>
  <div class="max-w-2xl mx-auto">
    <ul class="list-disc pl-6">
      {subjects.map((subject) => (
          <li key={subject} class="text-lg">{subject}</li>
      ))}
    </ul>
  </div>
</div>

      </div>
      
    </div>
  );
}
