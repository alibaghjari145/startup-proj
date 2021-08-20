import React from 'react';
import ReactDOM from 'react-dom';
import HeaderMenu from './cmp/web/headerMenu'
import Header from './cmp/web/header'
import Feature from './cmp/web/feature';
import Footer from './cmp/web/footer';
import Offers from './cmp/web/offers';

ReactDOM.render(
  <React.StrictMode>
    <HeaderMenu />
    <Header/>
    <Feature/>
    <Offers box='job' />
    <Offers box='expert'/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);


