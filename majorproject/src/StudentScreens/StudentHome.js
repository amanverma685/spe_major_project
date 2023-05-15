import React, { useEffect, useState } from "react";
import axios from "axios";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

export default function StudentHome() {
  const [iserror, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [studentData, setStudentData] = useState("");
  const [subject, setSubject] = useState("");
  const [dashboardData, setDashboardData] = useState("");
  useEffect(() => {
    getUserDetails();
    getSubject();
    getDashboardData();
  }, []);

  const token = sessionStorage.getItem("token");
  const getSubject = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://03wi9io086.execute-api.ap-south-1.amazonaws.com/dev/user_details/get_assigned_subjects `,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      const taData = res?.data;
      // {console.log("subject",taData.responseData)}
      setSubject(res.data.responseData);
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message);
      setIsLoading(false);
    }
  };

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
      console.log("userdata", taData);
      setStudentData(res.data.responseData);
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message);
      setIsLoading(false);
    }
  };
  const getDashboardData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://b1upqyjnvk.execute-api.ap-south-1.amazonaws.com/dev/ta_management_metrics/student_dashboard_metrics`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      const taData = res.data.responseData;
      console.log("DashboardData", taData);
      setDashboardData(res.data.responseData);
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message);
      setIsLoading(false);
    }
  };


  return (
    <div className="container overflow-auto">
      <div className="bg-blue-100 p-8 h-full">
        <h2 className="text-3xl font-bold mb-4">
          Welcome back, {studentData.fname}{" "}
          <SentimentSatisfiedAltIcon/>
        </h2>
        <div className="flex flex-row">
          <div className=" flex-1">
            <img
              src="https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
              alt="Image description"
              className="h-32 w-32 rounded-full relative left-24"
            />
            <div className=" font-semibold text-lg m-12">
            <p className="m-1">Roll Number: {studentData.roll_number}</p>
              <p className="m-1">Name: {studentData.fname + " " +studentData.mname+" "+ studentData.lname}</p>
              <p className="m-1">Course: {studentData.current_course}</p>
              <p className="m-1">Email: {studentData.email}</p>
              <p className="m-1">Contact Number: {studentData.mobile_number}</p>
           
            </div>
          </div>
          <div className=" flex-1">
            <div>
              <div className="max-w-md mx-auto bg-pink-200 rounded-xl shadow-md overflow-hidden mb-3">
                <div className="p-4 uppercase tracking-wide text-sm text-black font-semibold">
                  Number of TA ship applied
                  <h2 className="block mt-1 text-sm leading-tight  justify-center font-medium text-black ">
                    {dashboardData.pending}
                  </h2>
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-pink-200 rounded-xl shadow-md overflow-hidden mb-3">
              <div className="p-4 uppercase tracking-wide text-sm text-black font-semibold">
                Number of accepted request
                <h2 className="block mt-1 text-sm leading-tight  justify-center font-medium text-black ">
                  {dashboardData.accepted}
                </h2>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-pink-200 rounded-xl shadow-md overflow-hidden mb-3">
              <div className="p-4 uppercase tracking-wide text-sm text-black font-semibold">
                Number of TA ship applied
                <h2 className="block mt-1 text-sm leading-tight  justify-center font-medium text-black ">
                  {dashboardData.rejected}
                </h2>
              </div>
            </div>

            <div>
              <h2 className="text-lg mb-1 ml-2">
                List of subjects for which you are selected as a TA
              </h2>
              <div className="max-w-2xl mx-auto">
                {/* {console.log("subject",subject)} */}
                <ul className="list-disc pl-6">
                  {subject.length === 0 ? (
                    <div className=" font-bold text-sm ">
                      You are not selected for any subject{" "}
                      <SentimentVeryDissatisfiedIcon/>
                    </div>
                  ) : (
                    subject?.map((subject) => (
                      <li key={subject} className="text-lg">
                        {subject}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
