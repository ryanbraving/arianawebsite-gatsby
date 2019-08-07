import React, { Component } from "react"
// import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import classnames from "classnames"
import SEO from "../seo"
import { Section, styles, SectionButton } from "../../utils"
import { Link } from "gatsby"
import styled from "styled-components"

const stylesTheme = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
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
            چه چیزی را با همه وجودت، با تک تک سلولهای بدنت، می خواهی در زندگیت
            تجربه کنی؟ آرامش بیشتر؟ اعتماد به نفس بیشتر؟ عشق بیشتر؟ موفقیت
            بیشتر؟ انرژی بیشتر؟ پول بیشتر؟ یا ... جواب شما هر چه که هست تمام یا
            بخشی از زندگی ایده آل شماست و کار آریانا به عنوان یک کوچ این است که
            به شما یاد می دهد چطور زندگی ایده آلتان را برای خود خلق کنید. چه
            معامله ای از این بهتر؟ <br />
            برای تجربه جلسات کوچینگ با آریانا نیاز به حضور فیزیکی در شهری که او
            زندگی می کند ندارید. تمام خدمات آریانا آنلاین است و جلسات کوچینگ با
            استفاده از اسکایپ، واتس اپ و یا تلفن برگزار می شود. یکی از اصول
            زندگی و کاری آریانا سادگی و راحتی است و به همین دلیل تمام خدمات خود
            را در ساده ترین و راحت ترین شکل ممکن به شما ارایه می دهد. تنها پیش
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
            اگر حتی چند درصد احساس می کنید کوچینگ با آریانا می تواند برای شما
            مفید باشد، این شانس را از خود دریغ نکنید و برای درخواست کوچینگ تعلل
            نکنید چرا که چیزی برای از دست دادن ندارید! مهمترین مساله برای آریانا
            در کار با هر شخص این است که می خواهد بهترین سرویس و خدمتی ارزشمند
            ارائه دهد. به همین دلیل اگر بعد از جلسه اول تشخیص دهد که نمی تواند
            به شما کمکی کند، خود ایشان از ادامه کار انصراف داده و تمام هزینه ای
            که پرداخت کرده اید به شما باز می گردد. همچنین اگر شما هم بعد از جلسه
            اول به این نتیجه رسیدید که آریانا فرد مناسبی برای خدمت به شما نیست،
            تمام هزینه ای که پرداخت کرده اید به شما باز خواهد گشت. اگر برای حل
            مشکل خود تا بحال به مشاوران مختلفی مراجعه و یا روشها و کارهای مختلف
            را امتحان کرده اید اما هنوز به نتیجه دلخواه نرسیده اید، به شما توصیه
            می کنیم کار با آریانا را هم امتحان کنید چرا که ایشان با اساتید بزرگ
            و بسیار مشهوری در دنیا کار کرده و از روشهای متعدد و نوینی برای
            کوچینگ استفاده می کند. ایشان تا بحال به افراد زیادی با مشکلات مختلف
            کمک و زندگی خیلی ها را متحول کرده است.
          </Typography>
          <br />
          <Typography
            variant="h5"
            component="h3"
            className={classnames("intro", "introFR")}
          >
            روش های کار با آریانا
          </Typography>
          <Typography component="h3" className={classnames("text", "textFR")}>
            به دو روش خریداری <span className="greenText">جلسات موردی</span> یا{" "}
            <span className="greenText">بسته های کوچینگ</span> می توانید با
            آریانا کار کنید. اما توصیه آریانا برای کوچینگ به افرادی که مراجعه می
            کنند این است که بسته های کوچینگ ۵، ۱۰ یا ۱۵ جلسه ای خریداری کنند. با
            این کار علاوه بر اینکه مبلغ کلی که پرداخت می کنید کمتر می شود، به
            آریانا و خودتان این اجازه را می دهید تا با داشتن زمان مناسب روی یک
            مشکل یا موضوع خاص کار کنید. تجربه ثابت کرده که حدوداً ۵ جلسه حداقل
            زمانیست که نیاز است تا بتوان روی یک موضوع کار کرد و در خیلی از موارد
            حدوداً ۱۰ جلسه زمان لازم است تا بتوان بررسی عمیق و ریشه ای روی یک
            مشکل انجام داد و به نتیجه رسید. اما نگران خرید جلسات اضافی نباشید،
            در صورتی که کار شما زودتر به نتیجه برسد و یا در طی کار آریانا تشخیص
            دهد تعداد جلسات کوچینگ مورد نیاز شما کمتر از تعداد جلسات خریداری شده
            است، مبلغ معادل تعداد جلسات باقیمانده به شما باز می گردد. لطفا توجه
            کنید که کار کوچینگ معمولا سخت و گاهاً طاقت فرسا است و هدف آریانا از
            ارائه بسته ها صرفاً تشویق کردن و متعهد کردن کلاینتها به ادامه کار
            است. همچنین لازم به ذکر است که گرفتن بسته های کوچینگ به معنی تضمین
            برای پایان کار و نتیجه گرفتن بعد از ۵، ۱۰ یا ۱۵ جلسه نیست. کوچینگ یک
            تعهد دو طرفه است و خود شما نقش بسیار مهمی در بازدهی این پروسه دارید.
          </Typography>

          <Typography component="h3" className={classnames("text", "textFR")}>
            <br />
            <ul style={{ paddingRight: "1rem" }} className="greenText">
              <li>
                جلسات موردی
                <br />
                
                <span>
                     <b >
                  تعداد جلسات : ۱ جلسه
                </b>
                <br/>
                  60 دقیقه تجربه کوچینگ با آریانا. اگر به جلسات موردی تمایل
                  دارید، یا فقط می خواهید کلید یک تغییر را بزنید، این گزینه
                  انتخاب مناسبی برای شماست .
                </span>
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
              <li>بسته کوچینگ : حفاری عمیق
                <br/>
                 <span>
                <b >
                  تعداد جلسات : ۵ جلسه
                </b>
                <br/>
                <b >
                  تخفیف : ۱۰ درصد
                </b>
                <br />
                پنج جلسه 60 دقیقه ای برای حفاری عمیق و کار کردن روی مسایلی که
                شما را آزار می دهند. در طی این جلسات فرصتی برای شما فراهم می شود
                که نه تنها به کشف زیربنایی ساختار فکری و چگونگی درگیری اتان با
                این مسایل آگاه می شوید، بلکه آریانا ابزارهای کاربردی در جهت
                رهایی اتان را به شما آموزش می دهد. در طی این فرایند شما یاد
                خواهید گرفت که چگونه قطب نمای درونی خود را که همواره در حال نشان
                دادن بهترین مسیر ممکن برای سفر زندگی اتان است را کالیبره و آغاز
                به حرکت در مسیر خلق زندگی ایده آلتان کنید. برای استفاده بهینه از
                این جلسات، پیشنهاد آریانا اختصاص یک جلسه دو هفته یکبار در طی سه
                ماه است.
                </span>
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
              <li >
                  
                <b >
                  بسته کوچینگ : باز سازی و طراحی دوباره{" "}
                </b>
                <br/>
                 <span>
                <b >
                  تعداد جلسات : ۱۰ جلسه
                </b>
                <br/>
                <b >
                  تخفیف : ۱۵ درصد
                </b>
                <br />
                ده جلسه 60 دقیقه ای برای بررسی و تامل در ابعادی از زندگی اتان که
                گرفته و تنگ است. اگرتصمیم به ایجاد یکسری تغییرات اساسی، برای
                مثال در مسیر شغلی یا روابط خود دارید، این گزینه انتخاب مناسبی
                برای شماست. این جلسات زمان و مکانی را برای شما فراهم می کنند که
                بتوانید با کمک آریانا مصائب بر سر راه و زیر ساختهای فکری و باوری
                خود را بررسی کنید، مجهز به ابزارهای مورد نیاز برای برداشتن
                دیوارهای اضافی و بدرد نخور شوید و نحوه طراحی دوباره و خلق زندگی
                ایده آلتان را یاد بگیرید. در طی این فرایند در واقع آریانا به شما
                راه اینستال نرم افزارهای جدید در سخت افزار مغزتان را آموزش می
                دهد و شما به مهارتهای لازم برای تعویض عادات و ایجاد تغییرات
                دلخواه در هر زمینه ای از زندگی اتان مجهز می شوید. برای استفاده
                بهینه از این جلسات، پیشنهاد آریانا اختصاص یک جلسه هفته ای یکبار
                یا استفاده از جلسات در طی حداکثرشش ماه است.
                </span>
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
                  <h6 className="coachingType">(باز سازی و طراحی دوباره)</h6>
                </SectionButton>
              </Link>
              

             <li >
                  
                <b >
                  بسته کوچینگ: شیوه زندگی 
                </b>
                <br/>
                 <span>
                <b >
                  تعداد جلسات : ۱۵ جلسه
                </b>
                <br/>
                <b >
                  تخفیف : ۲۰ درصد
                </b>
                <br />
                این بسته شامل پانزده جلسه ۶۰ دقیقه ای در طی یک دوره شش ماهه است. خرید این بسته یعنی سرمایه گذاری روی خود برای شناخت و رهایی از محدودیتهای خود، درک نیازهای منحصر به فرد و خواسته های عمیق قلبی، رسیدن به شفافیت درونی و ویژنینگ و البته طراحی برنامه ای خاص برای روش زندگی با توجه به این نیازها، خواسته ها و ویژن زندگی. در طول این سفر شش ماهه، آریانا راهنما و مربی شما خواهد بود برای ساخت یک راه پله ایمن برای صعود، صعود از جایی که در حال حاضر ایستاده اید به جایی که با همه وجود می خواهید باشید. در این فرآیند شما ابزارهای علمی و عملی شیوه زندگی را می آموزید و بینش ارزشمندی کسب می کنید که در نتیجه آن می توانید در زندگیتان تغییرات پایدار ایجاد کنید، تغییراتی که سلامت جسمی، روحی، سطح انرژی، شادی، و بطور کلی شیوه زندگی شما را بهبود می بخشد.
                </span>
              </li>
              <Link
                to="/coaching.request"
                style={{ textDecoration: "none" }}
                state={{
                  coachingTypeRequest: "Life Technique",
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
    li{
      font-size: 1.5rem;
    }
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
