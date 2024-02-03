import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const ProdductSlider = () => {
const [slidesdata,setslidesdata]=useState([]);

    const getsliderdata=async ()=>{
        try {
            let responce=await fetch('http://localhost:8080/getslider',{
                method:"GET",
                headers:{
                    "Conetnt-Type":"application/json"
                }
            })
            responce=await responce.json()
            setslidesdata(responce.detail)
        console.log(responce.detail);
        } catch (error) {
            console.log(error.message);
        }
        }
        
        useEffect(()=>{
            getsliderdata()
        },[])




    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 5 // optional, default to 1.
        },
        tablet1: {
          breakpoint: { max: 1024, min: 900 },
          items: 4,
          slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 900, min: 464 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

  return (
    <div className='ml-[3%]'>
    <Carousel
 swipeable={false}
 draggable={false}
 responsive={responsive}
 ssr={true}
 autoPlay={true}
 autoPlaySpeed={1000} // Set autoPlaySpeed to 500 milliseconds (0.5 seconds)
 keyBoardControl={true}
 transitionDuration={700} // Set transition duration to 500 milliseconds (0.5 seconds)
 containerClass="carousel-container"
 removeArrowOnDeviceType={["tablet", "mobile"]}
 dotListClass="custom-dot-list-style"
 itemClass="carousel-item-padding-40-px"
>
  {slidesdata.map((ele)=>{
    return(
        <div>
            <img src={ele.imgurl} alt="" />
            <h2>{ele.title}</h2>
            <p>{ele.price}</p>
            <h2>★★★★☆</h2>
        </div>
    )
  })}

</Carousel>
</div>
  )
}

export default ProdductSlider