import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Networthypart2 = () => {
const navigate=useNavigate()
const [networthydata,setnetworthydata]=useState([])

const handlenavigate=()=>{
  if(Cookies.get('token')){
   navigate('/product')
 
  }else{
   navigate('/login')
  }
 }

const getnetworthydata=async ()=>{
  try {
    let responce = await fetch("https://nordstrombackend-cej0unf54-hiteshsharma2000s-projects.vercel.app/networthy", {
      method: "GET",
      headers: {
        "Conetnt-Type": "application/json",
      },
    });
    responce = await responce.json();
    setnetworthydata(responce.data);
    console.log(responce.data);
  } catch (error) {
    console.log(error.message);
  }
}
useEffect(()=>{
 getnetworthydata()
},[])

  return (
    <div 
      className="mt-[5rem] sm:mt-[12rem] md:mt-0 lg:mt-0 grid grid-cols-1 mt-0 ml-[22px] mr-[10px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-[2]"
      style={{ borderBottom: "2px solid black" }}
    >
      <div className="text-start grid pl-[1rem] items-center">
        <p>
          <h1 className=" text-[2.6rem] font-[600]">Need Right Now</h1>
          <br />
          Your curated roundup of this season's essentials.
        </p>
      </div>
      {networthydata.map((ele)=>{

return(
  <div key={ele._id} onClick={()=>{handlenavigate}}> 
  <img
    src={ele.imgurl}
    alt=""
  />
  <p className="grid justify-center  ">
    {ele.title} <hr />
  </p>
</div>

)
 })}
      
      <br />
      <br />
      <br />
    </div>
  );
};

export default Networthypart2;
