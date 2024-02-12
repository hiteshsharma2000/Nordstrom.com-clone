import React, { useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const BannerSlider = () => {
  const navigate=useNavigate()

const [bannerdata,setbannerdata]=useState([])


const handlenavigate=()=>{
 if(Cookies.get('token')){
  navigate('/product')

 }else{
  navigate('/login')
 }
}
const getbannerdata=async ()=>{
  try {
    let responce = await fetch("https://nordstrombackend-production.up.railway.app/banner/", {
      method: "GET",
      headers: {
        "Conetnt-Type": "application/json",
      },
    });
    responce = await responce.json();
    setbannerdata(responce.data);
    console.log(responce.data);
  } catch (error) {
    console.log(error.message);
  }
}

useEffect(()=>{
   getbannerdata()
},[])

 return (
    <div className="mb-[8rem] sm:mb-0   h-[45vh]  md:h-[60vh] lg:h-[60vh] md:mb-[18rem] lg:mb-[18rem] ">
      <br />

      <CarouselProvider
      swipeable={true}
      draggable={true}
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={2}
        infinite={true}
        isPlaying={true}
      >
        <Slider>
          {bannerdata.map((ele,ind)=>{
  return(
    <Slide index={ind} onClick={()=>{handlenavigate()}}>
    <div className=" w-[100%] block sm:flex md:flex lg:flex" >
      <img
        className="md:absolute sm:absolute lg:absolute w-full"
        src={ele.imgurl}/>
     <div className=" items-center sm:ml-[70%]  grid gap-[1.2rem] sm:mt-[10%] md:ml-[68%] md:mt-[10%] lg:ml-[68%] lg:mt-[10%] md:relative sm:relative lg:relative">
        <h1 className="text-[1rem] m-auto   lg:text-[2.6rem] font-bold">
          {ele.title}
        </h1>
        <p>
         {ele.description}
        </p>
        <div
          id="highlighted3"
          className="md:flex lg:flex gap-[20px]  mb-2"
        >
          <p className="border-b-2 hover:border-black ">
            {ele.para1}
          </p>
          <p className="border-b-2 hover:border-black ">
            {ele.para2}
          </p>
        </div>
      </div>
    </div>
  </Slide>
  )

  })}
 </Slider>
      </CarouselProvider>
    </div>
  );
};

export default BannerSlider;
