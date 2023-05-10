import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import InsightsIcon from "@mui/icons-material/Insights";
import { Button } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import axios from "axios"

function SideNavBar(props) {
  
 
  const [iserror, setIsError] = useState("")
 
  var userType="";

  useEffect(() => {
    getUserDetails();
  }, [])
  
  const token = sessionStorage.getItem("token");
  const getUserDetails = async ()=>{
    try {
          const res = await axios.get(
           `https://03wi9io086.execute-api.ap-south-1.amazonaws.com/dev/user_details/get_user`,
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );
    
          const taData = res.data.responseData;
          // console.log("taData" ,taData)
          userType=taData.user_type
          console.log(userType)
        } catch (error) {
          setIsError(error.message);
        }

  }

  const { collapseSidebar } = useProSidebar();

  return (
   <>
   {
    (userType==="professor") ?
    (<div style={{ display: "flex", height: "100%" }}>
      <Sidebar
        className="my-custome-sidebar"
        rootStyles={{
          height: "100vh",
        }}
      >
        <button
          onClick={() => {
            collapseSidebar();
          }}
        >
          <MenuIcon />
        </button>

        <Menu className="menu-of-sidebar">
          <MenuItem component={<Link to={"/home"} />}>
            <HomeIcon />
            Home
          </MenuItem>
          {/* <MenuItem component={<Link to={"/viewProject"} />}>
            <InsightsIcon /> Projects
          </MenuItem> */}
          {/* <MenuItem component={<Link to={"/addProject"} />}>
            {" "}
            <AddIcon /> TA list
          </MenuItem> */}
          <div>Professor Logged</div>
          <MenuItem component={<Link to={"/tavacancylist"} />}>
            {" "}
            <PersonAddIcon />
            TA Vacancy List
          </MenuItem>
          <MenuItem component={<Link to={"/taform"} />}>
            {" "}
            <PersonAddIcon />
            TA Form
          </MenuItem>
          <Button
            className="signout bg-black rounded-sm h-10 w-30 text-white  absolute bottom-0 left-10"
            onClick={props.signOut}
          >
            Sign out
          </Button>
        </Menu>
      </Sidebar>
    </div>):
    
      (<div style={{ display: "flex", height: "100%" }}>
        <Sidebar
          className="my-custome-sidebar"
          rootStyles={{
            height: "100vh",
          }}
        >
          <button
            onClick={() => {
              collapseSidebar();
            }}
          >
            <MenuIcon />
          </button>
            <div>Student Logged</div>
          <Menu className="menu-of-sidebar">
            <MenuItem component={<Link to={"/home"} />}>
              <HomeIcon />
              Home
            </MenuItem>
            {/* <MenuItem component={<Link to={"/viewProject"} />}>
              <InsightsIcon /> Projects
            </MenuItem> */}
            <MenuItem component={<Link to={"/tarequest"} />}>
              {" "}
              <AddIcon /> TA list
            </MenuItem>
            <MenuItem component={<Link to={"/tavacancylist"} />}>
              {" "}
              <PersonAddIcon />
              TA Vacancy List
            </MenuItem>
            <MenuItem component={<Link to={"/taform"} />}>
              {" "}
              <PersonAddIcon />
              TA Form
            </MenuItem>
            <Button
              className="signout bg-black rounded-sm h-10 w-30 text-white  absolute bottom-0 left-10"
              onClick={props.signOut}
            >
              Sign out
            </Button>
          </Menu>
        </Sidebar>
      </div>)
    
          }
  
</>);
}
export default SideNavBar;
