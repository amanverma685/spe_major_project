import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Screens/Home";
import ViewProject from "../Screens/ViewProject";
import AddProject from "../Screens/AddProject";
import Registration from "../Screens/Registration";
import StudentNotification from "../StudentScreens/StudentNotification";
import SideNavBar from "./SideNavBar";
import TaVacancyList from "../Screens/TaVacancyList";


const MainComponent = ({signout}) => {
  return (
    <main>
      <div className="flex flex-row">
        <div>
          <SideNavBar signOut={signout} />
        </div>

        <div className="flex-1">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/viewproject" element={<ViewProject />} />
            <Route path="/addproject" element={<AddProject />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/taform" element={<StudentNotification />} />
            <Route path="/tavacancylist" element={<TaVacancyList />} />
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default MainComponent;
