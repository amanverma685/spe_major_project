import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Screens/Home";
import ViewProject from "../Screens/ViewProject";
import TAShipRequestList from "../Screens/TAShipRequestList";
import Registration from "../Screens/Registration";
import StudentNotification from "../StudentScreens/StudentNotification";
import SideNavBar from "./SideNavBar";
import TaVacancyList from "../Screens/TaVacancyList";
import axios from "axios"
const MainComponent = ({ signout }) => {
  const [iserror, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [userType, setUserType] = useState("");

  useEffect(() => {
    getUserDetails();
  }, []);

  const token = sessionStorage.getItem("token");
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
      setUserType(taData?.user_type);
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <main>
      <div className="flex flex-row">
        <div>
          <SideNavBar signOut={signout} />
        </div>

        <div className="flex-1">
          <Routes>
            {userType === "student" ? (
              <Route path="/taform" element={<StudentNotification />} />
            ) : (
              <>
                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/viewproject" element={<ViewProject />} />
                <Route path="/tarequest" element={<TAShipRequestList />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/tavacancylist" element={<TaVacancyList />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default MainComponent;
