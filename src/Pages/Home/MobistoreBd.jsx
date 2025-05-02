import React from 'react';

const MobistoreBd = () => {
    return (
      <div className='py-10'>
          <div
        className="relative bg-cover bg-center h-[300px] md:h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url('https://www.popsci.com/wp-content/uploads/2019/01/07/BEDTJHTFURFYLNG55ENNGHDCEM.jpg?quality=85&w=1200')`, // replace with actual image path
        }}
      >
        <div className="bg-white bg-opacity-90 p-6 md:p-10 rounded shadow-md max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
          MobistoreBD
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus 
            laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius 
            dolore et, nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
      </div>
    );
};

export default MobistoreBd;