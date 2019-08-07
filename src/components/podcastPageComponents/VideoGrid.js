import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { styles } from "../../utils"
import styled from "styled-components"

export default class VideoGrid extends Component {
  render() {
    const { id, title, subtitle, imageCover } = this.props.video

    return (
      <VideoWrapper>
        <Link
          to={`/videocast/${id}`}
          className="link-group"
          activeClassName="active"
        >
          <div className="parentDiv">
            <Img className="image" fluid={imageCover.fluid} />
            <p className="info">تصویری</p>
          </div>
          <h2 className="title">{title}</h2>
          <p className="subtitle">{subtitle}</p>

          {/* <video poster={imageCover}>
            <source src={sourceUrl} type="video/mp4" /> */}
          {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
          {/* Your browser does not support HTML5 video.
          </video> */}
        </Link>
      </VideoWrapper>
    )
  }
}

const VideoWrapper = styled.div`
  /* border: 3px solid grey; */
  text-align: center;
  padding: 1rem;
  border-radius: 5px 5px 5px 5px;
  -moz-border-radius: 5px 5px 5px 5px;
  -webkit-border-radius: 5px 5px 5px 5px;
  ${styles.transition({ time: "0.7s" })};
  &:hover {
    -webkit-box-shadow: 0px 0px 9px 7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 9px 7px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 9px 7px rgba(0, 0, 0, 0.75);
  }
  direction: rtl;
  text-align: center;
  color: ${styles.colors.mainBlack};
  .title {
    text-align: center;
    text-transform: capitalize;
    letter-spacing: 0rem;
    margin: 1rem;
  }
  .subtitle {
    line-height: 1.5rem;
    text-align: center;
    color: ${styles.colors.mainYellow};
  }

  .link-group {
    text-decoration: none;
    color: ${styles.colors.mainBlack};
  }
  .active {
    background: transparent;
    color: ${styles.colors.mainYellow};
    ${styles.border({ color: "currentColor", width: "0.15rem" })};
    border-radius: 0px 0px 10px 10px;

    /* border-bottom: 2px solid currentColor; 
      padding-bottom:0;  */
  }
  .image {
    margin: 1rem 0rem;
    /* min-height: 250px; */
  }
  .parentDiv {
    position: relative;
  }
  .info {
    position: absolute;
    top: 0;
    right: 0;
    color: ${styles.colors.mainWhite};
    background: ${styles.colors.mainYellow};
    background: green;
    text-transform: capitalize;
    padding: 0.2rem 0.3rem;
  }
`
