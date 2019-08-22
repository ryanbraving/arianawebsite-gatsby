import React, { Component } from 'react'
// import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import classnames from "classnames"
import { styles } from "../../utils"
import styled from "styled-components"


const stylesTheme = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
})
class AboutTab_Education_FR extends Component {
  render() {
    const { classes } = this.props
    return (
    <AboutWrapper>
                  {/* <Section> */}
                    <Paper
                      className={classnames(classes.root, "paper")}
                      elevation={20}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        className={classnames("intro", "introFR")}
                      >
                        تحصیلات آریانا در زمینه کوچینگ
                      </Typography>
                      <Typography
                        component="h3"
                        className={classnames("text", "textFR")}
                      >
                       تحصیلات آکادمیک آریانا در زمینه مهندسی است و او دارای مدرک دکترا و فوق دکترا در رشته تخصصی بیو نانو تکنولوژی است. اما آریانا بدلیل علاقه زیاد شخصی و البته احساس نیاز شدید، با هدف پیدا کردن جواب‌هایی قانع کننده برای سوالات مهم و اساسی زندگی، به مطالعه، یادگیری و شرکت در دوره‌های متعددی در زمینه‌های علوم اپی ‌ژنتیک، فیزیک ‌کوانتم، مغز و اعصاب، رشد فردی، روانشناسی، معنویت و سلامت جسمی، با اساتید برتر دنیا پرداخت. آریانا همچنین فارغ التحصیل مؤسسه مارتا بک
                       <sup>۱</sup>{" "}
                       در زمینه تخصص کوچینگ زندگی و موسسه تغذیه جامع نیویورک
                       <sup>۲</sup>{" "}
                       در زمینه تخصص کوچینگ سلامتی می‌باشد.
                       <br/>
                       آریانا در زمینه روش‌های تحول زندگی، تغییر عادات، پاک کردن افکار منفی، روانشناسی مثبت، روش‌های نوآورانه کوچینگ، تکنیک‌های مدیریت شیوه زندگی و زندگی سالم عمیقا مطالعه کرده است. او ذهنی بسیار کنجکاو دارد و خود را دانش آموز همیشگی زندگی می‌داند. او دائما با مطالعه، مرور منابع علمی و شرکت در دوره‌های آموزشی و سمینارهای مختلف، مهارت‌های خود را در زمینه کوچینگ و رشد فردی گسترش می‌دهد. 
                       <br/>
                       لیست زیر شامل برخی از اساتید مشهوری هستند که تا به امروز آریانا افتخار شاگردیشان را داشته است:
                       <br/>
                       <br/>
                        <ul style={{ paddingRight: "1rem" }}>
                          <li>
                            دکتر مارتا بک<sup>۳</sup>، جامعه شناس، کوچ زندگی،
                            نویسنده، بنیانگذار و مدیر موسسه مارتا بک{" "}
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
                            ذهن—بدن، متا فیزیک وکاربرد کوانتم تئوری در زندگی و
                            سلامتی، برنده جایزه نوبل فیزیک در سال ۱۹۹۸ برای
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
                            و زایمان، پیشگام و یکی از افراد برجسته در زمینه
                            بهداشت و سلامتی زنان، استاد بالینی زنان و زایمان در
                            مرکز پزشکی مِین آمریکا
                          </li>
                          <li>
                            دکتر دیوید کاتز<sup>۱۵</sup>، پزشک و متخصص بهداشت
                            عمومی، مدیر مرکز تحقیقات پیشگیری دانشگاه ییل
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
                            پیشرو در درمان‌های تغذیه‌ای
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
                            زمینه حقوق زنان و بچه داری، بنیانگذار موسسه خیریه
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
                            مدیراستراتژی‌های مالی برای زنان در باکینگهام{" "}
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
                          <li>The Institute for Integrative Nutrition (IIN), New York</li>
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
                </AboutWrapper>
  )
}
}

// Coaching_Tab_Private_FR.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default withStyles(stylesTheme)(AboutTab_Education_FR)

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