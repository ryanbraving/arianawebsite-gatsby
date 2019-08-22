import React, { Component } from "react"
// import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import classnames from "classnames"
import { styles } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"

const stylesTheme = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
})
class AboutTab_AboutAriana_FR extends Component {
  render() {
    const { classes } = this.props
    return (
      <AboutWrapper>
        {/* <Section> */}
        <Paper className={classnames(classes.root, "paper")} elevation={20}>
          <Typography
            variant="h5"
            component="h3"
            className={classnames("intro", "introFR")}
          >
            سلام آریانا هستم!
          </Typography>
          <Typography component="h3" className={classnames("text", "textFR")}>
            از آشنایی با شما خوشبختم. اولین چیزی که به ذهنم می‌آید این است که
            «چه کمکی از دست من بر می‌آید؟» همیشه برای خدمت کردن به شما که در
            واقع خدمت کردن به خودم هم هست -چون همه وجودم را سرشار از عشق و رضایت
            می‌کند- هیجان زده و عجولم! فراموش می‌کنم که شما اول باید من را
            بشناسید و به من اعتماد کنید تا تازه من بتوانم افتخار خدمت کردن به
            شما را پیدا کنم... خوب پس بفرمایید چای!
            <br />
            وای که چقدر معرفی خود کار سختی است... اصلاً نمی‌دانم از کجا شروع
            کنم... مثلا بگویم سلام آریانا بریوینگ هستم، متأهل، دو دختر پشم‌آلو
            بنام سوفی و گریسی دارم، اولی سگ و دومی گربه؟ یا بگویم سلام آریانا
            بریوینگ هستم که سمانه کریمی بودم! متولد سال ۱۳۶۱ در شهر قم، بزرگ شده
            کرج، شهروند نیوزیلند و مقیم شهر کلگری در کانادا؟ یا بگویم سلام
            آریانا بریوینگ هستم، دکترای بیو‌ نانو‌ تکنولوژی، محققی بودم که کوچ
            زندگی و سلامت شدم؟ یا از برچسب‌ها و عنوان‌هایی دیگر استفاده کنم؟
            حقیقت این است که همه اینها هستم و هیچکدام اینها نیستم... داستان من
            مثل داستان یک کرم ابریشم است که یک روز تصمیم می‌گیرد دور خود پیله‌ای
            بپیچد و شانس پروانه شدن را امتحان کند... از کِرم سمانه نام درس خوان
            به پروانه آریانا نام خلاق ...
            <br />
            هر چه فکر می‌کنم می‌بینم هر چیزی اینجا از خودم بگویم زیاد به درد شما
            نمی‌خورد! آن چیزی که بدرد شما می‌خورد حس کردن مهارت و توانایی من
            برای کار با شما، صداقت و ریشه‌دار بودن من در حرف‌هایی که می‌زنم و
            پیامی که می‌خواهم به شما منتقل کنم است. یعنی فهمیدن این که آیا من
            فقط یکسری شعار می‌دهم یا حرف‌های کلیشه‌ای، قشنگ و انرژی مثبت توخالی
            می‌زنم که وقت و پول و انرژی شما را هدر دهم، و در نهایت همان جایی که
            بودید بدون هیچ تغییر و تحول یا رسیدن به نتیجه دلخواه رهایتان کنم یا
            اینکه نه! واقعا چیزی در چنته دارم و هر چیزی که می‌خواهم به شما یاد
            دهم را خودم هم در زندگی‌ الگو قرار می‌دهم و روزانه تمرین می‌کنم.
            اینکه اصلا این پیام‌ها و درس‌هایی که دارم بدرد کسی غیر خودم هم
            می‌خورد؟ آیا تا به حال توانسته ام به کسی کمک کنم که در زندگی‌اش
            تغییر و تحولی مثبت ایجاد کند؟ اینکه آیا هزینه‌ای که پرداخت می‌دهید،
            ارزش تجربه‌ای که می‌کنید را دارد یا نه؟
            <br />
            خوب اینها خیلی سوالات بجا و خوبی هستند. چقدر خوب است با هم بی‌پرده و
            رک حرف بزنیم و برویم سر اصل مطلب! به نظر من بهترین جواب برای این
            سوال‌ها خواندن{" "}
            <Link
              to="/services"
              style={{
                textDecoration: "none",
                borderBottom: "2px solid currentColor",
              }}
              state={{
                link_tabNo: 4,
              }}
            >
              {" "}
              نظر کلاینت‌هایی
            </Link>{" "}
            است که لطف کردند، وقت گذاشتند و چند خطی از نتیجه کوچینگ و تجربه کلی
            خودشان از کار با من را نوشتند. همینطور سر زدن به صفحه{" "}
            <a
              href="https://www.instagram.com/arianabraving/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                borderBottom: "2px solid currentColor",
              }}
            >
              اینستاگرام
            </a>{" "}
            و{" "}
            <a
              href="https://t.me/ArianaBraving"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                borderBottom: "2px solid currentColor",
              }}
            >
              کانال تلگرام
            </a>{" "}
            من که هم داستان‌های شخصی و هم محتواهای رایگان در آنها می‌گذارم وسیله
            خوبی برای عمیق‌تر کردن شناخت شما از من و ایجاد اعتماد مشترک است.
            <br />
            در انتها این را هم بگویم که ویژن (هدف نهایی) من برای این وبسایت خلق
            یک پایگاه جهانی و بی مرز برای به اشتراک گذاشتن تجربیات زندگی، حقایق
            درونی، علایق، خدمات و دانشم است. دوست دارم این فضای مجازی کانالی
            مشترک بین من و شما باشد، برای ارتباط، به اشتراک‌گذاری و دیدن و شنیدن
            یکدیگر در عشق و صداقت. اینجا فضایی است که من و شما یکدیگر را رشد
            می‌دهیم و در کنار هم زندگی ایده‌آلمان را خلق می‌کنیم.
            <br />
            مرسی که وقت گذاشتید با هم یک چای بخوریم.
            <br />
            به امید دیدار دوباره
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
