import React from 'react'
import { useState } from 'react';
import '../Screens/MyStyle.css'
function Registration() {
  
  const [professor, setProfessor] = useState({
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
      const submitHandler =async(e) => {
        e.preventDefault();
        console.log(professor);
        setProfessor({
          name:"",
          email:"",
          contact_no:"",
          gender:"",
          dob:"",
        })
    }
  return (
    <div> <div className="container">
    <div className="title"> Professor Registration</div>
    <div className="content">
      <form className="Form " onSubmit={submitHandler}>
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
              type="text"
              placeholder="Enter your age"
              id="dob"
              name="dob"
              required
              value={professor.dob}
              onChange={onChange}
            />
          </div>
          </div>
        <div className="button ">
          <input type="submit" value="Register" />
        </div>
        
      </form>
    </div>
  </div></div>
  
  )
}

export default Registration