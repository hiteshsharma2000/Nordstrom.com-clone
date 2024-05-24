import React, { useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Networthyslider = () => {
const [slider1data,setslider1data]=useState([])

const getsliderdata=async ()=>{
  try {
    let responce = await fetch("https://nordstrombackend-cej0unf54-hiteshsharma2000s-projects.vercel.app/sliderdata1/", {
      method: "GET",
      headers: {
        "Conetnt-Type": "application/json",
      },
    });
    responce = await responce.json();
    setslider1data(responce.data);
    console.log(responce.data);
  } catch (error) {
    console.log(error.message);
  }
}
 useEffect(()=>{
  getsliderdata()
 },[])


  const handleBackClick = () => {
    Slider.ButtonBack;
  };

  const handleNextClick = () => {
    Slider.ButtonNext;
  };

  return (
    <div className="mb-5 pb-0 h-[45vh] sm:h-[50vh] md:h-[50vh] lg:h-[50vh] md:mb-[24rem] lg:mb-[24rem] ">
      <hr style={{ width: "97%", margin: "auto", border: "1px solid black" }} />
      <br />
      <br />{" "}
      <h1 className="text-center text-[1.5rem] ">
        N E W & N O T E W O R T H Y
      </h1>
      <br />
      <br />
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={2}
        infinite={true}
        isPlaying={true}
      >
        <Slider>
          {slider1data.map((ele,ind)=>{
            return(
              <Slide index={ind}>
              <div className="w-[100%] block sm:flex md:flex lg:flex">
                <img
                  className="md:absolute sm:absolute lg:absolute w-full"
                  src={ele.imgurl}
                  alt=""
                />
  
                <div className=" items-center sm:ml-[70%]  grid gap-[1.2rem] sm:mt-[10%] md:ml-[70%] md:mt-[10%] lg:ml-[66%] lg:mt-[10%] md:relative sm:relative lg:relative">
                  <h1 className="text-[1rem] m-auto sm:text-[2.6rem] md:text-[2.6rem] lg:text-[2.6rem] font-bold">
                    {ele.title}
                  </h1>
                  <p>
                    {ele.description}
                  </p>
                  <div
                    id="highlighted"
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
        <div className="invisible sm:visible md:visible lg:visible  absolute top-0 left-0 right-0 bottom-[45%] flex items-center  justify-between">
          <ButtonBack
            className="absolute left-0 p-4 text-[2rem]  opacity-40 hover:opacity-100 hover:bg-black-700 "
            onClick={handleBackClick}
          >
            ⫷
          </ButtonBack>
          <ButtonNext
            className="absolute right-0 p-4 text-[2rem] opacity-40 hover:opacity-100 hover:bg-black-700"
            onClick={handleNextClick}
          >
            ⫸
          </ButtonNext>
        </div>
      </CarouselProvider>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Networthyslider;
