import React from "react";
import {Sidebar,Menu,MenuItem, SubMenu,useProSidebar,} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import { Book } from "@mui/icons-material";
export default function () {
  const { collapseSidebar } = useProSidebar();
  return (
    <div >
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
            <BookOutlinedIcon /> Add Project
          </MenuItem>
          <MenuItem component={<Link to="/ViewProject" />}>
            <BookOutlinedIcon /> Projects
          </MenuItem>
          <MenuItem component={<Link to="/Registration" />}>
            <BookOutlinedIcon /> Registration
          </MenuItem>
          <MenuItem component={<Link to="/Login" />}>
            <BookOutlinedIcon /> Login
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
