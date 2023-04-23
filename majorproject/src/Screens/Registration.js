import React, { useEffect } from "react";
import { useState } from "react";
import "../Screens/MyStyle.css";
import axios from "axios";
import Home from "./Home";
import Select from "react-select";

function Registration() {
  const [userType, setUserType] = useState("professor");

  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  useEffect(() => {
    getUserDetails();
  }, [userType]);

  const getUserDetails = async () => {
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
    axios
      .request(config)
      .then((response) => {
        setShowRegistrationForm(response.data.responseData);
        console.log(showRegistrationForm);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [professor, setProfessor] = useState({
    fname: "",
    mname: "",
    lname: "",
    email: "",
    dob: "",
    contact: "",
    qualifictaion: "",
  });

  const subjects = [
    { value: "SPE", label: "SPE" },
    { value: "ESD", label: "ESD" },
    { value: "ML", label: "ML" },
    { value: "NLP", label: "NLP" },
  ];

  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const handleSelectChange = (selectedSubjects) => {
    setSelectedSubjects(selectedSubjects);
    // console.log(selectedSubjects);
  };

  const [student, setStudent] = useState({
    name: "",
    email: "",
    contact_no: "",
    gender: "",
    dob: "",
  });

  const onChange = (e) => {
    // console.log(e);
    setProfessor({ ...professor, [e.target.name]: e.target.value });
  };

  const submitHandlerProfessor = async (e) => {
    e.preventDefault();
    // console.log(professor);
    // console.log(selectedSubjects);

    const submitdata = {
      fname: professor.fname,
      mname: professor.mname,
      lname: professor.lname,
      email: professor.email,
      dob: professor.dob,
      contact: professor.contact,
      qualifictaion: professor.qulaification,
      subject: selectedSubjects,
      userType: userType,
    };
    const token = sessionStorage.getItem("token");
    console.log(submitdata);
    await axios.post(`https://03wi9io086.execute-api.ap-south-1.amazonaws.com/dev/user_details/update_user`,
    submitdata
    ,{
    headers: {
      Authorization: "Bearer " + token,
    }}
    )
    .then((res)=>{
      // console.log(res.data)
    })
    .catch(err=>console.log(err))

    setProfessor({
      fname: "",
      mname: "",
      lname: "",
      email: "",
      contact: "",
      gender: "",
      dob: "",
      qualifictaion: "",
    });
  };
  const submitHandlerStudent = async (e) => {
    e.preventDefault();
    console.log(professor);
    setProfessor({
      name: "",
      email: "",
      contact_no: "",
      gender: "",
      dob: "",
      subject: "",
      qualifictaion: "",
    });
  };

  const registerUser = () => {
    if (userType === "professor") setUserType("student");
    else setUserType("professor");
  };

  return (
    <>
      {showRegistrationForm === false ? (
        <>
          {userType === "professor" ? (
            <div>
              <div className="container">
                <div className="flex flex-row justify-between">
                  <div className="title"> Professor Registration</div>
                  <div className="button_gradient">
                    <button
                      className="m-3 h-1 w-40 text-center"
                      onClick={registerUser}
                    >
                      Register As Student
                    </button>
                  </div>
                </div>

                <div className="content">
                  <form className="Form " onSubmit={submitHandlerProfessor}>
                    <div className="user-details">
                      <div className="input-box">
                        <span className="details">First Name</span>
                        <input
                          type="text"
                          placeholder="Enter your first name"
                          id="fname"
                          name="fname"
                          required
                          value={professor.fname}
                          onChange={onChange}
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Middle Name</span>
                        <input
                          type="text"
                          placeholder="Enter your Middle name"
                          id="mname"
                          name="mname"
                          required
                          value={professor.mname}
                          onChange={onChange}
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Last Name</span>
                        <input
                          type="text"
                          placeholder="Enter your Middle name"
                          id="lname"
                          name="lname"
                          required
                          value={professor.lname}
                          onChange={onChange}
                        />
                      </div>

                      <div className="input-box">
                        <span className="details">Email</span>
                        <input
                          type="text"
                          placeholder="Enter your email"
                          id="email"
                          name="email"
                          required
                          value={professor.email}
                          onChange={onChange}
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Phone Number</span>
                        <input
                          type="text"
                          placeholder="Enter your number"
                          id="contact"
                          name="contact"
                          required
                          value={professor.contact}
                          onChange={onChange}
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">DOB</span>
                        <input
                          type="date"
                          placeholder="Enter your age"
                          id="dob"
                          name="dob"
                          required
                          value={professor.dob}
                          onChange={onChange}
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Qualification</span>
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          id="qualifictaion"
                          name="qualifictaion"
                          required
                          value={professor.qualifictaion}
                          onChange={onChange}
                        />
                      </div>
                      <div className="m-4">
                        <Select
                          isMulti
                          options={subjects}
                          value={selectedSubjects}
                          onChange={handleSelectChange}
                          placeholder="Subject"
                        />
                      </div>
                      <div></div>
                    </div>
                    <div className="button">
                      <input type="submit" value="Register" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="container">
                <div className="flex flex-row justify-between">
                  <div className="title"> Student Registration</div>
                  <div className="button_gradient">
                    <button className="m-3" onClick={registerUser}>
                      Register As Professor
                    </button>
                  </div>
                </div>
                Home
                <div className="content">
                  <form className="Form " onSubmit={submitHandlerStudent}>
                    <div className="user-details">
                      <div className="input-box">
                        <span className="details">Full Name</span>
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          id="name"
                          name="name"
                          required
                          value={professor.name}
                          onChange={onChange}
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Email</span>
                        <input
                          type="text"
                          placeholder="Enter your email"
                          id="email"
                          name="email"
                          required
                          value={professor.email}
                          onChange={onChange}
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Phone Number</span>
                        <input
                          type="text"
                          placeholder="Enter your number"
                          id="contact_no"
                          name="contact_no"
                          required
                          value={professor.contact_no}
                          onChange={onChange}
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Gender</span>
                        <input
                          type="text"
                          placeholder="Enter your gender"
                          id="gender"
                          name="gender"
                          required
                          value={professor.gender}
                          onChange={onChange}
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">DOB</span>
                        <input
                          type="date"
                          placeholder="Enter your age"
                          id="dob"
                          name="dob"
                          required
                          value={professor.dob}
                          onChange={onChange}
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Subject</span>
                        <input
                          type="text"
                          placeholder="Enter your subject"
                          id="subject"
                          name="subject"
                          required
                          value={professor.subject}
                          onChange={onChange}
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Qualification</span>
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          id="qualifictaion"
                          name="qualifictaion"
                          required
                          value={professor.qualifictaion}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <div className="button">
                      <input type="submit" value="Register" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <Home />
      )}
    </>
  );
}

export default Registration;
