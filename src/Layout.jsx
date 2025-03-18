import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
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
