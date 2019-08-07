import styled from "styled-components"
import { styles } from "../utils"

const SectionButton = styled.button`
  display: block;
  color: ${styles.colors.mainBlack};
  background: transparent;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 1.3rem;
  line-height: 2.5rem;
  letter-spacing: 0rem;
  font-weight: 700;
  border-radius: 7px;
  ${styles.border({ color: `${styles.colors.mainBlack}` })};
  ${styles.transition({})};
  &:hover {
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }
`
const BannerButton = styled(SectionButton)`
  color: ${styles.colors.mainYellow};
  ${styles.border({ color: `${styles.colors.mainYellow}` })};
  font-size: 1rem;
  /* line-height: 2.5rem; */
  letter-spacing: 0.1rem;
  /* font-weight: 700; */
  /* filter: blur(2px);
  -webkit-filter: blur(2px); */
  /* background: rgba(255, 255, 255, 0.5); */
  &:hover {
    background: ${styles.colors.mainYellow};
    color: ${styles.colors.mainWhite};
    ${styles.border({ color: `${styles.colors.mainWhite}` })};
  }
`
const ServiceButton = styled(SectionButton)`
  /* text-transform: capitalize; */
  padding: 0.3rem 0.5rem;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  font-weight: 700;
  /* color: ${styles.colors.mainBlack};
  ${styles.border({ color: `${styles.colors.mainBlack}` })};
  &:hover {
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainYellow};
  } */
`
export { BannerButton, SectionButton, ServiceButton }
