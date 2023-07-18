import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id='navbar'>
      <div className='link'>
      <img class="hero" src="/images/JDM.webp" alt="JDM" />
          <li>
            <Link className='white' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='white' to='/product'>
              Product
            </Link>
          </li>
          <li>
            <Link className='white' to='/contact'>
              Contact
            </Link>
          </li>
      </div>
      {/* <hr />  <hr /> */}
    </nav>
    
  );
};

export default Navbar;
