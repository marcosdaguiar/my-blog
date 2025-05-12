import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className='nav'>
      <ul>
        <li><NavLink to= '/main'>Main</NavLink> </li>
        <li><NavLink to= '/articles'>Articles</NavLink> </li>
        <li><NavLink to= '/create-articles'>Create Articles</NavLink> </li>
        <li><NavLink to= '/contact'>Contact</NavLink> </li>
      </ul>
    </nav>
  )
}
