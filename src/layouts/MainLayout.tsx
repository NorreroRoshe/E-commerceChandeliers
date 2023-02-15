import React from 'react';

import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer/index';
import ScrollToTop from 'react-scroll-to-top';

// export const SearchContext = React.createContext('');              //Так работает контекст

const MainLayout: React.FC = () => {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop smooth top={250} />
    </div>
  );
};

export default MainLayout;
