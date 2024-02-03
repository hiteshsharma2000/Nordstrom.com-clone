import React from 'react'

const Thethread = () => {
  return (
    <>
    <div className='text-center align-center grid gap-2'>

        <h3 className='font-bold text-[1.4rem]'>THE THREAD</h3>
        <p>Your go-to destination for all things fashion, beauty and lifestyle at Nordstrom.</p>
   
        <h4 className='underline hover:font-bold text-[1.1rem] '>Get Inspired
        </h4>
    </div>
    <br />
    <br />
    <div id="thread" className='grid grid-cols-1 ml-[22px] mr-[10px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-[2]'>
        
        <div className='grid gap-2.5' >
            <img src="https://n.nordstrommedia.com/it/effaf479-54ca-493b-9faf-8bd46df3463b.jpeg?h=516&w=536" alt="" />
            <h3>The Valentine's Day Dress Edit</h3>
            <p>No matter what you're up to this V-Day, there's a sweet one-and-done dress style to suit your mood and plans.</p>
            <div  className='md:flex lg:flex gap-[20px]  mb-2' >
               <p className='border-b-2 hover:border-black '>Shop Valentine's Day Dresses</p>
               <p className='border-b-2 hover:border-black '>Read the Story</p>
            </div>
        </div>
        <div className='grid gap-2.5'>
            <img src="https://n.nordstrommedia.com/it/b6d8f9a3-307b-45b6-a43a-9bbc8371dced.jpeg?h=516&w=536" alt="" />
            <h3>Spotlight On: Marco De Vincenzo, Designer & Etro Creative Director</h3>
            <p>Dive into Etro's latest runway collection with creative director Marco De Vincenzo.</p>
            <div className='md:flex lg:flex gap-[20px]' >
               <p className='border-b-2 hover:border-black '>Shop Etro</p>
               <p className='border-b-2 hover:border-black '>Read the Story</p>
            </div>
        </div>
        <div className='grid gap-2.5'>
            <img src="https://n.nordstrommedia.com/it/76a99da3-36c4-483b-af89-73b7ea9ce9e0.jpeg?h=516&w=536" alt="" />
            <h3>The Buy: 6 Wear-Forever Jewelry Pieces We Love</h3>
            <p>Our team shares the fine and designer baubles currently topping their wish lists.</p>
            <div className='md:flex lg:flex gap-[20px]' >
               <p className='border-b-2 hover:border-black '>Shop Fine Jewelry</p>
               <p className='border-b-2 hover:border-black '>Read the Story</p>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Thethread