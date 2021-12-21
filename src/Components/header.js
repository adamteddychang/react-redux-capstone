import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import {BsInfoCircleFill } from 'react-icons/bs';

function Header() {
  return (
    <header>
      <NavLink to="/">
        <AiFillHome />
      </NavLink>
      <div>        
        <NavLink to="/about">
          <BsInfoCircleFill />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;