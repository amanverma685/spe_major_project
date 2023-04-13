import React from 'react'
import { useState } from 'react'
function NewLogin() {
  const [email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  var okstatus = 0;
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
    if(email==="parulsachan86@gmail.com" && password==="Parul@123") okstatus=1;
    if (okstatus === 1) {
      // window.sessionStorage.setItem('status', okstatus);
      // window.location.reload(true);
    }
    console.log(okstatus);
  
  }
  

  return (
  
    <div className=" h-1/2 w-1/2 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2max-w-md mx-auto my-10 bg-white p-8 border border-gray-300 shadow-sm ">
    <h1 className="text-xl font-semibold mb-4">Login</h1>
    <form onClick={submitHandler}>
      <div className="mb-4">
        <label className="block font-semibold mb-2" htmlFor="email">Email</label>
        <input className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-500" type="email" name="email" id="email" onChange={handleEmailChange} required/>
      </div>
      <div className="mb-6">
        <label className="block font-semibold mb-2" htmlFor="password">Password</label>
        <input className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:ring focus:border-blue-500" type="password" name="password" id="password" onChange={handlePasswordChange} required/>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-center text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-500" type="submit">Login</button>
    </form>
  </div>
 
        
  )
}

export default NewLogin