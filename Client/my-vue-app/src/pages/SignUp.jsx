import React, { useState } from "react";
import Navsection from "../components/Navsection";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [registeruser, setregisteruser] = useState({
    firstname: "",
    lastname: "",
    Email: "",
    password: "",
  });






  
  const handlechange = (e) => {
    const { name, value } = e.target;
    setregisteruser({
      ...registeruser,
      [name]: value,
    });
  };

  const handlesubmit =async () => {
    console.log(registeruser);
    try {
      let response = await fetch("http://localhost:8080/users/register", { 
        method: "POST",
        body: JSON.stringify(registeruser),
        headers: {
          "Content-type":"application/json"
        }
      });
      alert('new user has been created')
      let data = await response.text();
      console.log(data);
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
    }
  




  
  return (
    <>
     <Navsection />
      <br />
      <br />
   
    <div className="  ml-[10%] text-start sm:ml-[40%] md:ml-[40%] lg:ml-[40%] w-full ">
      <br />
      <br />
      <br />
      <p className="font-bold text-[1.3rem]">Create Account&nbsp;</p>
      
      <div className="text-start grid gap-[.5rem]">
        <p>Check out faster</p>
        <p>Track orders easily</p>
        <p>Use one sign-in across our brands</p>
      </div>
      <div></div>
      <div></div>
      <br /> <label htmlFor="Email">Email:</label> <br />
      <input
        type="text"
        name="Email"
        onChange={(e) => {
          handlechange(e);
        }}
        className="focus:border-gray-300 pl-2 h-[2.7rem]   w-[70%] lg:w-[22%] md:w-[22%] lg:h-[2.7rem] sm:h-[2.7rem] border border-black rounded-none"
        placeholder="Email Address"
      />{" "}
      <br />
      <br />
      <label>First name:</label>
      <br />
      <input
        type="text"
        name="firstname"
        onChange={(e) => {
          handlechange(e);
        }}
        className="focus:border-gray-300 pl-2 h-[2.7rem]  w-[70%] lg:w-[22%] md:w-[22%] lg:h-[2.7rem] sm:h-[2.7rem] border border-black rounded-none"
        placeholder="First name"
      />
      <br />
      <br />
      <label>Last name:</label>
      <br />
      <input
        type="text"
        name="lastname"
        onChange={(e) => {
          handlechange(e);
        }}
        className="focus:border-gray-300 pl-2 h-[2.7rem]  w-[70%] lg:w-[22%] md:w-[22%] lg:h-[2.7rem] sm:h-[2.7rem] border border-black rounded-none"
        placeholder="last name"
      />{" "}
      <br /> <br />
      <label>Password:</label>
      <br />
      <input
        type="password"
        name="password"
        onChange={(e) => {
          handlechange(e);
        }}
        className="focus:border-gray-300 pl-2 h-[2.7rem]  w-[70%] lg:w-[22%] md:w-[22%] lg:h-[2.7rem] sm:h-[2.7rem] border border-black rounded-none"
        placeholder="Password"
      />
      <br />
      <br />
      <div className="flex ">
        <input type="checkbox" className="w-[1rem]" />
        <p className="ml-[1%]">Keep me Signed in</p>
      </div>
      <div className="text-[.9rem]">
        <p>
          By creating an account, you agree to our{" "}
          <span className="span">Privacy Policy</span> <br />
          and <span className="span">Terms & Conditions.</span>
        </p>
      </div>
      <button
        style={{ borderRadius: "0", marginRight: "15px" }}
        onClick={handlesubmit}
        className="bg-black text-white text-center  w-[70%] lg:text-base h-[2.7rem]  lg:w-[22%] md:w-[22%] "
      >
        Create&nbsp;Account
      </button>
      <br />
     <Link to='/login'><p>Already have an account ?</p></Link> 
    </div>
    </>
  );
};

export default SignUp;
