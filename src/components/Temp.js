import React from 'react'
import Imagetest from 'gatsby-image'
import {StaticQuery, graphql} from 'gatsby'

export default function Temp() {
  return (
    <StaticQuery
      query={graphql`
        query {
            placeholderImage: file(relativePath: {eq: "gatsby-astronaut.png"}) {
                childImageSharp {
                    fluid (maxWidth:300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
      `}
      render={data => (
        
            <Imagetest fluid={data.placeholderImage.childImageSharp.fluid} />
      )
    }
    />
  )
}
