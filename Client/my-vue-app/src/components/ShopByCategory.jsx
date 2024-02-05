import React from 'react'
import  { useEffect, useState } from 'react'
const ShopByCtaegory = () => {
    const [categorydata,setcategorydata]=useState([]);

    const getcategorydata=async ()=>{
        try {
            let responce=await fetch('http://localhost:8080/category',{
                method:"GET",
                headers:{
                    "Conetnt-Type":"application/json"
                }
            })
            responce=await responce.json()
            setcategorydata(responce.data)
        console.log(responce.data);
        } catch (error) {
            console.log(error.message);
        }
        }
        
        useEffect(()=>{
            getcategorydata()
        },[])

  return (
    <div style={{borderTop:"2px solid black"}}>
        <br />
        <br />
    <h2 className='text-center text-[1.2rem] font-[500]'>S H O P &nbsp; B Y &nbsp; C A T E G O R Y</h2>
    <br />
    <br />
    <div className='grid o sm:grid-cols-4 md:grid-cols-5  lg:grid-cols-6'>
        {categorydata.map((ele)=>{
            return(
                <div key={ele._id}>
       <img src={ele.imgurl} alt="" className='w-full'/>
       <h2 className='text-center font-bold'>{ele.title}</h2>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default ShopByCtaegory