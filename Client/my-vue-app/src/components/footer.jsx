import React from 'react';

const Footer = () => {
    return(
      <div style={{width:"100%"}}>
         <div className='flex flex-wrap justify-start md:justify-end sm:justify-start  md:justify-end sm:text-center md:text-center md:items-center w-full '>
      <p className='text-[1.2em] ml-1 sm:ml-4 md:ml-6 lg:ml-0'>Get Email Updates:&nbsp;&nbsp;</p>
      <input
        type="text"
        className='focus:border-gray-300 pl-2 h-[2.7rem] lg:w-[20rem] lg:h-[2.7rem] sm:h-[2.7rem] border border-black rounded-none'
        placeholder='Email Address'
      />
      <button
      style={{borderRadius:"0",marginRight:"15px"}}
        className='bg-black text-white text-center  lg:text-base h-[2.7rem] lg:pr-[10rem] lg:pl-[6rem] g-[5px] lg:h-[2.7rem] w-auto lg:w-[7rem] ml-2 '
      >
        Sign&nbsp;up
      </button>
    </div>
        <div id='mainfootercomponent' >
        <div className="container  py-8">
      <div className="grid grid-cols-1 ml-[-10px] mr-[-10px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        
          <div className="footer-links">
            <p>Customer Service</p>
            <p >Contact Us</p>
            <p >Order Status</p>
            <p >Shipping</p>
            <p >Return Policy & Exchanges</p>
            <p >Price Adjustments</p>
            <p >Gift Cards</p>
            <p >FAQ</p>
            <p >Product Recalls</p>
            <p >India</p>
          </div>
          <div className="footer-links">
            <p>Customer Service</p>
            <p >Contact Us</p>
            <p >Order Status</p>
            <p >Shipping</p>
            <p >Return Policy & Exchanges</p>
            <p >Price Adjustments</p>
            <p >Gift Cards</p>
            <p >FAQ</p>
            <p >Product Recalls</p>
            <p >India</p>
          </div>
          <div className="footer-links">
            <p>Customer Service</p>
            <p >Contact Us</p>
            <p >Order Status</p>
            <p >Shipping</p>
            <p >Return Policy & Exchanges</p>
            <p >Price Adjustments</p>
            <p >Gift Cards</p>
            <p >FAQ</p>
            <p >Product Recalls</p>
            <p >India</p>
          </div>
          <div className="footer-links">
            <p>Customer Service</p>
            <p >Contact Us</p>
            <p >Order Status</p>
            <p >Shipping</p>
            <p >Return Policy & Exchanges</p>
            <p >Price Adjustments</p>
            <p >Gift Cards</p>
            <p >FAQ</p>
            <p >Product Recalls</p>
            <p >India</p>
          </div>
          <div className="footer-links">
            <p>Customer Service</p>
            <p >Contact Us</p>
            <p >Order Status</p>
            <p >Shipping</p>
            <p >Return Policy & Exchanges</p>
            <p >Price Adjustments</p>
            <p >Gift Cards</p>
            <p >FAQ</p>
            <p >Product Recalls</p>
            <p >India</p>
          </div>
     
        </div>
      </div>

      
        <div className="container mx-auto text-black">
          <div id='rights-reserved' className="footer-copyright">
            <p className="text-center">&copy;2024 Nordstrom, Inc. All rights reserved.</p>
          </div>
        
      </div>
    </div>
</div>
    )
    }

export default Footer;