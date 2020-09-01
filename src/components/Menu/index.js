import React from 'react'
import { 
  Link, 
  useStaticQuery, 
  graphql 
} from 'gatsby'
import Logo from '../Logo'


const Menu = () => {
  const {
    site: {
      siteMetadata: {menu}
    },
  } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          menu
        }
      }
    }
  `)
  return (
    <div className="header">
      <Logo/>
      <Link
        to='/'
        activeStyle={{ color: 'red' }}
        activeClassName='teste'>
          <div className="menu">
            {menu[0]}
          </div>
      </Link>
      <Link
        to='/about'
        activeStyle={{ color: 'red' }}
        activeClassName='teste'>
          <div className="menu">
            {menu[1]}
          </div>
      </Link>
    </div>
  )
}

export default Menu