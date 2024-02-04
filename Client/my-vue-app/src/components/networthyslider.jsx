import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const Networthyslider = () => {

  
  
    const handleBackClick = () => {
      Slider.ButtonBack
    };
  
    const handleNextClick = () => {
      Slider.ButtonNext
    };
  
  return (

    <div className='mb-4 pb-0 h-[45vh] sm:h-[50vh] md:h-[50vh] lg:h-[50vh] md:mb-[24rem] lg:mb-[24rem] '  >
      <hr style={{width:"97%",margin:"auto",border:"1px solid black"}}/>
   <br />
     <br /> <h1 className='text-center text-[1.5rem] '>N E W & N O T E W O R T H Y</h1>
      <br />
      <br />

    <div className='mb-20 pb-0 h-[45vh] sm:h-[50vh] md:h-[50vh] lg:h-[50vh] md:mb-[24rem] lg:mb-[24rem] ' >

    <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={125}
    totalSlides={2}
    infinite={true}
    isPlaying={true}
  
    
  >
    <Slider>
      <Slide index={0}>
      <div className='w-[100%] block sm:flex md:flex lg:flex' >
        <img className='md:absolute sm:absolute lg:absolute w-full' src="https://n.nordstrommedia.com/it/0b9f3f56-938e-489a-b930-9c547bc3a731.jpeg?h=700&w=1608" alt=""  />
      
        <div className=' items-center sm:ml-[70%]  grid gap-[1.2rem] sm:mt-[10%] md:ml-[70%] md:mt-[10%] lg:ml-[66%] lg:mt-[10%] md:relative sm:relative lg:relative' >
            <h1 className='text-[1rem] m-auto sm:text-[2.6rem] md:text-[2.6rem] lg:text-[2.6rem] font-bold'>PAT McGRATH LABS: Now at Nordstrom</h1>
            <p>Discover gorgeous, iconic products from one of the most influential makeup artists in the world</p>
            <div id="highlighted" className='md:flex lg:flex gap-[20px]  mb-2' >
               <p className='border-b-2 hover:border-black '>PAT McGRATH LABS</p>
              
            </div>
          </div>
      </div>

      </Slide>
      <Slide index={1}>
        <div className='w-[100%] block sm:flex md:flex lg:flex' >
        <img className='md:absolute sm:absolute lg:absolute' src="https://n.nordstrommedia.com/it/b1141cdd-95a0-4be6-9fc0-d0f85d79e151.jpeg?h=700&w=1608" alt=""  />
      
        <div className=' items-center grid gap-[1.2rem] sm:ml-[70%] sm:mt-[10%] md:ml-[70%] md:mt-[10%] lg:ml-[65%] lg:mt-[10%] md:relative sm:relative lg:relative' >
            <h1 className='text-[1rem] m-auto sm:text-[2.6rem] md:text-[2.6rem] lg:text-[2.6rem] font-bold'>Prada Beauty Is Here, Including Nordstrom-Exclusive Prada Skin</h1>
            <p>Discover Prada Beauty, an invitation to explore all the shades of you. Plus, Nordy Club members earn 5X the points on beauty!</p>
            <div id="highlighted1" className='md:flex lg:flex gap-[20px]  mb-2' >
               <p className='border-b-2 hover:border-black '>Shop Prada Beauty</p>
               <p className='border-b-2 hover:border-black '>See Offer Restrictions</p>
              </div>
          </div>
      </div>

      </Slide>
     
    </Slider>
    <div className="invisible sm:visible md:visible lg:visible  absolute top-0 left-0 right-0 bottom-[8%] flex items-center  justify-between">
          <ButtonBack className="absolute left-0 p-4 text-[2rem]  opacity-40 hover:opacity-100 hover:bg-black-700 " onClick={handleBackClick}>
             ⫷
          </ButtonBack>
          <ButtonNext className="absolute right-0 p-4 text-[2rem] opacity-40 hover:opacity-100 hover:bg-black-700" onClick={handleNextClick}>
          ⫸
          </ButtonNext>
        </div>
  </CarouselProvider>
  <br />
  <br />
  <br />

           ⬅️
          </ButtonBack>
          <ButtonNext className="absolute right-0 p-4 text-[2rem] opacity-40 hover:opacity-100 hover:bg-black-700" onClick={handleNextClick}>
          ➡️
          </ButtonNext>
        </div>
  </CarouselProvider>

  </div>
  )
}

export default Networthyslider