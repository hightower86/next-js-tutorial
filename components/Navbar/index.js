import React from 'react';
import Link from 'next/link';
import '../../scss/style.scss';
//import './navbar.css';

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
      {/* <style jsx global>{`
        a {
          margin-right: 10px;
          text-decoration: none;
          link-style: none;
          color: red;
        }
      `}</style> */}
    </nav>
  );
};

export default index;
