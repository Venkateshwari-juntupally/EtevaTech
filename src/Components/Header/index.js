import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
      <div className='logo'>
      <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <Link className='heading' to='/'><h1 ><span>E</span>Commerce <span>A</span>pp</h1></Link>
    </div>
  );
};


export default Header;