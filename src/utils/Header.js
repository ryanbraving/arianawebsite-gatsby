import React from "react"
import styled from "styled-components"
// import img from "../images/bcg/homeBcg.jpeg";
import Img from "gatsby-image"

function HomeHeader({ img, children }) {
  return (
    <IndexHeaderWrapper img={img}>
      <Img fluid={img} />

      {children}
    </IndexHeaderWrapper>
  )
}

function PageHeader({ img, children }) {
  return (
    <PageHeaderWrapper img={img}>
      <Img fluid={img} />
      {children}
    </PageHeaderWrapper>
  )
}

function GalleryHeader({ img, children }) {
  console.log(img.src)
  return (
    <GalleryHeaderWrapper img={img}>
      {/* <img src={img.src} alt="" /> */}
      <Img fluid={img} />
      {children}
    </GalleryHeaderWrapper>
  )
}

// const IndexHeaderWrapper = styled.div`
const IndexHeaderWrapper = styled.header`
  /* margin-top: 5rem; */
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${props => props.img.src}) center center/cover fixed no-repeat;

  /* background-position: 0px 50px; */
  /* min-height: calc(100vh - 54.8px); */
  /* min-height: calc(100vh - 63px); */

  min-height: calc(100vh);
  /* background-size: 1300px 1000px; */
  /* min-height: calc(100vh - 135px); */

  display: flex;
  justify-content: center;
  align-items: center;
`

const PageHeaderWrapper = styled(IndexHeaderWrapper)`
  min-height: 90vh;
`

const GalleryHeaderWrapper = styled(IndexHeaderWrapper)`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${props => props.img.src})  center no-repeat;
  /* min-height: 85vh; */
  min-height: 650px;

  /* background: url(${props => props.img.src}) center no-repeat; */
  /* background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${props => props.img.src}) center/cover fixed no-repeat; */

  /* background-position: 0px 50px; */
  /* min-height: calc(100vh - 54.8px); */
  /* min-height: calc(100vh - 63px); */

  /* min-height: calc(96vh); */
  /* min-height: calc(100vh - 135px); */

  /* display: flex;
  justify-content: center;
  align-items: center; */
`

// HomeHeader.defaultProps = {
//   img: img
// };

// PageHeader.defaultProps = {
//   img: img
// };

export { HomeHeader, PageHeader, GalleryHeader }
