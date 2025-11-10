import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';


const MainLayout = () => {
    return (
        <div className='text-primary bg-[#F8F1E8] '>

            <header className='bg-[#D9BFA2] max-w-full '>
                    <Navbar></Navbar>
                   
            </header>
            
            <main className='w-11/12 mx-auto  min-h-screen'>
                <Outlet></Outlet>
            </main>

            <footer className='bg-[#D9BFA2]  max-w-full md:mt-20'>
                <Footer></Footer>
            </footer>

            
        </div>
    );
};

export default MainLayout;