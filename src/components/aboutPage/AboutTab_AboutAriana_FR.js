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
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})
class AboutTab_AboutAriana_FR extends Component {
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
                        سلام آریانا هستم!
                      </Typography>
                      <Typography
                        component="h3"
                        className={classnames("text", "textFR")}
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
                </AboutWrapper>
  )
}
}

// Coaching_Tab_Private_FR.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default withStyles(stylesTheme)(AboutTab_AboutAriana_FR)

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