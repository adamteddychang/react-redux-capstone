import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsInfoCircleFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { cleanDetails } from '../redux/gameDetails';

import './header.css';

function Header() {
  const dispatch = useDispatch();
  const homeClick = () => {
    dispatch(cleanDetails());
  };
  return (
    <header>
      <NavLink to="/" onClick={homeClick}>
        <AiFillHome color="#fff" fontSize="2rem" />
      </NavLink>
      <h3>The games</h3>
      <div>
        <NavLink to="/about">
          <BsInfoCircleFill color="#fff" fontSize="2rem" />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
