// import React from "react";
import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { styles, Section, Title } from "../utils"
import styled from "styled-components"
import ContextConsumer from "../components/Context"
import ContactFormFR from "../components/contactForms/ContactFormFR"
import ContactFormEN from "../components/contactForms/ContactFormEN"
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa"
import aparatIcon from "../assets/aparat.svg"
import LandingCheck from "../components/LandingCheck"

// import ContextConsumer from "../components/Context";

// const ContactPage = () => (
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <PageHeader img={img}>
//       <Banner title="contact us" subtitle="let's get in touch" />
//     </PageHeader>
//   </Layout>
// );

// export default ContactPage;

export default class ContactPage extends Component {
  render() {
    return (
      <ContextConsumer>
        {({ landingDone, isFarsi }) => (
          <React.Fragment>
            {landingDone ? (
              <Layout>
                <SEO
                  title="Home"
                  keywords={[`gatsby`, `application`, `react`]}
                />
                <Section style={{ paddingTop: "100px" }}>
                  {isFarsi ? (
                    <Title
                      title="شبکه های اجتماعی"
                      message="دنبال کردن آریانا در فضای مجازی"
                    />
                  ) : (
                    <Title
                      title="Social Networks"
                      message="Find Ariana on the Internet"
                    />
                  )}
                  {isFarsi ? (
                    <h3
                      style={{
                        textAlign: "center",
                        color: `${styles.colors.mainGrey}`,
                        direction: "rtl",
                      }}
                    >
                      نام کاربری آریانا در تمام شبکه های اجتماعی
                      <span
                        style={{
                          // color: `${styles.colors.mainBlack}`,
                          color: "red",
                          // fontWeight: "bold",
                          // fontVariant: "small-caps",
                          letterSpacing: "0.1rem",
                        }}
                      >
                        {" "}
                        ArianaBraving@
                      </span>{" "}
                      می باشد
                    </h3>
                  ) : (
                    <h3
                      style={{
                        textAlign: "center",
                        color: `${styles.colors.mainGrey}`,
                        direction: "rtl",
                      }}
                    >
                      Ariana's ID in all social network channels is:
                      <span
                        style={{
                          // color: `${styles.colors.mainBlack}`,
                          color: "red",
                          // fontWeight: "bold",
                          // fontVariant: "small-caps",
                          letterSpacing: "0.1rem",
                        }}
                      >
                        {" "}
                        @ArianaBraving
                      </span>{" "}
                    </h3>
                  )}
                  <IconWrapper
                    style={
                      isFarsi
                        ? { flexDirection: "row-reverse" }
                        : { flexDirection: "row" }
                    }
                  >
                    <div className="item">
                      <a
                        href="http://instagram.com/arianabraving"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "none",
                          color: `${styles.colors.mainGrey}`,
                        }}
                      >
                        <FaInstagram className="icon instagram-icon" />
                        {isFarsi ? <h1>اینستاگرام</h1> : <h1>Instagram</h1>}
                      </a>
                    </div>
                    <div className="item">
                      <a
                        href="http://facebook.com/arianabraving"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "none",
                          color: `${styles.colors.mainGrey}`,
                        }}
                      >
                        <FaFacebook className="icon facebook-icon" />
                        {isFarsi ? <h1>فیس بوک</h1> : <h1>Facebook</h1>}
                      </a>
                    </div>
                    <div className="item">
                      <a
                        href="https://t.me/ArianaBraving"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "none",
                          color: `${styles.colors.mainGrey}`,
                        }}
                      >
                        <FaTelegram className="icon telegram-icon" />
                        {isFarsi ? <h1>کانال تلگرام</h1> : <h1>Telegram</h1>}
                      </a>
                    </div>
                    <div className="item">
                      <a
                        href="https://www.youtube.com/results?search_query=arianabraving"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "none",
                          color: `${styles.colors.mainGrey}`,
                        }}
                      >
                        <FaYoutube className="icon youtube-icon" />
                        {isFarsi ? <h1>یوتیوب</h1> : <h1>YouTube</h1>}
                      </a>
                    </div>
                    <div className="item">
                      <a
                        href="https://www.aparat.com/arianabraving"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "none",
                          color: `${styles.colors.mainGrey}`,
                        }}
                      >
                        <img
                          src={aparatIcon}
                          alt="aparat logo"
                          className="icon aparat-icon"
                        />
                        {isFarsi ? <h1>آپارات</h1> : <h1>Aparat</h1>}
                      </a>
                    </div>
                  </IconWrapper>
                  {isFarsi ? (
                    <Title
                      title="تماس با آریانا"
                      message="ارتباط با آریانا از طریق ایمیل یا تلگرام"
                    />
                  ) : (
                    <Title
                      title="Contact Ariana"
                      message=" Touch base with Ariana through Email or Telegram"
                    />
                  )}

                  <ContactWrapper>
                    {isFarsi ? <ContactFormFR /> : <ContactFormEN />}
                  </ContactWrapper>
                </Section>
              </Layout>
            ) : (
              <LandingCheck />
            )}
          </React.Fragment>
        )}
      </ContextConsumer>
    )
  }
}

const ContactWrapper = styled.div`
  width: 90%;
  margin: 0rem auto;
  display: flex;
  justify-content: "center";
`
const IconWrapper = styled.div`
  /* padding: 0rem 1rem 0rem 0rem; */
  /* margin: 4rem auto; */
  margin-bottom: 8rem;
  /* background: grey; */
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  text-align: center;
  .item{
    width: 200px;
    /* margin: 4rem 0 4rem 0; */
    margin-top: 4rem;
    /* margin-bottom: 0rem; */
    /* height: 100px; */
  }
  
  .icon {
    font-size:3.5rem;
    cursor: pointer;
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
    height: 2.8rem;
    /* &:hover {
      background: ${styles.colors.mainYellow};
    } */
    /* color: #ff0000; */
  }
  `
