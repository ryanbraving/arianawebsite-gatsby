import React, { Component } from "react"
// import React, { Component } from "react";
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import classnames from "classnames"
import Layout from "../components/layout"
import { styles, SectionButton } from "../utils"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import CoachingTabs from "./coachingTabs"
import ContextConsumer from "../components/Context"
import Testimony2 from "./testimonyPage2"

// import img from "../images/bcg/aboutBcg.jpeg"

// export default class AboutPage extends Component {
//   render() {
//     const Child = ({ isFarsi }) => (
//       <div>
//         <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//         <PageHeader img={img}>
//           <Banner title="about" subtitle="a little about us" />
//         </PageHeader>
//       </div>
//     );
//     return (
//       <Layout>
//         <Child />
//       </Layout>
//     );
//   }
// }

const GET_IMAGE = graphql`
  query {
    getImage: file(relativePath: { eq: "bcg/Coaching8.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const stylesTheme = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})

class CoachingPage extends Component {
  

// const CoachingPage = props => {
//   const { classes, location } = props
//   var tabNo = undefined
//   if (location.state != null) {
//     tabNo = location.state.tabNo
//   }
render(){
  const { classes, location } = this.props
  var tabNo = undefined
  if (location.state != null) {
    tabNo = location.state.tabNo
  }
  return (
    <ContextConsumer>
      {({ isFarsi, aboutArianaTabNo, setAboutArianaTabNo }) => (
        <Layout>
          <StaticQuery
            query={GET_IMAGE}
            render={data => {
              return (
                <CoachingWrapper>
                  <ImageWrapper img={data.getImage.childImageSharp.fluid} />
                  <CoachingTabs tabNo={tabNo} />
                  {/* <Section> */}
                  {isFarsi && aboutArianaTabNo === 3 ? (
                    <Paper
                      className={classnames(classes.root, "paper")}
                      elevation={20}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        className={classnames("intro", "introFR")}
                      >
                        کوچینگ و مشاوره گروهی با آریانا
                      </Typography>
                      <Typography
                        component="p"
                        className={classnames("text", "textFR")}
                      >
                        کوچینگ گروهی مناسب شماست اگر:
                        <br />
                        <ul style={{ paddingRight: "1rem" }}>
                          <li>
                            از آن دسته آدمهایی هستید که محیطها و فعالیتهای گروهی
                            را به فردی ترجیح می دهید،
                          </li>
                          <li>
                            از بودن در یک گروه گرم و صمیمی انرژی می گیرید، لذت
                            می برید و در نتیجه بهتر یاد می گیرید و بهتر عمل می
                            کنید،
                          </li>
                          <li>
                            همسفر شدن با چند نفر دیگر که درد مشترکی با شما دارند
                            به شما قوت قلب می دهد،
                          </li>
                          <li>
                            و البته اگر هزینه گوچینگ خصوصی برای شما زیاد است.
                          </li>
                        </ul>
                        <br />
                        {/* <p>جلسات کوچینگ گروهی محدود به پنج نفر تا شش نفر است و بصورت تلفنی یا آنلاین برگزار می شود. دوره های گروهی کوچینگ آریانا عبارتند از:</p> */}
                        <p>
                          گروهها متشکل از حداقل چهار نفر و حداکثر شش نفر می
                          باشند و جلسات بطور هفتگی و بصورت آنلاین به مدت چهار تا
                          شش هفته، بسته به موضوع برگزار می شوند. دوره های گروهی
                          کوچینگ آریانا عبارتند از:
                        </p>
                        <ul style={{ paddingRight: "1rem" }}>
                          <li>پذیرش خود</li>
                          <li>تغییر ذهنیت</li>
                          <li>اعتماد به نفس</li>
                          <li>دعوت آرامش و مدیریت استرس</li>
                          <li>بهبود سلامت جسمی و روحی</li>
                          <li>انتخاب یا تغییر شغل و هدفمندی</li>
                          <li>روابط سالم</li>
                        </ul>
                        <br />
                        <p>
                          جهت ثبت نام و یا درخواست اطلاعات بیشتر لطفا از طریق
                          لینک زیر اقدام کنید:
                        </p>
                        <Link
                          to="/coaching.group.request"
                          style={{ textDecoration: "none" }}
                          state={{
                            coachingTypeRequest: "group-coaching",
                          }}
                        >
                          <SectionButton style={{ margin: "2rem auto" }}>
                            ثبت نام
                            <h6 className="coachingType">(کوچینگ گروهی)</h6>
                          </SectionButton>
                        </Link>
                      </Typography>
                    </Paper>
                  ) : !isFarsi && aboutArianaTabNo === 3 ? (
                    <Paper
                      className={classnames(classes.root, "paper")}
                      elevation={20}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        className={classnames("intro")}
                      >
                        Who am I?
                      </Typography>
                      <Typography component="p" className={classnames("text")}>
                        That’s the fundamental question of my life! But…I don’t
                        want to bother you on this subject here….and I totally
                        give you the right to know who am I -at least on some
                        level- and what is my mission as a coach and vision with
                        this website. So here we go:
                        <br />I am a well-trained Life Coach through Martha Beck
                        Institute and Health Coach trough the Institute for
                        Integrative Nutrition. I chose these specific training
                        programs because I needed the stuff to help myself get
                        going in my life journey. I see our life as a road trip.
                        To have a safe and enjoyable road trip, I believe we
                        must make sure the car is safe and sound (our physical
                        body), the engine works well (our mind) and the driver
                        is in full control of the car (our soul). So, you see, I
                        think our body is the vehicle to contain and carry our
                        soul into the road trip of our life. Of course, our mind
                        is the car engine which runs, controls and regulates the
                        dynamic movement of the car. Now imagine if the car
                        engine -the mind - is full of junk, it may mix oil and
                        water and break down. In this case, no matter how good
                        looking the exterior of the car is or which made and
                        model it is -the body-, the car is not going to move.
                        Even if it does, it will be a miserable ride and we
                        don’t want that. The truth is when the car is broken,
                        the car’s driver -the soul- can’t get far no matter how
                        divine it is and how badly she wants to get home. We are
                        mind/body/spirit combo and figuring out how to find the
                        balance and realizing our dreams isn’t an easy task.
                        Actually, it needs a lot of hard work! We need to arrive
                        into our body and take charge of our vitality, we need
                        to declutter our mind from the rusty thoughts and belief
                        systems that are not serving us anymore, and enable our
                        soul to claim its power and be in full control of the
                        vehicle so we can enjoy our road trip to the fullest.
                        <br /> I needed to learn how to approach my health and
                        maintain a healthy vibrant lifestyle so I embarked on
                        the best in-depth holistic health coach training program
                        I could find to integrate and consolidate all my
                        knowledge in this area. Also, I seriously needed to
                        learn practical tools that I could use (on a daily basis
                        and no matter what is going on around me) on how to keep
                        my mind clear and how to fine-tune my perspectives and
                        catch my limiting beliefs and replace them with new
                        shiny good ones. Honestly, I struggled with this bit for
                        over 10 years and finally I said hands down, I am going
                        to take part in this awesome life coach training program
                        because for a whole year I can be coached intensively
                        and learn tools.
                        <br /> My life mission is to let myself be like a hollow
                        flute for divine to flow through and use me as a vehicle
                        to share my original medicine with humanity with utmost
                        love and compassion. My vision for the website is a
                        platform to share my experiences, my truth and my
                        knowledge with the world. I want this platform to be a
                        shared space between me and you to connect, share and
                        see each other in love. As a result, lift each other up
                        and walk toward light hand in hand.
                        <br />
                        Oh I almost forgot to tell you I love love love being in
                        raw nature, traveling, eating good yummy foods, reading
                        and of course having fun with friends and family. Yoga
                        and walking/hiking are my favorite type of physical
                        exercise.
                        <br />
                        <b>Loads of love Aria</b>
                      </Typography>
                    </Paper>
                  ) : isFarsi && aboutArianaTabNo === 1 ? (
                    <Paper
                      className={classnames(classes.root, "paper")}
                      elevation={20}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        className={classnames("intro", "introFR")}
                      >
                        پاسخ به سوالات متداول
                      </Typography>
                      <Typography
                        component="h3"
                        className={classnames("text", "textFR")}
                      >
                        اینها سوالاتی هستند که بصورت متداول از آریانا پرسیده شده
                        اند. بعضی از سوالها کمی تغییر داده شده اند تا بتوان
                        جوابهای کامل تری برای آنها ارایه داد.
                        <br />
                        <br />
                        <ul style={{ paddingRight: "1rem" }}>
                          <li>
                            <b>کوچینگ چیست؟</b>
                          </li>
                          <li style={{ listStyleType: "none" }}>
                            من برای کارم از واژه «کوچینگ» و عنوان شغلی «کوچ
                            زندگی و سلامت» استفاده می کنم اما راستش را بخواهید
                            فکر می کنم این واژه ها معرف های واضح و کاملی برای
                            شغل من نیستند! تنها دلیلی که از آنها استفاده می کنم
                            این است که واژه مناسب تری پیدا نکردم! و البته واژه
                            کوچینگ واژه نسبتا جا افتاده ای است که برخی افراد
                            برای خدماتی مشابه من استفاده می کنند! بالاخره من هم
                            باید یک عنوان شغلی داشته باشم و برای ارتباط برقرار
                            کردن با شما از کلمات نسبتا شناخته شده استفاده کنم!
                            <br /> اگر کنجکاو هستید بدانید کوچینگ چیست یا کار یک
                            کوچ زندگی چیست می توانید کلید واژه های «کوچینگ چیست»
                            و یا «فرق کوچ با مشاور چیست» را در گوگل جستجو کنید
                            تا جواب های تعریف شده و کلیشه ای را بیابید.
                            <br /> اما اگر جواب شخص من را می خواهید این است که
                            واژه ها را دور بریزید، ذهنتان را خالی کنید و کار با
                            من را برای خودتان تجربه کنید! چرا که روش کاری من
                            منحصر به فرد است و در هیچ جعبه از پیش تعریف شده ای
                            نمی گنجد!
                            <b style={{ color: "red" }}>
                              <br /> دعوتتان می کنم چند دقیقه ای وقت بگذارید و
                              تجربه کلاینتهایی که در انتهای کارشان با من تصمیم
                              گرفتند وقت بگذارند و چند خطی از نتیجه کار و تجربه
                              کلی خودشون از کار با من بنویسند را بخوانید.
                            </b>{" "}
                            <br />
                            سوال من از شما این است: چه چیزی را با همه وجودتان،
                            با تک تک سلولهای بدنتان، می خواهید در زندگیتان تجربه
                            کنید؟
                            <br />
                            آرامش بیشتر؟ اعتماد به نفس بیشتر؟ عشق بیشتر؟ انرژی
                            بیشتر؟ درآمد بیشتر؟ سلامت بیشتر؟ شادی بیشتر؟ زندگی
                            بهتر؟...
                            <br /> جواب شما هر چه که هست تمام یا بخشی از زندگی
                            ایده آل شماست و کار من این است که به شما یاد می دهم
                            چطور زندگی ایده آلتان را برای خود خلق کنید. چه
                            معامله ای از این بهتر؟
                          </li>
                          <br />
                          <li>
                            <b>
                              چرا آریانا بهترین فردی است که می تواند کمکم کند
                              زندگیم را متحول کنم و خواسته های قلبیم را به حقیقت
                              روزانه زندگیم گره بزنم؟ چرا در میان خیل بیشماری از
                              کوچها، معلم ها، روانشناسها، مشاورها و ... باید
                              آریانا را انتخاب کنم؟
                            </b>
                          </li>
                          <li style={{ listStyleType: "none" }}>
                            به عنواین گوناگونی می توانم جواب این سوال بسیار خوب
                            و بجا را بدهم. اما انتخاب می کنم که به ساده ترین و
                            مستقیم ترین جواب اکتفا کنم: برای اینکه حدود بیست سال
                            روی این موضوع تحقیق، تمرین و کار کرده ام. برای اینکه
                            تک تک ابزارهایی که استفاده میکنم و مباحثی که تدریس
                            می کنم بارها و بارها و بارها در زندگی خودم و سپس در
                            زندگی کلاینتهایم امتحان کرده ام و به کاربردی بودن و
                            موثر بودن آنها ایمان دارم. برای اینکه از حرفهای مثبت
                            و انگیزشی سطحی و پوچ و تو خالی بیزارم. برای اینکه
                            شاگرد همیشگی و سخت کوش مدرسه زندگی و دایما در حال
                            یادگیری، رشد و تحول هستم. برای اینکه باور دارم خلق
                            زندگی ایده آلم مهمترین کار و پروژه زندگی ام است و
                            روزانه در جهتش قدم بر میدارم. یعنی هم شاگرد و هم
                            معلم تمام مباحث و اصولی هستم که با شما کار می کنم...
                          </li>
                          <br />
                          <li>
                            <b>آریانا از چه روشی برای کوچینگ استفاده می کند؟</b>
                          </li>
                          <li style={{ listStyleType: "none" }}>
                            روش کار من ترکیبی نوآورانه از روانشناسی مدرن، علم
                            مغز و اعصاب، معنویت و ابزارهای کاربردی کوچینگ است.
                            البته تجارب و آ موخته های باارزش و مفید زندگی خودم
                            را نیز به این مجموعه اضافه می کنم.
                          </li>
                          <br />
                          <li>
                            <b>
                              کوچینگ با آریانا برای حل چه نوع مسایل و مشکلاتی
                              مناسب است؟
                            </b>
                          </li>
                          <li style={{ listStyleType: "none" }}>
                            فکر می کنم با توجه به دانش گسترده و به روزی که در
                            درک رفتارهای انسانی، طراحی و مدیریت زندگی، تغییر
                            عادات، کوچینگ زندگی، کوچینگ سلامتی ، تغذیه جامع،
                            پیشگیری و بهداشت دارم، می توانم راهنمای شما برای
                            ایجاد تعادل با مهمترین عناصر زندگی خود مثل عشق،
                            روابط، معنویت، شغل، امور مالی و سلامتی باشم. من با
                            صبر و مهربانی شما را یاری می دهم تا تغییراتی که
                            زندگی شما را متحول می کنند اجرایی کنید. بطور خلاصه
                            اینها می توانند فقط برخی از دلایلی باشند که شما را
                            از خدمات من بهره مند کنند:
                            <ul
                              style={{
                                paddingRight: "1rem",
                                listStyleType: "square",
                                fontSize: "0.85rem",
                              }}
                            >
                              <li>
                                اگر از نظر بالینی افسرده نیستید، اما صرف نظر از
                                شرایط ظاهری زندگی اتان، احساس افسردگی مزمن درونی
                                دارید،
                              </li>
                              <li>
                                اگر اصلا نمیدانید در زندگی اتان چه می خواهید و
                                احساس می کنید گم شده اید،
                              </li>
                              <li>
                                اگر در تصمیم گیریهای مهم در زندگی اتان می لنگید،{" "}
                              </li>
                              <li>
                                اگر در پس زمینه زندگی تان احساس نا امنی، ترس یا
                                حتی اضطراب دارید،
                              </li>
                              <li>
                                اگر در زمینه اعتماد به نفس و عزت نفس احساس کمبود
                                دارید،
                              </li>
                              <li>
                                اگر مدیریت بهینه زمان را بلد نیستید و احساس می
                                کنید بازدهی اتان پایین است،{" "}
                              </li>
                              <li>
                                اگر چیزی (مثلا روابط شما) انرژی شما را تخلیه می
                                کند و احساس می کنید گیر افتا ده اید،
                              </li>
                              <li>
                                اگر از شغل خود راضی نیستید، اما نمی دانید باید
                                چه کرد و احساس می کنید زندگی همین است،
                              </li>
                              <li>
                                اگر می دانید در زندگی چه می خواهید ولی نمی دانید
                                چگونه بستر مورد نیاز را فرا هم کنید و در جهت
                                تحقق آن قدم بر دارید،
                              </li>
                              <li>
                                اگر آن طوری که دوست دارید احساس شادابی، سبکی و
                                سلامتی ندارید، یا اکثر اوقات کم انرژی و خسته
                                هستید
                              </li>
                              <li>
                                اگر نحوه برخورد با بحران را بلد نیستید و در
                                همچین مواقعی قادر به حفظ آرامش و ادامه حرکت در
                                زندگی اتان نیستید،
                              </li>
                              <li>
                                اگر دچار یک بیماری خطرناک شده اید و وحشت و ضعف و
                                ناامیدی بر شما غلبه کرده است و ابزارهای لازم
                                برای رویارویی با این همه فشار روحی و جسمی و پیدا
                                کردن آرامش را ندارید.
                              </li>
                              <li>
                                اگر اضافه وزن دارید و این موضوع باعث آزارتان است
                                اما با اینکه رژیم های مختلف می گیرید قادر به
                                کاهش وزن نیستید
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <b>
                              آیا آریانا تحصیلاتی در زمینه روانشناسی و کوچینگ
                              دارد؟
                            </b>
                          </li>

                          <li style={{ listStyleType: "none" }}>
                            بله. اطلاعات کامل و لیست اساتیدی که افتخار شاگردیشان
                            را داشته ام را در بخش{" "}
                            <Link
                              to="/about"
                              style={{ textDecoration: "none" }}
                              onClick={() => {
                                setAboutArianaTabNo(1)
                              }}
                              state={{
                                tabNo: 1,
                              }}
                            >
                              درباره آریانا (تحصیلات)
                            </Link>{" "}
                            بخوانید.
                          </li>
                        </ul>
                      </Typography>
                    </Paper>
                  ) : isFarsi && aboutArianaTabNo === 4 ? (
                    <Paper
                      className={classnames(classes.root, "paper")}
                      elevation={20}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        className={classnames("intro", "introFR")}
                      >
                        کوچینگ و مشاوره خصوصی با آریانا
                      </Typography>
                      <Typography
                        component="h3"
                        className={classnames("text", "textFR")}
                      >
                        برای تجربه جلسات خصوصی کوچینگ با آریانا نیازی به اینکه
                        در شهری که او زندگی می کند حضور فیزیکی داشته باشید
                        ندارید. تمام خدمات آریانا حتی برای کلاینتهایی که در شهر
                        خودش زندگی می کنند بطورآنلاین از طریق اسکایپ، واتس اپ و
                        یا تلفن است. یکی از اصول زندگی و کاری آریانا سادگی و
                        راحتی است و به همین دلیل است که تمام جلسات خصوصی اش را
                        در ساده ترین و راحت ترین شکل ممکن به شما ارایه می دهد.
                        تنها پیش نیاز شما برای کار با آریانا تعهد به رشد فردی
                        خود و دسترسی به اینترنت یا تلفن است.
                        <br />
                        <br />
                        <ul style={{ paddingRight: "1rem" }}>
                          <li>
                            <b>جلسات موردی</b>
                            <br />
                            60 دقیقه تجربه کوچینگ با آریانا. اگر به جلسات موردی
                            تمایل دارید، یا فقط می خواهید کلید یک تغییر را
                            بزنید، این گزینه انتخاب مناسبی برای شماست .
                          </li>
                          <Link
                            to="/coaching.request"
                            style={{ textDecoration: "none" }}
                            state={{
                              coachingTypeRequest: "1 On 1",
                            }}
                          >
                            <SectionButton style={{ margin: "2rem auto" }}>
                              درخواست کوچینگ
                              <h6 className="coachingType">(جلسات موردی)</h6>
                            </SectionButton>
                          </Link>

                          <li>
                            <b>حفاری عمیق</b>
                            <br />
                            پنج جلسه 60 دقیقه ای برای حفاری عمیق و کار کردن روی
                            مسایلی که شما را آزار می دهند. در طی این جلسات فرصتی
                            برای شما فراهم می شود که نه تنها به کشف زیربنایی
                            ساختار فکری و چگونگی درگیری اتان با این مسایل آگاه
                            می شوید، بلکه آریانا ابزارهای کاربردی در جهت رهایی
                            اتان را به شما آموزش می دهد. در طی این فرایند شما
                            یاد خواهید گرفت که چگونه قطب نمای درونی خود را که
                            همواره در حال نشان دادن بهترین مسیر ممکن برای سفر
                            زندگی اتان است را کالیبره و آغاز به حرکت در مسیر خلق
                            زندگی ایده آلتان کنید. برای استفاده بهینه از این
                            جلسات، پیشنهاد آریانا اختصاص یک جلسه دو هفته یکبار
                            در طی سه ماه است.
                          </li>
                          <Link
                            to="/coaching.request"
                            style={{ textDecoration: "none" }}
                            state={{
                              coachingTypeRequest: "Dig Deep",
                            }}
                          >
                            <SectionButton style={{ margin: "2rem auto" }}>
                              درخواست کوچینگ
                              <h6 className="coachingType">(حفاری عمیق)</h6>
                            </SectionButton>
                          </Link>
                          <li>
                            <b>باز سازی و طراحی دوباره </b>
                            <br />
                            ده جلسه 60 دقیقه ای برای بررسی و تامل در ابعادی از
                            زندگی اتان که گرفته و تنگ است. اگرتصمیم به ایجاد
                            یکسری تغییرات اساسی، برای مثال در مسیر شغلی یا روابط
                            خود دارید، این گزینه انتخاب مناسبی برای شماست. این
                            جلسات زمان و مکانی را برای شما فراهم می کنند که
                            بتوانید با کمک آریانا مصائب بر سر راه و زیر ساختهای
                            فکری و باوری خود را بررسی کنید، مجهز به ابزارهای
                            مورد نیاز برای برداشتن دیوارهای اضافی و بدرد نخور
                            شوید و نحوه طراحی دوباره و خلق زندگی ایده آلتان را
                            یاد بگیرید. در طی این فرایند در واقع آریانا به شما
                            راه اینستال نرم افزارهای جدید در سخت افزار مغزتان را
                            آموزش می دهد و شما به مهارتهای لازم برای تعویض عادات
                            و ایجاد تغییرات دلخواه در هر زمینه ای از زندگی اتان
                            مجهز می شوید. برای استفاده بهینه از این جلسات،
                            پیشنهاد آریانا اختصاص یک جلسه هفته ای یکبار یا
                            استفاده از جلسات در طی حداکثرشش ماه است.
                          </li>
                          <Link
                            to="/coaching.request"
                            style={{ textDecoration: "none" }}
                            state={{
                              coachingTypeRequest: "Rebuild & Redesign",
                            }}
                          >
                            <SectionButton style={{ margin: "2rem auto" }}>
                              درخواست کوچینگ
                              <h6 className="coachingType">
                                (باز سازی و طراحی دوباره)
                              </h6>
                            </SectionButton>
                          </Link>
                        </ul>
                      </Typography>
                    </Paper>
                  ) : (
                    <Testimony2 />
                  )}
                </CoachingWrapper>
              )
            }}
          />
        </Layout>
      )}
    </ContextConsumer>
  )
  }  
}

CoachingPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(stylesTheme)(CoachingPage)

const ImageWrapper = styled.div`
  background: url(${props => props.img.src});
  min-height: calc(90vh);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: #464646;
`

const CoachingWrapper = styled.div`
  .buttons {
    display: flex;
    justify-content: space-around;
  }
  .paper {
    margin: 2rem auto;
    /* width: 900px; */
  }
  .text {
    margin-top: 1rem;
    line-height: 3rem;
    font-size: 1rem;
    /* font-weight: bold; */
    text-align: justify;
  }
  .textFR {
    direction: rtl;
    font-family: "Vazir";
  }
  .intro {
    margin-top: 1rem;
    /* font-size: 1.5rem; */
    /* text-align: center; */
  }
  .introFR {
    direction: rtl;
    font-family: "Vazir";
  }
  .underline {
    width: 10rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    margin: 2rem auto;
  }
  .coachingType {
    margin: -0.5rem 0 -0.5rem 0;
    font-size: 0.8rem;
  }
  @media (min-width: 768px) {
    .paper {
      width: 80%;
    }
  }
  @media (min-width: 992px) {
    .paper {
      width: 70%;
    }
  }
  @media (min-width: 1292px) {
    .paper {
      width: 60%;
    }
  }
  @media (min-width: 1492px) {
    .paper {
      width: 50%;
    }
  }
  @media (max-width: 768px) {
    .paper {
      width: 90%;
    }
  }
`
