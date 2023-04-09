import React from "react";
import Home from "./Screens/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./Screens/Login";
import ViewProject from "./Screens/ViewProject";
import AddProject from "./Screens/AddProject";
import SideNavBar from "./Components/SideNavBar";
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './Screens/Configuration';
Amplify.configure(awsExports);

function App() {
  return (
      <Authenticator>
        {({ signOut, user }) => (
              <>
                <SideNavBar signOut={signOut}/>      
                <Routes>
                  {/* <Route path="/" element={<Login/>}/> */}
                  <Route path="/Home" element={<Home/>}/>
                  <Route path="/ViewProject" element={<ViewProject/>}/>
                  <Route path="/AddProject" element={<AddProject/>}/>
                </Routes>
              </>
        )}
      </Authenticator>
  );
}

export default App;
