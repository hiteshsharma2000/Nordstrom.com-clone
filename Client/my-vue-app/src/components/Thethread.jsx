import React, { useEffect, useState } from 'react'

const Thethread = () => {

    const [threaddata, setthreaddata] = useState([]);

    const getthreaddata = async () => {
      try {
        let responce = await fetch("https://nordstrombackend-production.up.railway.app/thread", {
          method: "GET",
          headers: {
            "Conetnt-Type": "application/json",
          },
        });
        responce = await responce.json();
        setthreaddata(responce.data);
        console.log(responce.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    useEffect(() => {
      getthreaddata();
    }, []);

  return (
    <>
    <hr style={{width:"97%",margin:"auto",border:".6px solid black"}}/>
    <br />
    <br />
    <div className='text-center align-center grid gap-2'>

        <h3 className='font-bold text-[1.4rem]'>T H E&nbsp; T H R E A D</h3>
        <p>Your go-to destination for all things fashion, beauty and lifestyle at Nordstrom.</p>
   
        <h4 className='underline hover:font-bold text-[1.1rem] '>Get Inspired
        </h4>
    </div>
    <br />
    <br />
    <div id="thread" className=' grid grid-cols-1 ml-[22px] mr-[10px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-[2]'>
        {threaddata.map((ele)=>{
return(
    <div className='grid gap-2.5' key={ele._id} >
            <img  src={ele.imgurl} alt="" />
            <h3 style={{cursor:"pointer"}}>{ele.title}</h3>
            <p style={{cursor:"pointer"}}>{ele.description}</p>
            <div  className='md:flex lg:flex gap-[20px]  mb-2' >
               <p className='border-b-2 hover:border-black' style={{cursor:"pointer"}}>{ele.para1}</p>
               <p className='border-b-2 hover:border-black ' style={{cursor:"pointer"}}>{ele.para2}</p>
            </div>
        </div>
)
 })}
       </div>
   
    </>
  )
}

export default Thethread