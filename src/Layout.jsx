import React from 'react';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
       <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
//so the above code lets us design the ui in such a way that no matter where we navigate header component and footer component change and in outlet dynamically 
//page data is fetched and shown 

export default Layout;
