import React, { Component } from "react";
import styled from "styled-components";
import { styles, AppContext } from "../../../utils";
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import aparatIcon from "../../../images/aparat.svg";

export default class NavbarIcons extends Component {
  state = {
    icons: {
      english: [
        {
          id: 0,
          icon: <FaFacebook className="icon facebook-icon" />,
          path: "https://www.facebook.com/arianabraving"
        },
        {
          id: 1,
          icon: <FaInstagram className="icon instagram-icon" />,
          path: "https://www.instagram.com/arianabraving"
        },
        {
          id: 2,
          icon: <FaTelegram className="icon telegram-icon" />,
          path: "https://t.me/ArianaBraving"
        },
        {
          id: 3,
          icon: <FaYoutube className="icon youtube-icon" />,
          path: "https://www.youtube.com/results?search_query=arianabraving"
        }
      ],

      farsi: [
        {
          id: 1,
          icon: <FaInstagram className="icon instagram-icon" />,
          path: "https://www.instagram.com/arianabraving"
        },
        {
          id: 2,
          icon: <FaTelegram className="icon telegram-icon" />,
          path: "https://t.me/ArianaBraving"
        },
        {
          id: 3,
          icon: (
            <img
              src={aparatIcon}
              alt="aparat logo"
              className="icon aparat-icon"
            />
          ),
          path: "https://www.aparat.com/arianabraving"
        }
      ]
    }
  };
  render() {
    return (
      <AppContext.Consumer>
        {({ isFarsi }) => (
          <IconWrapper>
            {isFarsi
              ? this.state.icons.farsi.map(item => {
                  return (
                    <a
                      key={item.id}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.icon}
                    </a>
                  );
                })
              : this.state.icons.english.map(item => {
                  return (
                    <a
                      key={item.id}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.icon}
                    </a>
                  );
                })}
          </IconWrapper>
        )}
      </AppContext.Consumer>
    );
  }
}

const IconWrapper = styled.div`
  padding: 0rem 1rem 0rem 0rem;
  .icon {
    font-size: 1.5rem;
    coursor: pointer;
    ${styles.transObject({})};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }

  .facebook-icon {
    color: #3b579d;
  }
  .instagram-icon {
    color: #da5f53;
  }
  .telegram-icon {
    color: #0088cc;
  }
  .youtube-icon {
    color: #ff0000;
    // font-size: 1.6rem;
  }
  .aparat-icon {
    height: 1.5rem;
    /* &:hover {
      background: ${styles.colors.mainYellow};
    } */
    /* color: #ff0000; */
  }

  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`;
