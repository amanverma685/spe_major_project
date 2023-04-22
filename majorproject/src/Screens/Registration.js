import React, { useEffect } from 'react'
import { useState } from 'react';
import '../Screens/MyStyle.css'
function Registration() {
  
  const [userType,setUserType]=useState(false);
  useEffect(() => {
    
  }, [userType])
  

  const [professor, setProfessor] = useState({
    name: "",
    email: "",
    contact_no: "",
    gender: "",
    dob: "",
  });

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

      const submitHandlerProfessor =async(e) => {
        e.preventDefault();
        console.log(professor);
        setProfessor({
          name:"",
          email:"",
          contact_no:"",
          gender:"",
          dob:"",
          subject:"",
          qualifictaion:""
        })
    }
    const submitHandlerStudent =async(e) => {
      e.preventDefault();
      console.log(professor);
      setProfessor({
        name:"",
        email:"",
        contact_no:"",
        gender:"",
        dob:"",
        subject:"",
        qualifictaion:""
      })
  }

  const registerUser=()=>{
    setUserType(!userType);
  }
  
  

  return (
    <>
    {
      (userType===false)?(
      <div>
        <div className="container">
        <div className='flex flex-row justify-between'>
        <div className="title"> Professor Registration</div>
        <div className='button_gradient'>
          <button className='m-3' onClick={registerUser} >Register As Student</button>
        </div>
        </div>
        
        <div className="content">
          <form className="Form " onSubmit={submitHandlerProfessor}>
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
    ):(
      <div>
      <div className="container">
      <div className='flex flex-row justify-between'>
      <div className="title"> Student Registration</div>
      <div className='button_gradient'>
        <button  className='m-3'  onClick={registerUser} >Register As Professor</button>
      </div>
      </div>
      
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
  
    )
    }
    </>
  )
}

export default Registration