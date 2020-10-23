import React, { useEffect, useState } from 'react';

import './PageHome.css';
import Header from '@components/Header';
import Hero from '@components/Hero';
import Footer from '@components/Footer';
import PageHomeIntro from './PageHomeIntro';

const PageHome: React.FC = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      const currentPosition = window.pageYOffset;

      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHeaderSticky = !!(scrollTop > 0);

  return (
    <main className="PageHome">
      <Header isSticky={isHeaderSticky} />
      <Hero />
      <PageHomeIntro />
      <Footer />
    </main>
  );
};

export default PageHome;
