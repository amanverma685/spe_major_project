import React from "react";
import Home from "./Screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewProject from "./Screens/ViewProject";
import AddProject from "./Screens/AddProject";
import Navbar from "./Components/Navbar";
import Registration from "./Screens/Registration";
import NewLogin from "./Screens/NewLogin";
function App() {
  return (
    // <Authenticator>
    // {({ signOut, user }) => {
    //   console.log(user);
    //   return(
    //     <main>  
    //    {/* <div className="App flex-1 flex"> */}
    //    <div style={{display:'flex', flexDirection: 'row'}}>
    //    <div className="flex-1" >
    //    <SideNavBar signOut={signOut}/>
    //    </div>
    //    <div className="flex-2" >
    //      <Routes>
    //      {/* <Route path="/" element={<Login/>}/> */}
    //      <Route path="/Login" element={<NewLogin/>} />
    //      <Route path="/Home" element={<Home />} />
    //      <Route path="/ViewProject" element={<ViewProject />} />
    //      <Route path="/AddProject" element={<AddProject />} />
    //    </Routes>
    //    </div>
    //  </div>
    //     </main>
    //   )
    // }}
    // </Authenticator>
    <div className="App flex flex-row">
      <div >
        <Navbar/>
      </div>
      <div style={{height:"100vh"}}>
        <Routes>
        {/* <Route path="/" element={<Login/>}/> */}
        <Route path="/Login" element={<NewLogin/>} />
        <Route path="/Registration" element={<Registration/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ViewProject" element={<ViewProject />} />
        <Route path="/AddProject" element={<AddProject />} />
      </Routes>
      </div>
    </div>
 
  );
}

export default App;
