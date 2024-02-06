import React, { useState } from "react";

const Login = () => {
  const [loginuser, setloginuser] = useState({
    Email: "",
    password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setloginuser({
      ...loginuser,
      [name]: value,
    });
  };
  const handlesubmit = () => {
    console.log(loginuser);
  };

  return (
    <div className="  ml-[10%] text-start sm:ml-[40%] md:ml-[40%] lg:ml-[40%] w-full ">
      <br />
      <br />
      <br />
      <p className="font-bold text-[1.3rem]">Login Account&nbsp;</p>
      <br />
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
      <br />
      <button
        style={{ borderRadius: "0", marginRight: "15px" }}
        onClick={handlesubmit}
        className="bg-black text-white text-center  w-[70%] lg:text-base h-[2.7rem]  lg:w-[22%] md:w-[22%] "
      >
        Login&nbsp;Account
      </button>
    </div>
  );
};

export default Login;
