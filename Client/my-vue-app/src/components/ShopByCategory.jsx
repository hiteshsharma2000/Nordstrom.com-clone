import Cookies from 'js-cookie';
import React from 'react'
import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ShopByCtaegory = () => {
    
  const navigate=useNavigate()
    const [categorydata,setcategorydata]=useState([]);
    const [currentdata,setcurrentdata]=useState([]);


    const handlenavigate=()=>{
        if(Cookies.get('token')){
         navigate('/product')
       
        }else{
         navigate('/login')
        }
       }

    const getcategorydata=async ()=>{
        try {
            let responce=await fetch('https://nordstrombackend-cej0unf54-hiteshsharma2000s-projects.vercel.app/category',{
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
    const getcurrentdata=async ()=>{
        try {
            let responce=await fetch('https://nordstrombackend-production.up.railway.app/shop',{
                method:"GET",
                headers:{
                    "Conetnt-Type":"application/json"
                }
            })
            responce=await responce.json()
            setcurrentdata(responce.data)
        console.log(responce.data);
        } catch (error) {
            console.log(error.message);
        }
        }
        
        useEffect(()=>{
            getcategorydata();
            getcurrentdata();
        },[])

  return (
    <div className='ml-[2%] '>
    
    <div style={{borderTop:"2px solid black"}}>
        <br />
        <br />
    <h2 className='text-center text-[1.2rem] font-[500]'>S H O P &nbsp; B Y &nbsp; C A T E G O R Y</h2>
    <br />
    <br />
    <div className='grid  sm:grid-cols-4 md:grid-cols-5  lg:grid-cols-6'>
        {categorydata.map((ele)=>{
            return(
                <div key={ele._id} onClick={()=>{handlenavigate()}}>
       <img src={ele.imgurl} alt="" className='w-full'/>
       <h2 className='text-center font-bold'>{ele.title}</h2>
                </div>
            )
        })}
    </div>
    </div>
    <div >
        <br />
        <br />
        <br />
    <h2 className='text-center text-[1.35rem] font-[645]'>C U R R E N T L Y  &nbsp; &nbsp; L O V I N G</h2>
    <p className='text-center'>Explore favorite looks from Instagram. Tag @Nordstrom to show us your finds.</p>
    <br />
    <br />
    <div id='shopbycategory' className='grid gap-[.7rem]  sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-4'>
        {currentdata.map((ele)=>{
            return(
                <div key={ele._id}>
       <img src={ele.imgurl} alt="" className='w-full'/>
     
                </div>
            )
        })}
    </div>
    </div>
    </div>
  )
}

export default ShopByCtaegory