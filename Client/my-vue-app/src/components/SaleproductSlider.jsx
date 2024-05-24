import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cookies from 'js-cookie'
import { json, useNavigate } from "react-router-dom";


const SaleProductSlider = () => {
  const [slidesdata, setslidesdata] = useState([]);

  const navigate=useNavigate()

  const addtocart=async (payload)=>{
    if(Cookies.get('token')){
      console.log(payload)
    const set=await Cookies.set("Singleproduct",JSON.stringify(payload))
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
      console.log(responce.detail);
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
    <div className="ml-[3%]">
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        ssr={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        transitionDuration={700}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {slidesdata.map((ele) => {
          return (
            <div key={ele._id} onClick={()=>{addtocart(ele)}} className="cursor-pointer hover:opacity-30 m-[4px]" >
              <img src={ele.imgurl} alt="" />
              <h2>{ele.title}</h2>
              <br />
              <p className="pricetag">{ele.price}</p>
              <h2 className="discountprice">
                Current Price INR 2,027.96 to INR 4,784.95
              </h2>
              <p className="discountprice">(Up to 20% off select items)</p>
              <s className="pricetag">{ele.price}</s>
              <h2>★★★★☆</h2>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SaleProductSlider;
