import React from 'react';
import { element } from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: element,
};

export default Layout;