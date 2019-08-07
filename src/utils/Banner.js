import React from "react"
import styled from "styled-components"
import { styles } from "../utils"

export default function Banner({ title, subtitle, children }) {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  /* position: relative; */
  margin-bottom: 3rem;
  text-align: center;
  .title {
    color: ${styles.colors.mainGrey};
    font-size: 2.5rem;
    ${styles.letterSpacing({ spacing: "0.2rem" })};
    /* text-shadow: 3px 0px 1px grey; */
  }
  .subtitle {
    margin-top: 2.5rem;
    color: ${styles.colors.mainGrey};
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: "0.15rem" })};
    text-transform: capitalize;
  }
`

Banner.defaultProps = {
  title: "default title",
  subtitle: "default subtitle",
}
