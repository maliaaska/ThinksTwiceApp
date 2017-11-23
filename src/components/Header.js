import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>ThinkTwice</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard </NavLink>
    <NavLink to="/create" activeClassName="is-active">Expense Create </NavLink>
  </header>
);

export default Header;
