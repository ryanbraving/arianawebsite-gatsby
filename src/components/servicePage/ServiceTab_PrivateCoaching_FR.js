import React, { Component } from "react"
// import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import classnames from "classnames"
import { styles, SectionButton } from "../../utils"
import { Link } from "gatsby"
import styled from "styled-components"

const stylesTheme = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
})
class CoachingTab_PrivateCoaching_FR extends Component {
  render() {
    const { classes } = this.props
    return (
      <CoachingWrapper>
        {/* <Section> */}
        <Paper className={classnames(classes.root, "paper")} elevation={20}>
          <Typography
            variant="h5"
            component="h3"
            className={classnames("intro", "introFR")}
          >
            کوچینگ و مشاوره خصوصی با آریانا
          </Typography>
          <Typography component="h3" className={classnames("text", "textFR")}>
            چه چیزی را با همه وجودت، با تک تک سلول‌های بدنت، می‌خواهی در زندگیت
            تجربه کنی؟ آرامش بیشتر؟ اعتماد به نفس بیشتر؟ عشق بیشتر؟ موفقیت
            بیشتر؟ انرژی بیشتر؟ پول بیشتر؟ یا... جواب شما هر چه که هست تمام یا
            بخشی از زندگی ایده‌آل شماست و کار آریانا به عنوان یک کوچ این است که
            به شما یاد می‌دهد چطور زندگی ایده‌آلتان را برای خود خلق کنید. چه
            معامله ای از این بهتر؟
            <br />
            برای تجربه جلسات کوچینگ با آریانا نیاز به حضور فیزیکی در شهری که او
            زندگی می‌کند ندارید. تمام خدمات آریانا آنلاین است و جلسات کوچینگ با
            استفاده از اسکایپ، واتس‌اپ و یا تلفن برگزار می‌شود. یکی از اصول
            زندگی و کاری آریانا سادگی و راحتی است و به همین دلیل تمام خدمات خود
            را در ساده‌ترین و راحت‌ترین شکل ممکن به شما ارایه می‌دهد. تنها پیش
            نیاز شما برای کار با آریانا تعهد به رشد فردی خود و دسترسی به اینترنت
            یا تلفن است.
          </Typography>
          <br />
          <Typography
            variant="h5"
            component="h3"
            className={classnames("intro", "introFR")}
          >
            تضمین برگشت پول
          </Typography>
          <Typography component="h3" className={classnames("text", "textFR")}>
            اگر حتی چند درصد احساس می‌کنید کوچینگ با آریانا می‌تواند برای شما
            مفید باشد، این شانس را از خود دریغ نکنید و برای درخواست کوچینگ تعلل
            نکنید چرا که چیزی برای از دست دادن ندارید! مهمترین مساله برای آریانا
            در تمامی کار‌هایش ارائه بهترین سرویس و خدمتی ارزشمند است. به همین
            دلیل اگر پس از جلسه اول تشخیص دهند که نمی‌توانند به شما کمکی کنند،
            خود ایشان از ادامه کار انصراف داده و تمام هزینه‌ای که پرداخت
            کرده‌اید به شما باز می گردد. همچنین اگر شما هم بعد از جلسه اول به
            این نتیجه رسیدید که آریانا فرد مناسبی برای خدمت به شما نیست، تمام
            هزینه ای که پرداخت کرده‌اید به شما باز خواهد گشت. اگر برای حل مشکل
            خود تا بحال به مشاوران مختلفی مراجعه و یا روش‌های متعددی را امتحان
            کرده‌اید اما هنوز به نتیجه دلخواه نرسیده‌اید، به شما توصیه می‌کنیم
            کار با آریانا را هم امتحان کنید. چرا که ایشان از روشهای متعدد و
            نوینی برای کوچینگ استفاده می‌کنند و تا بحال به افراد زیادی با مشکلات
            مختلف کمک و زندگی آنها را متحول کرده‌اند.
          </Typography>
          <br />
          <Typography
            variant="h5"
            component="h3"
            className={classnames("intro", "introFR")}
          >
            نحوه کار با آریانا
          </Typography>
          <Typography component="h3" className={classnames("text", "textFR")}>
            به دو روش خریداری <span className="greenText">جلسات موردی</span> یا{" "}
            <span className="greenText">بسته های کوچینگ</span> می‌توانید با
            آریانا کار کنید. توصیه آریانا به شما خرید بسته‌های کوچینگ ۵، ۱۰ یا
            ۱۵ جلسه‌ای است. با این کار علاوه بر اینکه مبلغ کلی که پرداخت می‌کنید
            کمتر می‌شود، به آریانا و خودتان این اجازه را می‌دهید تا با داشتن
            زمان مناسب روی یک مشکل یا موضوع خاص کار کنید. در ضمن نگران خرید
            جلسات اضافی نباشید، در صورتی که کار شما زودتر به نتیجه برسد و یا در
            طی کار آریانا تشخیص دهد تعداد جلسات کوچینگ مورد نیاز شما کمتر از
            تعداد جلسات خریداری شده است، مبلغ معادل تعداد جلسات باقیمانده به شما
            باز می‌گردد. لطفا توجه کنید که کار کوچینگ معمولا سخت و گاهاً طاقت
            فرسا است و هدف آریانا از ارائه بسته‌ها صرفاً تشویق کردن و متعهد کردن
            کلاینت‌ها به ادامه کار است.
          </Typography>
          <Typography component="h3" className={classnames("text", "textFR")}>
            <table>
              <tbody>
                <tr>
                  <th>روش‌های کوچینگ خصوصی</th>
                  <th>تعداد جلسات</th>
                  <th>درصد تخفیف</th>
                </tr>
                <tr>
                  <td>جلسات موردی</td>
                  <td>۱ جلسه</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>بسته حفاری عمیق</td>
                  <td>۵ جلسه</td>
                  <td>۱۰ درصد</td>
                </tr>
                <tr>
                  <td>بسته باز‌سازی و طراحی دوباره</td>
                  <td>۱۰ جلسه</td>
                  <td>۱۵ درصد</td>
                </tr>
                <tr>
                  <td>بسته شیوه زندگی</td>
                  <td>۱۵ جلسه</td>
                  <td>۲۰ درصد</td>
                </tr>
              </tbody>
              <caption>زمان هر جلسه ۶۰ دقیقه می باشد.</caption>
              <caption>جهت اطلاع از هزینه‌های کوچینگ لطفا تماس بگیرید.</caption>
            </table>
          </Typography>
          <Typography component="h3" className={classnames("text", "textFR")}>
            <br />
            <ul style={{ paddingRight: "1rem" }} className="greenText">
              <li>
                جلسات موردی
                <br />
                <span>
                  <b>تعداد جلسات : ۱ جلسه</b>
                  <br />
                  ۶۰ دقیقه تجربه کوچینگ با آریانا. اگر به جلسات موردی تمایل
                  دارید، یا فقط می‌خواهید کلید یک تغییر را بزنید، این گزینه
                  انتخاب مناسبی برای شماست.
                </span>
              </li>
              <Link
                to="/coaching.request"
                style={{ textDecoration: "none" }}
                state={{
                  coachingTypeRequest: "1-On-1",
                }}
              >
                <SectionButton style={{ margin: "2rem auto" }}>
                  درخواست کوچینگ
                  <h6 className="coachingType">(جلسات موردی)</h6>
                </SectionButton>
              </Link>
              <br />
              <li>بسته های کوچینگ</li>
            </ul>
            <ul style={{ paddingRight: "1rem", listStyleType: "none" }}>
              <li>
                <b className="coachingPackTitle">بسته کوچینگ حفاری عمیق</b>
                <br />
                <b>تعداد جلسات : ۵ جلسه</b>
                <br />
                <b>تخفیف : ۱۰ درصد</b>
                <br />
                پنج جلسه ۶۰ دقیقه ای برای حفاری عمیق و کار کردن روی مسائلی که
                شما را آزار می‌دهند. در طی این جلسات فرصتی برای شما فراهم می‌شود
                که نه تنها به کشف زیربنایی ساختار فکری و چگونگی درگیری‌تان با
                این مسائل آگاه شوید، بلکه آریانا ابزارهای کاربردی در جهت
                رهایی‌تان از این مسائل آزار دهنده به شما آموزش می‌دهد. برای
                استفاده بهینه از این جلسات، پیشنهاد آریانا اختصاص جلسات هفتگی
                است. مدت اعتبار این بسته سه ماه است.
              </li>
              <Link
                to="/coaching.request"
                style={{ textDecoration: "none" }}
                state={{
                  coachingTypeRequest: "Dig-Deep",
                }}
              >
                <SectionButton style={{ margin: "2rem auto" }}>
                  درخواست کوچینگ
                  <h6 className="coachingType">(حفاری عمیق)</h6>
                </SectionButton>
              </Link>
              <br />
              <li style={{ paddingRight: "1rem" }}>
                <b className="coachingPackTitle">
                  بسته کوچینگ باز سازی و طراحی دوباره{" "}
                </b>
                <br />
                <b>تعداد جلسات : ۱۰ جلسه</b>
                <br />
                <b>تخفیف : ۱۵ درصد</b>
                <br />
                ده جلسه ۶۰ دقیقه ای برای بررسی و تامل در ابعادی از زندگی شما که
                گرفته و تنگ است. اگرتصمیم به ایجاد یکسری تغییرات اساسی، برای
                مثال در مسیر شغلی یا روابط خود دارید، این گزینه انتخاب مناسبی
                برای شماست. این جلسات شرایطی را برای شما فراهم می‌کنند که
                بتوانید با کمک آریانا موانع و مشکلات بر سر راه و زیر ساخت‌های
                فکری و باوری خود را شناسایی کنید، مجهز به ابزارهای مورد نیاز
                برای برداشتن آنها شوید و نحوه طراحی دوباره و خلق زندگی
                ایده‌آلتان را یاد بگیرید. در طی این فرایند در واقع آریانا به شما
                راه نصب نرم افزارهای جدید در سخت افزار مغزتان را آموزش می‌دهد و
                شما به مهارت‌های لازم برای تعویض عادات و ایجاد تغییرات دلخواه در
                هر زمینه‌ای از زندگی‌تان مجهز می‌شوید. برای استفاده بهینه از این
                جلسات، پیشنهاد آریانا اختصاص جلسات هفتگی است. مدت اعتبار این
                بسته شش ماه است.
              </li>
              <Link
                to="/coaching.request"
                style={{ textDecoration: "none" }}
                state={{
                  coachingTypeRequest: "Rebuild-Redesign",
                }}
              >
                <SectionButton style={{ margin: "2rem auto" }}>
                  درخواست کوچینگ
                  <h6 className="coachingType">(باز سازی و طراحی دوباره)</h6>
                </SectionButton>
              </Link>
              <br />
              <li style={{ paddingRight: "1rem" }}>
                <b className="coachingPackTitle">بسته کوچینگ شیوه زندگی</b>
                <br />
                <b>تعداد جلسات : ۱۵ جلسه</b>
                <br />
                <b>تخفیف : ۲۰ درصد</b>
                <br />
                این بسته شامل پانزده جلسه ۶۰ دقیقه ای در طی یک دوره شش ماهه است.
                در طی این فرآیند شما ابزارهای موثر و کاربردی می‌آموزید و بینش
                ارزشمندی کسب می‌کنید که در نتیجه آن می‌توانید در زندگی‌تان
                تغییرات ماندگار ایجاد کنید. تغییراتی که آرامش درونی، سلامت جسمی
                و روحی، سطح انرژی، شادی، و بطور کلی شیوه زندگی شما را بهبود
                می‌بخشند. خرید این بسته یعنی سرمایه‌گذاری روی خود برای:
                <ul style={{ listStyleType: "none" }}>
                  <li style={{ marginTop: "1.5rem" }}>
                    (۱) شناخت باورهای محدود کننده و اقدام برای رهایی از این
                    محدودیت‌ها،
                  </li>
                  <li>(۲ ) درک نیازهای منحصر به فرد و خواسته های عمیق قلبی</li>
                  <li>(۳) رسیدن به شفافیت درونی و ویژنینگ</li>
                  <li style={{ marginBottom: "1.5rem" }}>
                    (۴) طراحی برنامه ای خاص برای روش زندگی با توجه به این
                    داده‌ها.
                  </li>
                </ul>
                در طول این سفر شش ماهه، آریانا راهنما و مربی شخصی شما در ساخت یک
                راه پله ایمن برای صعود خواهد بود. صعود از جایی که در حال حاضر
                ایستاده‌اید به جایی که با همه وجود می‌خواهید باشید. برای استفاده
                بهینه از این جلسات، پیشنهاد آریانا اختصاص جلسات هفتگی برای پنج
                جلسه اول و دو هفته یکبار برای مابقی جلسات است. مدت اعتبار این
                بسته شش ماه است.
              </li>
              <Link
                to="/coaching.request"
                style={{ textDecoration: "none" }}
                state={{
                  coachingTypeRequest: "Life-Technique",
                }}
              >
                <SectionButton style={{ margin: "2rem auto" }}>
                  درخواست کوچینگ
                  <h6 className="coachingType">(شیوه زندگی)</h6>
                </SectionButton>
              </Link>
            </ul>
          </Typography>
        </Paper>
      </CoachingWrapper>
    )
  }
}

// Coaching_Tab_Private_FR.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default withStyles(stylesTheme)(CoachingTab_PrivateCoaching_FR)

const CoachingWrapper = styled.div`
  .greenText {
    font-weight: bold;
    font-size: 1.2rem;
    color: green;
    span {
      font-weight: normal;
      font-size: 1rem;
      color: black;
    }
    li {
      font-size: 1.5rem;
    }
  }
  table,
  th,
  td {
    border: 1px solid grey;
    text-align: center;
  }
  table {
    width: 60%;
    margin: 3rem auto;
  }
  th {
    font-size: 1.15rem;
    color: green;
  }
  caption {
    caption-side: bottom;
    margin-top: 1.2rem;
    font-size: 0.9rem;
    line-height: 1rem;
  }
  .coachingPackTitle {
    border-bottom: 2px solid currentColor;
    font-weight: bold;
    font-size: 1.2rem;
  }

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
