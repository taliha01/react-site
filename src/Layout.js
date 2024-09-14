import React from 'react';
import Navbar from './Navbar/navbar';
import Topbar from './Topbar/topbar';
import Lastbar from './Lastbar/lastbar';
import Slider from './Slider/slider'
import Natural from './Natural/natural'
import Box from './Box/box'
import Free from './Free/free'
import Boy from './Boy/boy'
import Main from './Main/main';
import Ship from './Ship/ship'
import Footer from './Footer/footer'
import  Foter from './Foter/foter'
import Topbr from './Topbr/topbr'

const Layout = () => {
    return (
      <div className="main-layout">

        <Navbar />
        <Topbar />
        <Lastbar />
        <Slider/>
        <Natural />
        <Box />
        <Free />
        <Boy />
        <Main />
        <Ship />
        <Footer />
        <Foter />
       <Topbr />
       
      </div>
    );
  };

export default Layout;
