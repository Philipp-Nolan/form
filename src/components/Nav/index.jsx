import React from 'react';
import Logo from './logo.png';
import style from './style.module.sass';
import { BrowserRouter as BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className={style.nav}>
      <ul className={style.navList}>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <img src={Logo}></img>
        </li>
        <li>
          <Link to="/signin">SignIn</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
