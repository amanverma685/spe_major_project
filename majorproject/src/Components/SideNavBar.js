import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import InsightsIcon from '@mui/icons-material/Insights';
import { Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


function SideNavBar(props) {

const { collapseSidebar} = useProSidebar();

return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar className='my-custome-sidebar'
         rootStyles={{
          height:"100vh"
      }}
>
        <button onClick={() => {
            collapseSidebar();
        }}>
        <MenuIcon />
        </button>
        <Menu className='menu-of-sidebar'>
          <MenuItem component={<Link to={"/Home"}/>}> 
          <HomeIcon />Home
          </MenuItem>
          <MenuItem component={<Link to={"/ViewProject"}/>}><InsightsIcon/> Projects</MenuItem>
          <MenuItem component={<Link to={"/AddProject"}/>}> <AddIcon/> TA list</MenuItem>
          {/* <MenuItem component={<Link to={"/Registration"}/>}> <PersonAddIcon/>Registration</MenuItem> */}
          <MenuItem component={<Link to={"/TAForm"}/>}> <PersonAddIcon/>TA Form</MenuItem>
          <Button className="signout bg-black rounded-sm h-10 w-30 text-white  absolute bottom-0 left-10" onClick={props.signOut}>Sign out</Button>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideNavBar


