import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql, Link } from "gatsby"
import { Section, Title, ServiceButton } from "../../utils"
import styled from "styled-components"
import ContextConsumer from "../Context"
import truncatise from "truncatise"

const GET_IMAGES = graphql`
  query {
    getImages: allFile(
      filter: { relativeDirectory: { eq: "serviceGallery" } }
      sort: { fields: [name], order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
export default function Service() {
  var options = {
    TruncateBy: "characters", // Options are 'words', 'characters' or 'paragraphs'
    TruncateLength: 190, // The count to be used with TruncatedBy
    StripHTML: false, // Whether or not the truncated text should contain HTML tags
    Strict: true, // If set to false the truncated text finish at the end of the word
    Suffix: " ...", // Text to be appended to the end of the truncated text
  }
  return (
    <ContextConsumer>
      {({ isFarsi }) => (
        <StaticQuery
          query={GET_IMAGES}
          render={data => {
            return (
              <Section>
                {isFarsi ? (
                  <Title
                    style={{ direction: "rtl" }}
                    title="خدمات آریانا"
                    message={"چگونه می‌توانم به شما کمک کنم؟"}
                  />
                ) : (
                  <Title
                    title="Ariana's Services"
                    message={"How Can I Help You?"}
                  />
                )}
                <ServiceWrapper>
                  {data.getImages.edges.map(({ node }, index) => {
                    index = index + 1
                    return (
                      <div className={`item item-${index}`} key={index}>
                        <Img fluid={node.childImageSharp.fluid} />
                        {index === 1 && isFarsi ? (
                          // <div>
                          //   <h2 className="service"> دوره‌های آنلاین </h2>
                          //   <p className="text textFR">
                          //     {truncatise(
                          //       `این دوره‌های آموزشی بصورت غیرحضوری و آنلاین برگزار می‌شود. یعنی با خرید این دوره‌ها در زمان‌ها و مکان‌های دلخواه خود و با هر سرعتی که مناسب شرایط زندگی شماست قادر به دنبال کردن مطالب و تکمیل دوره‌ها خواهید بود. طراحی این دوره‌ها به صورتی است که مطالب با بهترین کیفیت و بیانی گویا به شما انتقال داده می‌شود و توسط تمرین‌ها و کاربرگ‌ها بطور عملی با  زندگی شما آمیخته می‌شود. بدین صورت با پرداخت هزینه‌ای کمتر از دوره‌های کوچینگ خصوصی و یا حتی کوچینگ گروهی می‌توانید از آموزش‌های تحول برانگیز آریانا بهره‌مند شوید.`,
                          //       options
                          //     )}
                          //   </p>
                          //   <Link
                          //     to="/services"
                          //     style={{ textDecoration: "none" }}
                          //     state={{
                          //       link_tabNo: 2,
                          //     }}
                          //   >
                          //     <ServiceButton
                          //       style={{
                          //         margin: " 1rem auto",
                          //         fontFamily: "Vazir",
                          //       }}
                          //     >
                          //       شروع کنید
                          //     </ServiceButton>
                          //   </Link>
                          // </div>
                          <div>
                            <h2 className="service"> وبلاگ </h2>
                            <p className="text textFR">
                            هدف از این وبلاگ ایجاد یک فضای مشترک و همچنین ارتباط بیشتر بین شما و آریانا است. به این امید که به بالاتر بردن همدیگر کمک کنیم و دست در دست یکدیگر به سمت نور و آگاهی حرکت کنیم.    
                            </p>
                            <Link
                              to="/resources"
                              style={{ textDecoration: "none" }}
                            >
                              <ServiceButton style={{ margin: " 1rem auto" }}>
                                خواندن پست‌ها
                              </ServiceButton>
                            </Link>
                          </div>
                        ) : index === 1 && !isFarsi ? (
                          <div>
                            <h2 className="service"> Blog Posts </h2>
                            <p className="text">
                              This platform is a shared space between Ariana and
                              you to connect, share and see each other in love.
                              As a result, lift each other up and walk toward
                              light hand in hand.
                            </p>
                            <Link
                              to="/resources"
                              style={{ textDecoration: "none" }}
                            >
                              <ServiceButton style={{ margin: " 1rem auto" }}>
                                Read Posts
                              </ServiceButton>
                            </Link>
                          </div>
                        ) : index === 2 && isFarsi ? (
                          <div>
                            <h2 className="service"> کوچینگ گروهی </h2>
                            <p className="text textFR">
                              {truncatise(
                                `
                                همسفر شدن با افرادی که خواسته‌ها، چالش‌ها و مقصد نسبتاً مشترکی با شما دارند، نه تنها مسیر سفر را لذت بخش‌تر می‌کند و به شما احساس امنیت و حمایت می‌دهد، بلکه می‌تواند بسیار مفید و قدرت بخش باشد.
                                 چرا که خیلی اوقات شنیدن مشکلات و درک افکار محدود کننده دیگران چون زنگ بیدارباشی است که باعث شناسایی افکار محدود کننده و نقاط کور شما می‌شود. همینطور دیدن پیشرفت و حرکت رو به جلو هم گروهی‌ها، الهام بخش است و نیروی محرکی برای تلاش بیشتر شما می‌شود.
                                `,
                                options
                              )}
                            </p>
                            <Link
                              to="/services"
                              style={{ textDecoration: "none" }}
                              state={{
                                link_tabNo: 1,
                              }}
                            >
                              <ServiceButton
                                style={{
                                  margin: " 1rem auto",
                                  fontFamily: "Vazir",
                                }}
                              >
                                اطلاعات بیشتر
                              </ServiceButton>
                            </Link>
                          </div>
                        ) : index === 2 && !isFarsi ? (
                          <div>
                            <h2 className="service"> Group Coaching </h2>
                            <p className="text">
                              The truth is that a challenging journey is always
                              better with companions who share similar goals.
                              Traveling alone can feel unsafe and daunting, but
                              the companionship ...
                            </p>
                            <Link
                              to="/services"
                              style={{ textDecoration: "none" }}
                              state={{
                                link_tabNo: 1,
                              }}
                            >
                              <ServiceButton style={{ margin: " 1rem auto" }}>
                                More Info
                              </ServiceButton>
                            </Link>
                          </div>
                        ) : index === 3 && isFarsi ? (
                          <div>
                            <h2 className="service"> کوچینگ خصوصی </h2>
                            <p className="text textFR">
                              {truncatise(
                                `چه چیزی را با همه وجودت، با تک تک سلول‌های بدنت، می‌خواهی در زندگیت تجربه کنی؟ آرامش بیشتر؟ اعتماد به نفس بیشتر؟ عشق بیشتر؟ موفقیت بیشتر؟ انرژی بیشتر؟ پول بیشتر؟ یا... جواب شما هر چه که هست تمام یا بخشی از زندگی ایده‌آل شماست و کار آریانا به عنوان یک کوچ این است که به شما یاد می‌دهد چطور زندگی ایده‌آلتان را برای خود خلق کنید. چه معامله ای از این بهتر؟`,
                                options
                              )}
                            </p>
                            <Link
                              to="/services"
                              style={{ textDecoration: "none" }}
                              state={{
                                link_tabNo: 0,
                              }}
                            >
                              <ServiceButton
                                style={{
                                  margin: " 1rem auto",
                                  fontFamily: "Vazir",
                                }}
                              >
                                درخواست کوچینگ
                              </ServiceButton>
                            </Link>
                          </div>
                        ) : (
                          <div>
                            <h2 className="service"> Private Sessions </h2>
                            <p className="text">
                              What is it that you so badly want to experience in
                              your life? Is it more meaning? More joy? More
                              peace? More love? More confidence? More energy?
                              More success? More ...
                            </p>
                            <Link
                              to="/services"
                              style={{ textDecoration: "none" }}
                              state={{
                                link_tabNo: 0,
                              }}
                            >
                              <ServiceButton style={{ margin: " 1rem auto" }}>
                                Coaching Request
                              </ServiceButton>
                            </Link>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </ServiceWrapper>
              </Section>
            )
          }}
        />
      )}
    </ContextConsumer>
  )
}

const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  .service {
    margin-top: 1rem;
    text-align: center;
    letter-spacing: 0.1rem;
  }
  .text {
    padding: 1rem 2rem;
    text-align: justify;
  }
  .textFR {
    direction: rtl;
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
  }

  @media (min-width: 980px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`
