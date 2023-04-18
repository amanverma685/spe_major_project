import React, {useContext} from "react";
import {Sidebar,Menu,MenuItem,useProSidebar} from "react-pro-sidebar";
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from '@mui/icons-material/Add';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import InsightsIcon from '@mui/icons-material/Insights';
import { GlobalContext } from "../context/loggedinUserContext";


export default function () {
  // var okstatus= window.sessionStorage.getItem('status');
  const { collapseSidebar } = useProSidebar();
  const {loggedinUser, setLoggedinUser} = useContext(GlobalContext);
  const handleLogout=()=>{
    // okstatus=0;
    // // window.sessionStorage.setItem('status', okstatus);
    // // window.location.reload(true);
    // console.log(okstatus);
    setLoggedinUser(null);
    // <Link to='/'/>
    // window.location.reload(true);

  }
  return (
    <div style={{ display: 'flex', height: '100%' }}>
     <Sidebar className='my-custome-sidebar'
      rootStyles={{
        height:"100vh"
    }}
>
        <Menu>
          <main>
            <button onClick={() => collapseSidebar()}>
              <MenuIcon />
            </button>
          </main>
          <MenuItem component={<Link to="/Home" />}>
            <HomeIcon /> Home
          </MenuItem>
          <MenuItem component={<Link to="/AddProject" />}>
            <AddIcon/> TA list
          </MenuItem>
          <MenuItem component={<Link to="/ViewProject" />}>
           <InsightsIcon /> Projects
          </MenuItem>
          {/* <MenuItem component={<Link to="/Registration" />}>
            <HowToRegIcon /> Registration
          </MenuItem> */}
          {/* <MenuItem component={<Link to="/Login" />}>
            <BookOutlinedIcon /> 
            Login
          </MenuItem> */}
          <div className="justisfy-center">  
          <button className="bg-black text-center text-white py-1 px-2 rounded-md focus:outline-none focus:ring focus:border-blue-500" onClick={handleLogout}>Logout</button>
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
}
