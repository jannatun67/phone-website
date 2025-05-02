import React from 'react';
import Banner from '../componet/Banner';
import Category from '../componet/Category';
import MobistoreBd from './Home/MobistoreBd';

const HomePage = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <MobistoreBd></MobistoreBd>
        </div>
    );
};

export default HomePage;