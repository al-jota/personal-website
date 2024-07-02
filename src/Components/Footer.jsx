import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer () {
  return (
    <>
      <footer>
        {/* <nav className="navbar">
          <button className="nav-link">
            <Link to='/' aria-current='page'>
              Footer
            </Link>
          </button>
        </nav> */}
        <div className='footer'>
          <h1 className='footer-text'>&copy; 2024 Allan Perry. All rights reserved.</h1>
        </div>
      </footer>
    </>
  )
}