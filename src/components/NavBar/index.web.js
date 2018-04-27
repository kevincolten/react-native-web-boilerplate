import React from 'react';
import { NavLink } from 'react-router-dom';
import links from './links';

export default function Navbar() {
  return (
    <ul>
      {links.map(({ name, param }) => (
        <li key={param}>
          <NavLink activeStyle={{ fontWeight: 'bold' }} to={`/${param}`}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
