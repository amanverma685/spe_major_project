import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import { Button } from '@mui/material';


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
          <MenuItem component={<Link to={"/ViewProject"}/>}><BookOutlinedIcon/> Projects</MenuItem>
          <MenuItem component={<Link to={"/AddProject"}/>}> <BookOutlinedIcon/>Add Projects</MenuItem>
          <MenuItem component={<Link to={"/Login"}/>}> <BookOutlinedIcon/>New Login</MenuItem>
          <Button className="signout bg-slate-600 rounded-sm h-7 w-20 text-white " onClick={props.signOut}>Sign out</Button>
        </Menu>
      </Sidebar>
    // </div>
  );
}

export default SideNavBar


