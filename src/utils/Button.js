import styled from "styled-components";
import { styles } from "../utils";

const BannerButton = styled.button`
  display: block;
  color: ${styles.colors.mainWhite};
  background: transparent;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 1.3rem;
  line-height: 2.5rem;
  letter-spacing: 0.2rem;
  font-weight: 700;
  ${styles.border({ color: `${styles.colors.mainWhite}` })};
  ${styles.transition({})};
  &:hover {
    background: ${styles.colors.mainWhite};
    color: ${styles.colors.mainBlack};
    cursor: pointer;
  }
`;
const SectionButton = styled(BannerButton)`
  color: ${styles.colors.mainBlack};
  ${styles.border({ color: `${styles.colors.mainBlack}` })};
  &:hover {
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainYellow};
  }
`;
const SubscribeButton = styled(SectionButton)`
  /* text-transform: capitalize; */
  /* padding: 0.5rem 0.5rem;
  font-size: 1rem;
  letter-spacing: 0.2rem;
  font-weight: 700; */
  /* color: ${styles.colors.mainBlack};
  ${styles.border({ color: `${styles.colors.mainBlack}` })};
  &:hover {
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainYellow};
  } */
`;
export { BannerButton, SectionButton, SubscribeButton };
