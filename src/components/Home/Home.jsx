import React from 'react';
import Banner from '../Banner/Banner';
import CategorySection from '../../Pages/Category/CategorySection';
import RecentListings from '../../Pages/RecentListings/RecentListings';


const recentListtingPromise = fetch('http://localhost:3000/latest-models').then(res => res.json())



const Home = () => {
    return (
        <div className=' '>
             <Banner></Banner>
             <CategorySection></CategorySection>
             <RecentListings recentListtingPromise={recentListtingPromise}></RecentListings>

             
            
        </div>
    );
};

export default Home;