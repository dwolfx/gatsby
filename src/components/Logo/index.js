import React from 'react';
import { useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
// import { Container } from './styles';

const Logo = () => {
  const { logoImg } = useStaticQuery(
    graphql`
      query {
        logoImg: file(relativePath: {
          eq: "wolp_logo.png"
        }) {
          childImageSharp {
            fixed(width: 10 0, height: 100){
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return <Img fixed={logoImg.childImageSharp.fixed} />
}

export default Logo;