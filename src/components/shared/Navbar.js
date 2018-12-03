import React from 'react';
import { Link } from 'react-router-dom';
import { SideNav } from 'react-materialize';
import Logo from '../../imgs/find-logo.png';

const Navbar = () => (
  <SideNav fixed>
    <img src={Logo} className="logo"/>
    <li>
      <Link to='/' className="navLinks">
        <i className="material-icons">home</i>
        Home
      </Link>
    </li>
    <li>
      <Link to='/lessons' className="navLinks">
        <i className="material-icons">subtitles</i>
        Lessons
      </Link>
    </li>
    <li>
      <Link to='/assignments' className="navLinks">
        <i className="material-icons">assignment</i>
        Assignments
      </Link>
    </li>
    <li>
      <Link to='/resources' className="navLinks">
        <i className="material-icons">view_array</i>
        Resources
      </Link>
    </li>
    <li>
      <Link to='/calendar' className="navLinks">
        <i className="material-icons">calendar_today</i>
        Calendar
      </Link>
    </li>
  </SideNav>
)

export default Navbar;