import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import classNames from "classnames"
import Layout from "../components/layout"
import { styles } from "../utils"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import AboutTabs from "./aboutTabs"
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
    getImage: file(relativePath: { eq: "bcg/About.JPG" }) {
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


class AboutPage extends Component {
  state = {
    tabNo: 0,
  }

  tabNo = no => {
    this.setState({
      tabNo: no,
    })
  }

  render() {
    const { classes } = this.props
    // var tabNo = undefined
    // if (location.state != null) {
    //   tabNo = location.state.tabNo
    // }
    return (
      <ContextConsumer>
      {({ isFarsi, aboutArianaTabNo }) => (
        <Layout>
          <StaticQuery
            query={GET_IMAGE}
            render={data => {
              return (
                <AboutWrapper>
                  <ImageWrapper img={data.getImage.childImageSharp.fluid} />
                  <AboutTabs tabNo={this.tabNo} />
                  {/* <Section> */}

                  {isFarsi && aboutArianaTabNo === 2 ? (
                    <Paper
                      className={classNames(classes.root, "paper")}
                      elevation={20}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        className={classNames("intro", "introFR")}
                      >
                        سلام آریانا هستم!
                      </Typography>
                      <Typography
                        component="p"
                        className={classNames("text", "textFR")}
                      >
                        از آشنایی با شما خوشبختم. اولین چیزی که به ذهنم می آید
                        این است که «چه کمکی از دست من بر می آید؟» همیشه برای
                        خدمت کردن به شما که در واقع خدمت کردن به خودم هم هست
                        هیجان زده و عجولم! فراموش می کنم که شما اول باید من را
                        بشناسید و به من اعتماد کنید تا تازه من بتوانم افتخار
                        خدمت کردن به شما را پیدا کنم... خوب پس بفرمایید چای! وای
                        که چقدر معرفی خود کار سختی است... اصلا نمی دانم از کجا
                        شروع کنم... مثلا بگویم سلام آریانا بریوینگ هستم، متاهل،
                        دو دختر پشم آلو بنام سوفی و گریسی دارم، اولی سگ و دومی
                        گربه؟ یا بگویم سلام آریانا بریوینگ هستم که سمانه کریمی
                        بودم! متولد سال 1361 در شهر قم، بزرگ شده کرج، شهروند
                        نیوزیلند و مقیم شهر کلگری در کانادا؟ یا بگویم سلام
                        آریانا بریوینگ هستم، دکترای بیونانوتکنولوژی، محققی بودم
                        که کوچ زندگی و سلامت شدم؟ یا از برچسب ها و عنواین دیگری
                        استفاده کنم؟ حقیقت این است که همه اینها هستم و هیچکدام
                        اینها نیستم... داستان مثل داستان یک کرم ابریشم است که یک
                        روز تصمیم می گیرد دور خودش پیله ای بپیچد و شانس پروانه
                        شدن را امتحان کند... از کرم سمانه نام درس خوان به پروانه
                        آریانا نام خلاق ... اگر کنجکاو هستید بیشتر از داستان
                        زندگی شخصی من بدانید روی این لینک کلیک کنید. هر چه فکر
                        می کنم می بینم هر چیزی اینجا از خودم بگویم زیاد به درد
                        شما نمی خورد! آن چیزی که بدرد شما می خورد حس کردن مهارت
                        و توانایی من برای کار با شما، صداقت و ریشه دار بودن من
                        در حرفهایی که می زنم و پیامی که می خواهم به شما منتقل
                        کنم است. یعنی فهمیدن این که آیا من فقط یکسری شعار می دهم
                        یا حرفهای کلیشه ای و قشنگ و انرژی مثبت توخالی می زنم که
                        وقت و پول و انرژی شما را هدر دهم، و در نهایت همان جایی
                        که بودید بدون هیچ تغییر و تحول یا رسیدن به نتیجه دلخواه
                        رهایتان کنم یا اینکه نه! واقعا چیزی در چنته دارم و هر
                        چیزی که می خواهم به شما یاد دهم را خودم هم زندگی می کنم
                        و روزانه تمرین می کنم. اینکه اصلا این پیام ها و درسهایی
                        که برای شما دارم بدرد کسی غیر خودم هم می خورد؟ آیا تا
                        حالا توانسته ام در زندگی کسی تغییر و تحول مثبت ایجاد کنم
                        یا کسی را از گرفتاری نجات دهم؟ اینکه آیا هزینه ای که می
                        دهید، ارزش تجربه ای که می کنید را دارد یا نه؟ خوب اینها
                        خیلی سوالات بجا و خوبی هستند. چقدر خوب است با هم بی پرده
                        و رک و راست حرف بزنیم و همیشه برویم سر اصل مطلب! به نظر
                        من بهترین جواب برای این سوالها خواندن تجربه کلاینتهایی
                        است که تصمیم گرفتند وقت بگذارند و چند خطی از نتیجه
                        کوچینگ و تجربه کلی خودشان از کار با من بنویسند. همینطور
                        سر زدن به صفحه اینستاگرام و کانال تلگرام من که هم
                        داستانهای شخصی و هم محتواهای رایگان در آنها می گذارم
                        وسیله خوبی برای عمیق تر کردن شناخت شما از من و ایجاد
                        اعتماد مشترک است. در انتها این را هم بگویم که ویژن من
                        برای این وبسایت خلق یک پایگاه جهانی و بی مرز برای به
                        اشتراک گذاشتن تجربیات زندگی، حقایق درونی، علایق، خدمات و
                        دانشم است. دوست دارم این فضای مجازی کانال مشترک بین من و
                        شما برای ارتباط، به اشتراک گذاری و دیدن و شنیدن یکدیگر
                        در عشق و صداقت باشد. اینجا فضایی است که من و شما یکدیگر
                        را رشد می دهیم و در کنار هم زندگی ایده آلمان را خلق می
                        کنیم. مرسی که وقت گذاشتید با هم یک چای بخوریم. به امید
                        دیدار دوباره
                      </Typography>
                    </Paper>
                  ) : !isFarsi && aboutArianaTabNo === 0 ? (
                    <Paper
                      className={classNames(classes.root, "paper")}
                      elevation={20}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        className={classNames("intro")}
                      >
                        Who am I?
                      </Typography>
                      <Typography component="p" className={classNames("text")}>
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
                      className={classNames(classes.root, "paper")}
                      elevation={20}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        className={classNames("intro", "introFR")}
                      >
                        تحصیلات آریانا در زمینه کوچینگ
                      </Typography>
                      <Typography
                        component="h3"
                        className={classNames("text", "textFR")}
                      >
                        آریانا علاوه بر دوره های متعددی که در زمینه رشد فردی و
                        روانشناسی، علم مغز و اعصاب، معنویت، فیزیک کوانتم، و
                        سلامت جسم با اساتید برتر دنیا دیده است، فارغ التحصیل
                        مؤسسه مارتا بک<sup>۱</sup> در زمینه تخصص کوچینگ زندگی و
                        موسسه تغذیه جامع<sup>۲</sup> در زمینه تخصص کوچینگ سلامتی
                        می باشد. او در زمینه های روشهای تحول زندگی، تغییر عادات،
                        پاک کردن افکار منفی، روانشناسی مثبت، روشهای نوآورانه
                        کوچینگ، تکنیک های مدیریت شیوه زندگی و زندگی سالم عمیقا
                        مطالعه کرده است. آریانا ذهنی بسیار کنجکاو دارد وخود را
                        دانش آموز همیشگی زندگی میداند. لیست زیر شامل برخی از
                        اساتید مشهوری هستند که آریانا افتخار شاگردیشان را داشته
                        است:
                        <ul style={{ paddingRight: "1rem" }}>
                          <li>
                            دکتر مارتا بک<sup>۳</sup>، جامعه شناس، کوچ زندگی،
                            نویسنده، بنیانگذار و مدیر موسسه ما رتا بک{" "}
                          </li>
                          <li>
                            دکتر برنه براون<sup>۴</sup>، یکی از اساتید و محققان
                            برتر دنیا در زمینه شجاعت، آسیب پذیری، شرم و همدلی،
                            استاد در دانشگاه هیوستون آمریکا
                          </li>
                          <li>
                            گرچن روبین<sup>۵</sup>، مدرس، نویسنده و سخنران در
                            مورد عادات، شادی و طبیعت بشر{" "}
                          </li>
                          <li>
                            ایانلا ونزات<sup>۶</sup>، کوچ زندگی و نویسنده{" "}
                          </li>
                          <li>
                            گابریل برنشتاین<sup>۷</sup>، کوچ زندگی و نویسنده
                          </li>
                          <li>
                            اکهارت تولی<sup>۸</sup>، استاد معنویت، نویسنده{" "}
                          </li>
                          <li>
                            دکتر دیپاک چوپرا<sup>۹</sup>، پیشرو در زمینه پزشکی
                            ذهن-بدن، متا فیزیک وکاربرد کوانتم تئوری در زندگی و
                            سلامتی، برنده جایزه نوبل فیزیک در سال 1998 برای
                            تفسیر منحصر به فرد خود از فیزیک کوانتومی در رابطه با
                            زندگی، آزادی و شادی اقتصادی{" "}
                          </li>
                          <li>
                            دکتر تارا برک<sup>۱۰</sup>، روانشناس، استاد مدیتیشن،
                            نویسنده
                          </li>
                          <li>
                            دکتر استیون هیز<sup>۱۱</sup>، متخصص سنتز قدرت ذهنی و
                            رفتار شناختی در حال تغییر{" "}
                          </li>
                          <li>
                            دکتر بروس لیپتون<sup>۱۲</sup>، زیست شناس سلول های
                            بنیادی، پیشگام شناخته شده بین المللی در زمینه پیوند
                            علم و روح، نویسنده و دریافت کننده جایزه صلح گوی در
                            سال 2009{" "}
                          </li>
                          <li>
                            دکتر ریک هنسون<sup>۱۳</sup>، عصب شناس، متخصص علوم
                            اعصاب کاربردی شادی پایدار، نویسنده
                          </li>
                          <li>
                            دکتر کریستین نرتروپ<sup>۱۴</sup>، پزشک و متخصص زنان
                            و زایمان، پیشگام و یکی از مقامات برجسته در زمینه
                            بهداشت و سلامتی زنان، استاد بالینی زنان و زایمان در
                            مرکز پزشکی مِین آمریکا
                          </li>
                          <li>
                            دکتر دیوید کاتز<sup>۱۵</sup>، پزشک و متخصص بهداشت
                            عمومی، مدیر مرکز تحقیقات پیشگیری دانشگاه دانشگاه ییل
                            آمریکا
                          </li>
                          <li>
                            دکتر والتر ویلت<sup>۱۶</sup>، پزشک و متخصص بهداشت
                            عمومی، صندلی تغذیه در دانشگاه هاروارد
                          </li>
                          <li>
                            دکتر اندرو وِیل<sup>۱۷</sup>، پزشک، نویسنده و مدیر
                            مرکز پزشکی ادغامی آریزونا در آمریکا
                          </li>
                          <li>
                            دکتر سوزان بلوم<sup>۱۸</sup>، پزشک و متخصص بهداشت
                            عمومی، استاد بالینی در دانشکده پزشکی مانت سینایی
                            آمریکا
                          </li>
                          <li>
                            دکتر مارک هیمان<sup>۱۹</sup>، پزشک، نویسنده و فعال
                            اجتماعی در زمینه سلامتی ، بنیانگذار مرکز فرا سلامتی{" "}
                          </li>
                          <li>
                            دکتر ماریون نستل<sup>۲۰</sup>، متخصص بهداشت عمومی،
                            استاد بخش تغذیه، مطالعات مواد غذایی و بهداشت عمومی
                            دانشگاه نیویورک
                          </li>
                          <li>
                            دکتر نیل برنارد<sup>۲۱</sup>، پزشک، نویسنده و
                            بنیانگذار کمیته پزشکان مسئول
                          </li>
                          <li>
                            دکتر جوئل فهرمن<sup>۲۲</sup>، پزشک خانواده و متخصص
                            پیشرو در درمان های تغذیه ای
                          </li>
                          <li>
                            برنی سیگل<sup>۲۳</sup>، نویسنده و متخصص در بهبودی و
                            توانمندسازی بیمار
                          </li>
                          <li>
                            دکتر جان دویلارد<sup>۲۴</sup>، پزشک، متخصص آیورودا،
                            نویسنده، استاد و متخصص پزشکی ورزشی{" "}
                          </li>
                          <li>
                            جا شوا روزنتال<sup>۲۵</sup>، کوچ سلامتی، بنیانگذار و
                            مدیر موسسه تغذیه ادغامی{" "}
                          </li>
                          <li>
                            آریانا هافینگتون<sup>۲۶</sup>، نویسنده، بنیانگذار و
                            سردبیر روزنامه هافینگتون پست
                          </li>
                          <li>
                            الیزابت گیلبرت<sup>۲۷</sup>، نویسنده، مربی و سخنران
                          </li>
                          <li>
                            {" "}
                            گلنون دویل<sup>۲۸</sup>، نویسنده، فعال اجتماعی در
                            زمینه حقوق زنان و بچه داری، بنیانگذار مو سسه خیریه
                            با هم برخیزیم
                          </li>
                          <li>
                            دانیل ویتالیس<sup>۲۹</sup>، پیشرو در زمینه توسعه
                            فردی، سلامتی، طراحی و استراتژی زندگی
                          </li>
                          <li>
                            جین راث<sup>۳۰</sup>، نویسنده و متخصص خوردن احساسی
                          </li>
                          <li>
                            {" "}
                            منشیا تاکور<sup>۳۱</sup>، متخصص امور مالی،
                            مدیراستراتژی های مالی برای زنان در باکینگهام{" "}
                          </li>
                          <div className="underline" />
                        </ul>
                        {/* <div className="underline" /> */}
                        <ol
                          style={{
                            paddingLeft: "1rem",
                            direction: "ltr",
                            fontSize: "0.9rem",
                            // listStyle: "persian",
                          }}
                        >
                          <li>Martha Beck Institute</li>
                          <li>The Institute for Integrative Nutrition (IIN)</li>
                          <li>
                            Martha Beck, PhD, life coach, sociologist, president
                            of Martha Beck, Inc.{" "}
                          </li>
                          <li>
                            Brene Brown, PhD, leader in the field of courage,
                            vulnerability, shame, and empathy, research
                            professor at the University of Houston
                          </li>
                          <li>
                            Gretchen Rubin, leader on subjects of habits,
                            happiness, and human nature, author, blogger,
                            speaker
                          </li>
                          <li>Iyanla Vanzant, life coach and author</li>
                          <li>Gabrielle Bernstein, life coach and author</li>
                          <li>Eckhart Tolle, spiritual teacher, author</li>
                          <li>
                            Deepak Chopra, MD, leader in the field of mind-body
                            medicine
                          </li>
                          <li>Tara Brach, PhD, psychologist, author</li>
                          <li>
                            Steven Hayes, PhD, expert on potent synthesis of
                            mindfulness and behavior-changing cognitive therapy
                          </li>
                          <li>
                            Bruce H. Lipton, PhD, Stem cell biologist, an
                            internationally recognized leader in bridging
                            science and spirit, author and recipient of the 2009
                            Goi Peace Award
                          </li>
                          <li>
                            Rick Hanson, PhD, neuroscientist, expert in
                            practical neuroscience of lasting happiness, author
                          </li>
                          <li>
                            Cristian Northrup, M.D, board-certified OB/GYN
                            physician, a visionary pioneer and a leading
                            authority in the field of women’s health and
                            wellness, clinical professor of OB/GYN at Maine
                            medical center
                          </li>
                          <li>
                            David Katz, MD, MPH, director of Yale University’s
                            Prevention Research Center
                          </li>
                          <li>
                            Walter Willett, MD, DrPH, chair of nutrition at
                            Harvard University
                          </li>
                          <li>
                            Andrew Weil, MD, director of the Arizona Center for
                            Integrative Medicine
                          </li>
                          <li>
                            Susan Blum, MD, MPH, assistant clinical professor at
                            Mount Sinai School of Medicine
                          </li>
                          <li>
                            Mark Hyman, MD, founder of The UltraWellness Center
                          </li>
                          <li>
                            Marion Nestle, PhD, MPH, professor at New York
                            University’s Department of Nutrition, Food Studies,
                            and Public Health
                          </li>
                          <li>
                            Neal Barnard, MD, author and Founding President of
                            the Physicians Committee for Responsible Medicine
                          </li>
                          <li>
                            Joel Fuhrman, MD, family physician and leading
                            expert on nutritional healing
                          </li>
                          <li>
                            Bernie Siegel, MD, author and expert in healing and
                            patient empowerment
                          </li>
                          <li>
                            John Douillard, MD, Ayurvedic Physician, Writer,
                            Professor and Chiropractor specializing in Sports
                            Medicine
                          </li>
                          <li>
                            Joshua Rosenthal, MScEd, founder and director of the
                            Institute for Integrative Nutrition
                          </li>
                          <li>
                            Ariana Hoffington, co-founder and editor-in-Chief of
                            The Huffington Post, author
                          </li>
                          <li>Elizabeth Gilbert, author and essayist</li>
                          <li>Glennon Doyle, activist and author </li>
                          <li>
                            Daniel Vitalis, health Motivator and Strategist
                          </li>
                          <li>
                            Geneen Roth, author and expert on emotional eating
                          </li>
                          <li>
                            Manisha Thakor, CFA, director of wealth strategies
                            for women at buckingham & the bam alliance founder,
                            MoneyZen LLC
                          </li>
                        </ol>
                      </Typography>
                    </Paper>
                  ) : !isFarsi && aboutArianaTabNo === 1 ? (
                    <Paper
                      className={classNames(classes.root, "paper")}
                      elevation={20}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        className={classNames("intro")}
                      >
                        Coaching Trainings
                      </Typography>
                      <Typography component="h3" className={classNames("text")}>
                        Dr Ariana graduated from the Martha Beck Institute where
                        she studied the science behind life transformation, the
                        art of thought dissolving and practical tools to
                        consolidate change. She has also studied with the
                        Institute for Integrative Nutrition where she learned
                        innovative coaching methods, practical lifestyle
                        management techniques, and over 100 dietary theories –
                        Ayurveda, gluten-free, Paleo, raw, vegan, macrobiotics,
                        and everything in between.
                        <br />
                        More than that during the past 10 years of her life she
                        has been studying mindfulness practices and spiritual
                        personal growth literature avidly. All her life has been
                        and is about realizing what life is really about and
                        seeking her own liberation. So whatever she is
                        delivering to her clients has been experimented and
                        tested at least through her own personal journey. Ariana
                        is a coach who really walks her talk and deeply believes
                        in what she does. She really is a pretty damn unique
                        combo.
                        <br />
                        Her education has equipped her with extensive,
                        cutting-edge knowledge in understanding human behaviour,
                        habit changing, holistic nutrition, health coaching, and
                        prevention. Drawing on her expertise. She can
                        confidently guarantee you that each session will leave
                        you feeling inspired and motivated. Each session would
                        leave you inspired to bring balance to the most
                        important elements of your life such as connection to
                        self, love and relationships, health and diet, career
                        and money. She will personally and carefully guide you
                        to make simple, small changes that transform your life.
                        <br />
                        It worth mentioning that during her journey so far, she
                        has had the studentship honour of some world's top
                        spirituality, personal growth, holistic health experts,
                        as well as psychologists and neuroscientists including:
                        <ul style={{ paddingLeft: "1rem" }}>
                          <li>
                            <b>Martha Beck, PhD,</b> life coach, sociologist,
                            president of Martha Beck, Inc.
                          </li>
                          <li>
                            <b>Brene Brown, PhD,</b> leader in the field of
                            courage, vulnerability, shame, and empathy, research
                            professor at the University of Houston
                          </li>
                          <li>
                            <b>Gretchen Rubin,</b> leader on subjects of habits,
                            happiness, and human nature, author, blogger,
                            speaker
                          </li>
                          <li>
                            <b>Iyanla Vanzant,</b> life coach and author
                          </li>
                          <li>
                            <b>Gabrielle Bernstein,</b> life coach and author
                          </li>
                          <li>
                            <b>Eckhart Tolle,</b> spiritual teacher, author
                          </li>
                          <li>
                            <b>Deepak Chopra, MD,</b> leader in the field of
                            mind-body medicine
                          </li>
                          <li>
                            <b>Tara Brach, PhD,</b> psychologist, author
                          </li>
                          <li>
                            <b>Steven Hayes, PhD,</b> expert on potent synthesis
                            of mindfulness and behavior-changing cognitive
                            therapy
                          </li>
                          <li>
                            <b>Bruce H. Lipton, PhD,</b> Stem cell biologist, an
                            internationally recognized leader in bridging
                            science and spirit, author and recipient of the 2009
                            Goi Peace Award
                          </li>
                          <li>
                            <b>Rick Hanson, PhD,</b> neuroscientist, expert in
                            practical neuroscience of lasting happiness, author
                          </li>
                          <li>
                            <b>Cristian Northrup, M.D,</b> board-certified
                            OB/GYN physician, a visionary pioneer and a leading
                            authority in the field of women’s health and
                            wellness, clinical professor of OB/GYN at Maine
                            medical center
                          </li>
                          <li>
                            <b>David Katz, MD,</b> MPH, director of Yale
                            University’s Prevention Research Center
                          </li>
                          <li>
                            <b>Walter Willett, MD,</b> DrPH, chair of nutrition
                            at Harvard University
                          </li>
                          <li>
                            <b>Andrew Weil, MD,</b> director of the Arizona
                            Center for Integrative Medicine
                          </li>
                          <li>
                            <b>Susan Blum, MD,</b> MPH, assistant clinical
                            professor at Mount Sinai School of Medicine
                          </li>
                          <li>
                            <b>Mark Hyman, MD,</b> founder of The UltraWellness
                            Center
                          </li>
                          <li>
                            <b>Marion Nestle, PhD,</b> MPH, professor at New
                            York University’s Department of Nutrition, Food
                            Studies, and Public Health
                          </li>
                          <li>
                            <b>Neal Barnard, MD,</b> author and Founding
                            President of the Physicians Committee for
                            Responsible Medicine
                          </li>
                          <li>
                            <b>Joel Fuhrman, MD,</b> family physician and
                            leading expert on nutritional healing
                          </li>
                          <li>
                            <b>Bernie Siegel, MD,</b> author and expert in
                            healing and patient empowerment
                          </li>
                          <li>
                            <b>John Douillard, MD,</b> Ayurvedic Physician,
                            Writer, Professor and Chiropractor specializing in
                            Sports Medicine
                          </li>
                          <li>
                            <b>
                              Joshua Rosenthal, MScEd, founder and director of
                              the Institute for Integrative Nutrition
                            </b>
                          </li>
                          <li>
                            <b>
                              Ariana Hoffington, co-founder and editor-in-Chief
                              of The Huffington Post, author
                            </b>
                          </li>
                          <li>
                            <b>Elizabeth Gilbert,</b> author and essayist
                          </li>
                          <li>
                            <b>Glennon Doyle,</b> activist and author
                          </li>
                          <li>
                            <b>Daniel Vitalis,</b> health motivator and
                            strategist
                          </li>
                          <li>
                            <b>Geneen Roth,</b> author and expert on emotional
                            eating
                          </li>
                          <li>
                            <b>Manisha Thakor, CFA,</b> director of wealth
                            strategies for women at buckingham & the bam
                            alliance founder, MoneyZen LLC
                          </li>
                          {/* <div className="underline" /> */}
                        </ul>
                      </Typography>
                    </Paper>
                  ) : (
                    <Testimony2 />
                  )}
                  {/* </Section> */}
                </AboutWrapper>
              )
            }}
          />
        </Layout>
      )}
    </ContextConsumer>
    )
  }
}



// AboutPage.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default withStyles(stylesTheme)(AboutPage)

const ImageWrapper = styled.div`
  background: url(${props => props.img.src});
  min-height: calc(90vh);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: #464646;
`

const AboutWrapper = styled.div`
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
