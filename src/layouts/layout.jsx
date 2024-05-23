import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/layouts/header/Header.jsx';
import Footer from '@/layouts/footer/Footer.jsx'

const Layout = () => {
    return (
        <div className='layout'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;