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
import axios from "axios";
import { CircularProgress } from "@mui/material";

function SideNavBar(props) {
  const [iserror, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [userType, setUserType] = useState("");

  useEffect(() => {
    getUserDetails();
  }, []);

  const token = sessionStorage.getItem("token");
  // console.log("token",token)
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
      // console.log("userdata", taData);

      // console.log("user Type"+userType);
      setUserType(taData?.user_type);
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message);
      setIsLoading(false);
    }
  };

  const { collapseSidebar } = useProSidebar();

  return (
    <>
      {isLoading === false ? (
        <>
          {userType === "professor" ? (
            <div style={{ display: "flex", height: "100%" }}>
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
                <div>Professor Logged</div>

                <Menu className="menu-of-sidebar">
                  <MenuItem component={<Link to={"/home"} />}>
                    <HomeIcon />
                    Home
                  </MenuItem>

                  <MenuItem component={<Link to={"/tavacancylist"} />}>
                    {" "}
                    <PersonAddIcon />
                    TA Vacancy List
                  </MenuItem>
                  <Button
                    className="signout bg-black rounded-sm h-10 w-30 text-white  absolute bottom-0 left-10"
                    onClick={props.signOut}
                  >
                    Sign out
                  </Button>
                </Menu>
              </Sidebar>
            </div>
          ) : (
            <div style={{ display: "flex", height: "100%" }}>
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
            </div>
          )}
        </>
      ) : (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1>Please Wait....</h1>
          <CircularProgress size={60} color="secondary" />
        </div>
      )}
    </>
  );
}
export default SideNavBar;
