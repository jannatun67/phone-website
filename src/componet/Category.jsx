import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import iphone from "../assets/phone-category/iphone.webp"
import oppo from "../assets/phone-category/oppo.png"
import samsung from "../assets/phone-category/samsung.webp"
import redmi from "../assets/phone-category/Redmi.webp"
import onePluse from "../assets/phone-category/1+.jpg"
import realme from "../assets/phone-category/realme.jpg"
import Section_title from './Section_title';

const Category = () => {
    return (

        <section>
            
            <Section_title
            subheading={'---From 11:00am to 10:00pm---'}
            heading={"ORDER ONLINE"}
            >   
            </Section_title>
        <div className='py-14'>
             <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
            <img className='rounded-3xl md:h-[500px]   object-cover' src={iphone} alt="" />
            <h3 className='text-3xl uppercase text-center -mt-24 py-10'>iphone</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl md:h-[500px]   object-cover' src={oppo} alt="" />
            <h3 className='text-3xl uppercase text-center -mt-24 py-10'>oppo</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl md:h-[500px]   object-cover' src={samsung} alt="" />
            <h3 className='text-3xl uppercase text-center -mt-24 '>samsung</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl md:h-[500px]   object-cover' src={onePluse} alt="" />
        <h3 className='text-3xl uppercase text-center -mt-24 '>1+</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl md:h-[500px]   object-cover' src={redmi} alt="" />
        <h3 className='text-3xl uppercase text-center -mt-24 '>Redmi</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl md:h-[500px]   object-cover' src={realme} alt="" />
        <h3 className='text-3xl uppercase text-center -mt-24 '>realme</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl md:h-[500px]   object-cover' src={oppo} alt="" />
        <h3 className='text-3xl uppercase text-center -mt-24 py-10'>oppo</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-3xl md:h-[500px]   object-cover' src={iphone} alt="" />
        <h3 className='text-3xl uppercase text-center -mt-24 py-10'>iphone</h3>
        </SwiperSlide>
        <SwiperSlide> 
             <img className='rounded-3xl md:h-[500px]   object-cover' src={realme} alt="" />
        <h3 className='text-3xl uppercase text-center -mt-24 '>realme</h3>
        </SwiperSlide>
      </Swiper>
        </div>
        </section>
    );
};

export default Category;