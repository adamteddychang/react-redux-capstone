import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import {BsInfoCircleFill } from 'react-icons/bs';
import './header.css'

function Header() {
  return (
    <header>
      <NavLink to="/" exact>
        <AiFillHome color="#fff" fontSize="2rem" />
      </NavLink>
      <h3>The games</h3>
      <div>        
        <NavLink to="/about">
          <BsInfoCircleFill color="#fff" fontSize="2rem"/>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;