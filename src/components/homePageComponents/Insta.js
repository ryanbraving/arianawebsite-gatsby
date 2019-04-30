import React, { Component } from "react"
import InstagramEmbed from "react-instagram-embed"
import { Title, Section, styles } from "../../utils"
import styled from "styled-components"

export default class Insta extends Component {
  render() {
    return (
      <Section>
        <Title title="Instagram" message={"What Are the Most Liked Posts?"} />

        <InstaWrapper>
            <InstagramEmbed
                url="https://www.instagram.com/p/BszVyjOAuD4/?utm_source=ig_web_copy_link"
                maxWidth={120}
                hideCaption={true}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
            />
            <InstagramEmbed
                url="https://www.instagram.com/p/Bvx_DZWAoCC/?utm_source=ig_web_copy_link"
                maxWidth={120}
                hideCaption={true}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
            />
            <InstagramEmbed
                url="https://www.instagram.com/p/BtZ4db2A-YP/?utm_source=ig_web_copy_link"
                maxWidth={120}
                hideCaption={true}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
            />
        </InstaWrapper>
    </Section>
    )
  }
}

const InstaWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
  }

  @media (min-width: 980px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`
