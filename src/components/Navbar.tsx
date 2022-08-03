import React from 'react';

export const Navbar: React.FC<{ float: string }> = ({ float }) => (
  <nav className={'w-1/4 h-screen sticky float-' + float}></nav>
);

export default Navbar;
