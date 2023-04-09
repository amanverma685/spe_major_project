import React from "react";
import Home from "./Screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Screens/Login";
import ViewProject from "./Screens/ViewProject";
import AddProject from "./Screens/AddProject";
import SideNavBar from "./Components/SideNavBar";
import { Amplify } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./Screens/Configuration";
import Navbar from "./Components/Navbar";
import NewLogin from "./Screens/NewLogin";
import { blue } from "@mui/material/colors";
Amplify.configure(awsExports);

function App() {
  return (
    // <Authenticator>
    //   {({ signOut, user }) => (
    //         <>
    //           <SideNavBar signOut={signOut}/>
    //           <Routes>
    //             {/* <Route path="/" element={<Login/>}/> */}
    //             <Route path="/Home" element={<Home/>}/>
    //             <Route path="/ViewProject" element={<ViewProject/>}/>
    //             <Route path="/AddProject" element={<AddProject/>}/>
    //           </Routes>
    //         </>
    //   )}
    // </Authenticator>
    <Authenticator>
    {({ signOut, user }) => {
      console.log(user);
      return(
        <main>  
       {/* <div className="App flex-1 flex"> */}
       <div style={{display:'flex', flexDirection: 'row'}}>
       <div className="flex-1" >
       <SideNavBar signOut={signOut}/>
       </div>
       <div className="flex-2" >
         <Routes>
         {/* <Route path="/" element={<Login/>}/> */}
         <Route path="/Login" element={<NewLogin/>} />
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
    // <div className="App flex flex-row">
    //   <div >
    //     <Navbar/>
    //   </div>
    //   <div >
    //     <Routes>
    //     {/* <Route path="/" element={<Login/>}/> */}
    //     <Route path="/Login" element={<NewLogin/>} />
    //     <Route path="/Home" element={<Home />} />
    //     <Route path="/ViewProject" element={<ViewProject />} />
    //     <Route path="/AddProject" element={<AddProject />} />
    //   </Routes>
    //   </div>
    // </div>
    // <div>
    //   <NewLogin/>
    // </div>
  );
}

export default App;
