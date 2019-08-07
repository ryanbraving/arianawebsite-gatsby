import React, { Component } from "react"
import styled from "styled-components"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LineShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  EmailIcon,
  LineIcon,
} from "react-share"

export default class shareSocialNetwork extends Component {
  render() {
    const shareUrl = "https://www.arianabraving.com/".concat(this.props.url)
    const title = this.props.title
    return (
      <TemplateWrapper>
        <div className="Demo__container">
          <div className="Demo__some-network">
            <FacebookShareButton
              url={shareUrl}
              quote={title}
              className="Demo__some-network__share-button"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>

          <div className="Demo__some-network">
            <TwitterShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            <div className="Demo__some-network__share-count">&nbsp;</div>
          </div>

          <div className="Demo__some-network">
            <TelegramShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>

            <div className="Demo__some-network__share-count">&nbsp;</div>
          </div>

          <div className="Demo__some-network">
            <WhatsappShareButton
              url={shareUrl}
              title={title}
              separator=":: "
              className="Demo__some-network__share-button"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            <div className="Demo__some-network__share-count">&nbsp;</div>
          </div>

          <div className="Demo__some-network">
            <LinkedinShareButton
              url={shareUrl}
              windowWidth={750}
              windowHeight={600}
              className="Demo__some-network__share-button"
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>

          <div className="Demo__some-network">
            <RedditShareButton
              url={shareUrl}
              title={title}
              windowWidth={660}
              windowHeight={460}
              className="Demo__some-network__share-button"
            >
              <RedditIcon size={32} round />
            </RedditShareButton>
          </div>

          <div className="Demo__some-network">
            <TumblrShareButton
              url={shareUrl}
              title={title}
              windowWidth={660}
              windowHeight={460}
              className="Demo__some-network__share-button"
            >
              <TumblrIcon size={32} round />
            </TumblrShareButton>
          </div>
          <div className="Demo__some-network">
            <LineShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <LineIcon size={32} round />
            </LineShareButton>
          </div>
          <div className="Demo__some-network">
            <EmailShareButton
              url={shareUrl}
              subject={title}
              body="body"
              className="Demo__some-network__share-button"
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
          </div>
        </div>
      </TemplateWrapper>
    )
  }
}

const TemplateWrapper = styled.div`
  .Demo__some-network {
    vertical-align: top;
    display: inline-block;
    margin-right: 15px;
    text-align: center;
  }

  .Demo__some-network__share-count {
    margin-top: 3px;
    font-size: 12px;
  }

  .Demo__some-network__share-button {
    cursor: pointer;
  }

  .Demo__some-network__share-button:hover:not(:active) {
    opacity: 0.75;
  }

  .Demo__some-network__custom-icon {
    width: 32px;
    height: 32px;
  }
`
