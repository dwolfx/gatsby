import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
  <ul>
    <li>
      <Link to='/' activeStyle={{color: 'red'}}>Home</Link>
    </li>
    <li>
      <Link to='/about' activeStyle={{color: 'red'}}>About</Link>
    </li>
  </ul>
)

export default Menu