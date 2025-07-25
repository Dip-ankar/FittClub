import React from 'react';
import Hero from '../components/Herosection/Hero';
import Programs from './Programs/Programs';
import Reasons from './Reason/Reasons';
import Plans from './Plans/Plans';
import Testimonials from './Testimonials/Testimonials';
import Join from './Join/Join';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </>
  );
};

export default Home;
