import React from 'react';
import Footer from '../components/Footer';
import { NavMenu } from '../components/NavMenu';

export function Layout ({children}) {

    return (
      <>
        <NavMenu />
        {children}
        <Footer/>
      </>
    );
}
