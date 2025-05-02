import React from 'react';

const Section_title = ({heading,subheading}) => {
    return (
        <div className='text-center pt-10 md:w-3/12 mx-auto'>
            <p className='text-[#D99904] mb-3'>{subheading}</p>
           
            <h3 className='text-[40px] uppercase border-y-1 pb-4 '>{heading}</h3>
        </div>
    );
};

export default Section_title;