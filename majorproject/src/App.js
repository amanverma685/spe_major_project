import React, { useEffect, useState } from "react";
// import Home from "./Screens/Home";
import { Route, Routes } from "react-router-dom";
import ViewProject from "./Screens/ViewProject";
import AddProject from "./Screens/AddProject";
import Registration from "./Screens/Registration";
import { Authenticator } from "@aws-amplify/ui-react";
import SideNavBar from "./Components/SideNavBar";
import Login   from "./Screens/Login";
import StudentFormTA from "./StudentScreens/StudentFormTA";
import DisplayTaships from "./StudentScreens/DisplayTaships";
import StudentNotification from "./StudentScreens/StudentNotification";
import axios from "axios";
import MainComponent from "./Components/MainComponent";
function App() {

  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    // console.log("get details called")

    const token = sessionStorage.getItem("token");
    const user_id = sessionStorage.getItem("user_id");

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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(showRegistrationForm)

  return (
    <Authenticator>
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
  );
}

export default App;
