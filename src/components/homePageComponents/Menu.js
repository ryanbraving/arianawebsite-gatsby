import React from 'react'
import Product from './Product'
import {Section, Title, SectionButton} from '../../utils'
import styled from 'styled-components'
import { StaticQuery , graphql} from 'gatsby'
import {Link} from 'gatsby'

const ITEMS = graphql`
query{
  items: allContentfulMenu {
    edges {
      node {
        name
        price
        id
        ingredients
        img {
          fixed(width: 150, height: 150) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
  
`

export default function Menu() {
  return (
    <Section>
      <Title title='featured items' message={'little taste'}/>
        <MenuWrapper>
          <StaticQuery 
            query={ITEMS}
            render={data => {
                return(
                    data.items.edges.map(item => {
                        return(
                            <Product key={item.node.id} product={item.node} />
                        )
                    })
                )
            }}
              />

        </MenuWrapper>      
        <Link to='/menu' style={{textDecoration: 'none'}}>
           <SectionButton style={{margin: '2rem auto'}}> menu </SectionButton>
        </Link>
        {/* <Product /> */}
     </Section>
  )
}


const MenuWrapper = styled.div`
margin: 3rem 0;
display: grid;
grid-template-columns: 100%;
grid-row-gap: 3rem;
@media (min-width:576px){
    grid-template-columns: 95%;
}
@media (min-width:776px){
    grid-template-columns: 80%;
    justify-content: center;
}
@media (min-width:992px){
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
}
`