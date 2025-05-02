import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import banner from "../assets/Bannar/banner.webp"
import banner2 from "../assets/Bannar/banner2.webp"

const Banner = () => {
    return (
        <div  className='pb-10'>
            <AwesomeSlider>
    <div><img className='md:w-[1300px]  md:h-[800px] object-cover' src={banner} alt="" /></div>
    <div><img className='md:w-[1300px]  md:h-[800px] object-cover' src={banner2} alt="" /></div>
    <div><img className='md:w-[1300px]  md:h-[800px] object-cover' src={banner} alt="" /></div>
    <div><img className='md:w-[1300px]  md:h-[800px] object-cover' src={banner2} alt="" /></div>
    
  </AwesomeSlider>
        </div>
    );
};

export default Banner;