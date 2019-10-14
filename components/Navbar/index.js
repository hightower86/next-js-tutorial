import React from 'react';
import Link from 'next/link';
import './Navbar.scss';

const index = () => {
  return (
    <nav>
      <Link href='/'>
        <a href=''>Home</a>
      </Link>
      <Link href='/about'>
        <a href=''>About</a>
      </Link>
      <Link href='/contacts'>
        <a href=''>Contacts</a>
      </Link>
    </nav>
  );
};

export default index;
