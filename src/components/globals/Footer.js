import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa"

export default class Footer extends Component {
  state = {
    date: null,
    icons: [
      {
        id: 0,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://www.facebook.com/arianabraving",
      },
      {
        id: 1,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: "https://www.instagram.com/arianabraving",
      },
      {
        id: 2,
        icon: <FaTelegram className="icon telegram-icon" />,
        path: "https://t.me/ArianaBraving",
      },
      {
        id: 3,
        icon: <FaYoutube className="icon youtube-icon" />,
        path: "https://www.youtube.com/results?search_query=arianabraving",
      },
    ],
  }
  componentDidMount() {
    this.setState({
      date: new Date().getFullYear(),
    })
  }

  render() {
    return (
      <FooterWrapper>
        <div className="title"> Ariana Braving </div>
        <div className="icons">
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="copyright">
          copyright &copy; {this.state.date} ariana braving{" "}
        </p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  background: ${styles.colors.mainBlack};
  padding: 2rem 0;
  .icons {
    width: 15rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 2rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
  .title {
    color: ${styles.colors.mainYellow};
    text-align: center;
    width: 20rem;
    /* text-transform: uppercase; */
    font-variant: small-caps;
    padding: 0.1rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.8rem;
    ${styles.border({ color: `${styles.colors.mainYellow}` })};
    ${styles.letterSpacing({ spacing: "0.4rem" })}
  }
`
