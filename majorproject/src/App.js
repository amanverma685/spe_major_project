import React from "react";
import Home from "./Screens/Home";
import { Route, Routes } from "react-router-dom";
import ViewProject from "./Screens/ViewProject";
import AddProject from "./Screens/AddProject";
import Registration from "./Screens/Registration";
import { Authenticator } from "@aws-amplify/ui-react";
import SideNavBar from "./Components/SideNavBar";
import Login   from "./Screens/Login";
import StudentFormTA from "./StudentScreens/StudentFormTA";
import DisplayTaships from "./StudentScreens/DisplayTaships";
import StudentNotification from "./StudentScreens/StudentNotification";
import axios from "axios";
function App() {
  return (
    <Authenticator>
    {({ signOut, user }) => {
      
      sessionStorage.setItem('token', user.signInUserSession.idToken.jwtToken);
      sessionStorage.setItem('user_id', user.attributes['custom:user_id']);
      sessionStorage.setItem('email', user.attributes['email']);
      return(
      <main>  
        <div className="flex flex-row">
          <div>
            <SideNavBar signOut={signOut}/>
          </div>
          
          <div className="flex-1">
            <Routes>
              {/* <Route path="/Login" element={<Login/>} /> */}
              <Route path="/Home" element={<Home />} />
              <Route path="/ViewProject" element={<ViewProject />} />
              <Route path="/AddProject" element={<AddProject />} />
              <Route path="/Registration" element={<Registration />} />
              <Route path='/TAForm' element={<StudentNotification/>}/>
            </Routes>
          </div>
        </div>
      </main>
      )
    }}
    </Authenticator>
  );
}

export default App;
