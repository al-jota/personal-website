import React from 'react';
import { Link } from 'react-router-dom';

export default function Header () {
  return (
    <>
      <header>
        <nav className="navbar">
          <button className="nav-link">
            <Link to='/' aria-current='page'>
              Home
            </Link>
          </button>
          <button className="nav-link">
            <Link to='/about/' aria-current='page'>
              About
            </Link>
          </button>
          <button className="nav-link">
            <Link to='/contact/' aria-current='page'>
              Contact
            </Link>
          </button>
        </nav>
        <div className='header'>
          <h1 className='header-text'>Allan Perry: Fullstack Developer</h1>
        </div>
      </header>
    </>
  )
}