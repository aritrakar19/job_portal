import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
// import Categories from '../components/Categories';
import About from '../pages/About';
import FindJobs from './FindJobs';
import HowItWorks from '../pages/HowItWorks';
import Contact from '../pages/Contact';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>
      <div id="find-jobs">
        <FindJobs />
      </div>
      
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="contact">
        <Contact />
      </div>
      {/* <Categories /> */}
    </div>
  );
};

export default Home; 