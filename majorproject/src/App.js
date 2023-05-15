import React, { useEffect, useState } from "react";
// import Home from "./Screens/Home";
import { Route, Routes } from "react-router-dom";
import ViewProject from "./Screens/ViewProject";
import Registration from "./Screens/Registration";
import { Authenticator } from "@aws-amplify/ui-react";
import SideNavBar from "./Components/SideNavBar";
import Login   from "./Screens/Login";
import StudentFormTA from "./StudentScreens/StudentFormTA";
import DisplayTaships from "./StudentScreens/DisplayTaships";
import StudentNotification from "./StudentScreens/StudentNotification";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import './App.css';

import MainComponent from "./Components/MainComponent";
function App() {

  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [isLoading,setIsLoading]= useState(false);

  useEffect(() => {
    getUserDetails();
  }, []);



  const getUserDetails = async () => {
    // console.log("get details called")
    setIsLoading(true);
    const token = sessionStorage.getItem("token");
    const user_id = sessionStorage.getItem("user_id");
    // console.log(token)

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url:
        "https://tglog3gqb6.execute-api.ap-south-1.amazonaws.com/dev/user_registration/" +
        user_id,
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    await axios
      .request(config)
      .then((response) => {
        // console.log(response.data)
        setShowRegistrationForm(response.data.responseData);
        // console.log(showRegistrationForm);
        setIsLoading(false);

      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };


  return (
    <>
    {
      (isLoading===false)?(
        <div >
            <Authenticator className="container  AuthContainer">
            
        {({ signOut, user }) => {
          sessionStorage.setItem('token', user.signInUserSession.idToken.jwtToken);
          // console.log(user.signInUserSession.idToken.jwtToken)
          sessionStorage.setItem('user_id', user.attributes['custom:user_id']);
          sessionStorage.setItem('email', user.attributes['email']);
          return(
            <>
              {
                (showRegistrationForm===false) ? <Registration signOut={signOut}/> : <MainComponent signout={signOut}/>
              }
            </>
          )
        }}
        </Authenticator>
          
        </div>
      ):(<div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        ><h1>Please Wait....</h1>
          <CircularProgress size={60} color="secondary" />
        </div> )
    }
    </>
  );
}

export default App;
