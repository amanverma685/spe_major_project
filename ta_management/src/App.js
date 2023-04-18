import { Route, Routes, Link} from "react-router-dom";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Registration from './Screens/Registration'
import ViewProject from "./Screens/ViewProject";
import AddProject from "./Screens/AddProject";
import SideNavbar from "./Components/SideNavbar";
import { useState } from "react";
import {GlobalContext} from './context/loggedinUserContext'
import { useEffect } from "react";

function App() {
  const [loggedinUser, setLoggedinUser] = useState(1);
  // var status= window.sessionStorage.getItem('status');
  console.log(loggedinUser)
  useEffect(()=>{
    //go to "/" page whenever logged in user is null
    //app component will mount again based on value of loogedin user. So, we can check it in here
    if(loggedinUser===null)
      <Link to="/"/>
  },[loggedinUser]);
  return (
    <GlobalContext.Provider value={{loggedinUser, setLoggedinUser}}>
    <div className="flex flex-row">
       <div style= {{}} >
        {
          (loggedinUser===null) && <Login/>
        }
        {
          (loggedinUser!==null) && <SideNavbar/> 
        }
    </div >
     {/* <div className="flex-3"> */}
    {/* <div style={{
      display: "flex",
      flex: 1,
    }}> */}
  <div className="flex-1">
      <Routes>
        {
          (loggedinUser===null) ? <Route exact path="/" element={<Login/>}/>
          
                                : <>
                                   <Route path="/Registration" element={<Registration/>} />
                                  <Route path="/Home" element={<Home />} />
                                  <Route path="/ViewProject" element={<ViewProject />} />
                                  <Route path="/AddProject" element={<AddProject />} />
                                </>
          
        }
      </Routes>
    </div>
      </div> 
    </GlobalContext.Provider>
  );
}

export default App;
