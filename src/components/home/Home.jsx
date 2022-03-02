import React from "react";
import './Home.css'

import Header from '../header/Header.jsx';
import Tours from '../tours/Tours.jsx';
import Footer from '../footer/Footer.jsx';
import data from  '../../data/data.json';

function Home() {

  return (
    <div>

      <Header />
      <Tours data={data}/>
      <Footer />
      
    </div>
  );
}

export default Home;
