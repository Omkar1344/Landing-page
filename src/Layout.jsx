import React from 'react'
import {Outlet} from 'react-router-dom';
import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import './Layout.css';

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout