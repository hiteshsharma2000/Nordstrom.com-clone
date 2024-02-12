import React, { useState } from 'react'
import Navsection from '../components/navsection';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
const DeliverAddress = () => {
  let priceobject=JSON.parse(Cookies.get('Singleproduct'))
const navigate=useNavigate()
    const [address,setaddress]=useState({})
    const handlechange = (e) => {
        const { name, value } = e.target;
        setaddress({
          ...address,
          [name]: value,
        })
      }

 const handlesubmit = async() => {
    try {
        console.log(address);
        alert(`your order id is : ${Math.floor(Math.random() * 9999)}`)
        navigate('/')
    } catch (error) {
        
    }
 }


  return (
    <>
    <Navsection/>
    <br />
    <br />
    <br />
  <div className="  ml-[10%] text-start sm:ml-[40%] md:ml-[40%] lg:ml-[40%] w-full ">
    <br />
    <br />
    <br />
    <p className="font-bold text-[1.3rem]">Delivery address&nbsp;</p>
    <br />
    <div className='font-bold text-[1.5rem] text-[red]'>
    <h2>SubTotal : </h2>{priceobject.price}
    </div>
    <div className="text-start grid gap-[.5rem]">
      <p>Check out faster</p>
      <p>Track orders easily</p>
    
    </div>
    <div></div>
    <div></div>
    <br /> <label >Name:</label> <br />
    <input
      type="text"
      name="name"
      onChange={(e) => {
        handlechange(e);
      }}
      className="focus:border-gray-300 pl-2 h-[2.7rem]   w-[70%] lg:w-[22%] md:w-[22%] lg:h-[2.7rem] sm:h-[2.7rem] border border-black rounded-none"
      placeholder="Enter Full Name"
    />{" "}
    <br />
    <br />
    <label>Address line:</label>
    <br />
    <input
      type="text"
      name="Address"
      onChange={(e) => {
        handlechange(e);
      }}
      className="focus:border-gray-300 pl-2 h-[2.7rem]  w-[70%] lg:w-[22%] md:w-[22%] lg:h-[2.7rem] sm:h-[2.7rem] border border-black rounded-none"
      placeholder="Address"
    />
    <br />
    
    <br />
    <label>Address line:</label>
    <br />
    <input
      type="text"
      name="contact"
      onChange={(e) => {
        handlechange(e);
      }}
      className="focus:border-gray-300 pl-2 h-[2.7rem]  w-[70%] lg:w-[22%] md:w-[22%] lg:h-[2.7rem] sm:h-[2.7rem] border border-black rounded-none"
      placeholder="contact no"
    />
   
    <br />
    <br />
   
    <button
      style={{ borderRadius: "0", marginRight: "15px" }}
      onClick={handlesubmit}
      className="bg-black text-white text-center  w-[70%] lg:text-base h-[2.7rem]  lg:w-[22%] md:w-[22%] "
    >
      Order&nbsp;
    </button>
  </div>
  </>
  )
}

export default DeliverAddress