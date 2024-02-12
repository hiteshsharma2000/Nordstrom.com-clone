import React, { useContext, useEffect, useState } from 'react'

import Cookies from 'js-cookie'
import Navsection from '../components/navsection'
import Trendingdata from '../components/Trendingdata'
import { useNavigate } from 'react-router-dom'
const SingleProduct = () => {
const navigate=useNavigate()

 const [page,setpage]=useState({})
 useEffect(()=>{
  setpage(JSON.parse(Cookies.get('Singleproduct')))
  console.log(JSON.parse(Cookies.get('Singleproduct')))
 },[])

  return (
    <div>
      <Navsection/>
      <br />
      <br />
      <br />
      <br />
      <br />
     
      <div 
      className='md:flex lg:flex sm:flex'
      > <div
        className="hidden sm:block md:block w-[25%] text-center "
        style={{ border: "1px solid black", }}
      >
       <img className='w-full h-full' src="https://assets.materialup.com/uploads/5dab2841-80f7-486f-8897-36f1a86a5f0b/preview.jpg" alt="" />
      </div>
      <div style={{width:"70%",display:'flex',gap:"3rem" ,textAlign:"start",justifyContent:"center"}} ><img className='ml-[20%]' style={{height:"35rem"}} src={page.imgurl} alt="" />
     
     <div> <h1 className='font-bold p-[1rem]' style={{textShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, #00FF00 0px -12px 30px,#FF0000 0px 4px 6px, #00FFFF 0px 12px 13px, #00FFFF 0px -3px 5px"}} 
     >{page.title}</h1>
<br />
      <p className='text-[1.3rem]'>Stylish garments crafted to enhance individual expression, merging comfort with trendsetting designs for every occasion.</p>
      <br />
      <p className='text-[1.4rem] font-[600]'>{page.price}</p>
      <br />
      <h2 className="text-[1.4rem]">★★★★☆</h2>
      <br />
      
     
      
      <button onClick={()=>{navigate('/order/address') }} style={{backgroundColor:"#0000FF", color:"white"}}>Buy Now</button>
      </div> </div>

    
      </div>
      <br />
      <br />
      <Trendingdata/>
    </div>
  )
}

export default SingleProduct