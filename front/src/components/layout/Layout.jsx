import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import LeftBar from '../leftBar/LeftBar';

const Layout = () => {
  return (
    <div>
      <Header />
      <LeftBar />
      <Outlet />
    </div>
  );
};

export default Layout;
