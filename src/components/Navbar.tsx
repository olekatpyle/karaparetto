import React from 'react';

export const Navbar: React.FC<{ theme: Theme }> = ({ theme }) => {
    return (
        <nav
            className={`w-1/4 h-screen sticky float-left border-r border-black`}
        ></nav>
    );
};

export default Navbar;
