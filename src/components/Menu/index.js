import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
  <div className="header">
    <Link
      to='/'
      activeStyle={{ color: 'red' }}
      activeClassName='teste'>
        <div className="menu">
          Home
        </div>
    </Link>
    <Link
      to='/about'
      activeStyle={{ color: 'red' }}
      activeClassName='teste'>
        <div className="menu">
          Sobre
        </div>
    </Link>
  </div>
)

export default Menu