import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const languages = [
    {
      name: 'PageOne',
      param: 'page/one'
    }, {
      name: 'PageTwo',
      param: 'page/two'
    }
  ];

  return (
    <ul>
      {languages.map(({ name, param }) => (
        <li key={param}>
          <NavLink activeStyle={{ fontWeight: 'bold' }} to={`/${param}`}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
