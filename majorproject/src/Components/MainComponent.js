import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Screens/Home";
import ViewProject from "../Screens/ViewProject";
import AddProject from "../Screens/AddProject";
import Registration from "../Screens/Registration";
import StudentNotification from "../StudentScreens/StudentNotification";
import SideNavBar from "./SideNavBar";


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
            <Route path="/Home" element={<Home />} />
            <Route path="/ViewProject" element={<ViewProject />} />
            <Route path="/AddProject" element={<AddProject />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/TAForm" element={<StudentNotification />} />
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default MainComponent;
