import React, {  useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cookies from 'js-cookie'
import {  useNavigate } from "react-router-dom";



const ProdductSlider = () => {

const navigate=useNavigate()

  const [slidesdata, setslidesdata] = useState([]);


  const addtocart=async (payload)=>{
    if(Cookies.get('token')){
      console.log(payload)
    const set= Cookies.set("Singleproduct",JSON.stringify(payload))
     navigate('/singleproduct')
    }else{
  navigate('/login')
    }

  }

  const getsliderdata = async () => {
    try {
      let responce = await fetch("https://nordstrombackend-cej0unf54-hiteshsharma2000s-projects.vercel.app/getslider", {
        method: "GET",
        headers: {
          "Conetnt-Type": "application/json",
        },
      });
      responce = await responce.json();
      setslidesdata(responce.detail);
      // console.log(responce.detail);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    
    getsliderdata();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
    tablet1: {
      breakpoint: { max: 1024, min: 900 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 900, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="ml-[3%] ">
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        isPlaying={true}
        ssr={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        renderButtonGroupOutside={true}
      >
        {slidesdata.map((ele) => {
          return (
            <div onClick={()=>{addtocart(ele)}} key={ele._id} className="cursor-pointer hover:opacity-30 m-[4px]">
              <img src={ele.imgurl} alt="" />
              <h2>{ele.title}</h2>
              <br />
              
              <p className="pricetag">{ele.price}</p>
              <h2>★★★★☆</h2>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProdductSlider;
