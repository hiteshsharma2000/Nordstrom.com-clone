import React, { useEffect, useState } from "react";

import Navsection from "../components/navsection"

import Cookies from 'js-cookie'
import { json, useNavigate } from "react-router-dom";

const Product = () => {
  const [product, setproduct] = useState([]);

  const navigate=useNavigate()

  const addtocart=async (payload)=>{
    if(Cookies.get('token')){
      console.log(payload)
    const set=await Cookies.set("Singleproduct",JSON.stringify(payload))
    console.log(payload)
     navigate('/singleproduct')
    }else{
  navigate('/login')
    }

  }

  const getProductdata = async () => {
    try {
      let responce = await fetch("https://nordstrombackend-cej0unf54-hiteshsharma2000s-projects.vercel.app/product", {
        method: "GET",
        headers: {
          "Conetnt-Type": "application/json",
          "authorization" :` ${Cookies.get("token")}`
        },
      });
      responce = await responce.json();
      setproduct(responce.data);
      // console.log(responce.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProductdata();
  }, []);

  return (
    <>
    <Navsection />
      <br />
      <br />
      <br />
    <div className="flex w-full">
    <div
        className="hidden sm:block md:block w-[50%] text-center "
        style={{ border: "1px solid black", }}
      >
       <img className='w-full h-full' src="https://assets.materialup.com/uploads/5dab2841-80f7-486f-8897-36f1a86a5f0b/preview.jpg" alt="" />
      </div>

      <div style={{ borderTop: "2px solid black" }}>
        <br />
        <br />
        <h2 className="text-center text-[1.2rem] font-[500]">
          D E S I G N E R &nbsp; &nbsp; C L O T H I N G
        </h2>
        <br />
        <br />
        <div className="grid ml-[2%] gap-[1.2rem]  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
          {product.map((ele) => {
            return (
              <div key={ele._id} onClick={()=>{addtocart(ele)}} className="hover:opacity-30 cursor-pointer">
                <img
                  style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                  src={ele.imgurl}
                  alt=""
                  className="w-full"
                />
                <br />
                <h2 className="text-[1.2rem]">{ele.title}</h2>
                <br />
                <p className="text-[1.2rem] font-[500]">{ele.price}</p>
                <h2 className="text-[1.2rem]">★★★★☆</h2>
                <br />
               
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
};

export default Product;
