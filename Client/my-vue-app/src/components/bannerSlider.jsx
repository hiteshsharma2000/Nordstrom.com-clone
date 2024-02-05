import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const BannerSlider = () => {
    
    
    return (
        <div className='mb-[8rem] sm:mb-0   h-[45vh]  md:h-[60vh] lg:h-[60vh] md:mb-[18rem] lg:mb-[18rem] ' >
         <br />

      <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={2}
      infinite={true}
      isPlaying={true}
    
      
    >
      <Slider>
        <Slide index={0}>
        <div className=' w-[100%] block sm:flex md:flex lg:flex' >
          <img className='md:absolute sm:absolute lg:absolute w-full' src="https://n.nordstrommedia.com/it/d7dc97b1-34a4-4cc6-8328-3911a9d49698.jpeg?h=700&w=1608" alt=""  />
        
          <div className=' items-center sm:ml-[70%]  grid gap-[1.2rem] sm:mt-[10%] md:ml-[68%] md:mt-[10%] lg:ml-[68%] lg:mt-[10%] md:relative sm:relative lg:relative' >
              <h1 className='text-[1rem] m-auto   lg:text-[2.6rem] font-bold'>PAT McGRATH LABS: Now at Nordstrom</h1>
              <p>Discover gorgeous, iconic products from one of the most influential makeup artists in the world</p>
              <div id="highlighted3" className='md:flex lg:flex gap-[20px]  mb-2' >
                 <p className='border-b-2 hover:border-black '>PAT McGRATH LABS</p>
                
              </div>
            </div>
        </div>
  
        </Slide>
        <Slide index={1}>
          <div className='w-[100%] block sm:flex md:flex lg:flex' >
          <img className='md:absolute sm:absolute lg:absolute w-full' src="https://n.nordstrommedia.com/it/e6155dfe-0097-4b74-8eb2-04c6ead0c334.jpeg?h=700&w=1608" alt=""  />
        
          <div className=' items-center grid gap-[1.2rem] sm:ml-[70%] sm:mt-[10%] md:ml-[70%] md:mt-[10%] lg:ml-[65%] lg:mt-[10%] md:relative sm:relative lg:relative' >
              <h1 className='text-[1rem] m-auto   lg:text-[2.6rem] font-bold'>Prada Beauty Is Here, Including Nordstrom-Exclusive Prada Skin</h1>
              <p >Discover Prada Beauty, an invitation to explore all the shades of you. Plus, Nordy Club members earn 5X the points on beauty!</p>
              <div id="highlighted4" className='  md:flex lg:flex gap-[20px]  mb-2' >
                 <p className='border-b-2 hover:border-black text-auto '>Shop Prada Beauty</p>
                 <p className='border-b-2 hover:border-black text-auto'>See Offer Restrictions</p>
                </div>
            </div>
        </div>
  
        </Slide>
       
      </Slider>
     
    </CarouselProvider>
  
    </div>
    )
}

export default 
BannerSlider