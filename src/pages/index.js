import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
    <h1>Hi people</h1>
    <p>Welcome to my website.</p>
    <p>This site is under development now and will be live soon.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    In the meantime you can find me on Instagram and Telegram{" "}
    <b>@ArianaBraving</b> or through below links:
    <br />
    <a
      href="https://t.me/ArianaBraving/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Telegram
    </a>
    <br />
    <a
      href="https://www.instagram.com/ArianaBraving/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Instagram
    </a>
    <br />
    <br />
  </Layout>
);

export default IndexPage;
