import React from "react";
import Home from "./Screens/Home";
import { Route, Routes } from "react-router-dom";
import ViewProject from "./Screens/ViewProject";
import AddProject from "./Screens/AddProject";
import Registration from "./Screens/Registration";
import { Authenticator } from "@aws-amplify/ui-react";
import SideNavBar from "./Components/SideNavBar";
import Login   from "./Screens/Login";

function App() {
  return (
    <Authenticator>
    {({ signOut, user }) => {
      console.log(user);
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
