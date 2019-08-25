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
class CoachingTab_GroupCoaching_FR extends Component {
  render() {
    const { classes } = this.props
    return (
      <CoachingWrapper>
        <Paper className={classnames(classes.root, "paper")} elevation={20}>
          <Typography
            variant="h5"
            component="h3"
            className={classnames("intro", "introFR")}
          >
            کوچینگ و مشاوره گروهی با آریانا
          </Typography>
          <Typography component="h3" className={classnames("text", "textFR")}>
            <p>
              همسفر شدن با افرادی که خواسته‌ها، چالش‌ها و مقصد نسبتاً مشترکی با
              شما دارند، نه تنها مسیر سفر را لذت بخش‌تر می‌کند و به شما احساس
              امنیت و حمایت می‌دهد، بلکه می‌تواند بسیار مفید و قدرت بخش باشد.
              چرا که خیلی اوقات شنیدن مشکلات و درک افکار محدود کننده دیگران چون
              زنگ بیدارباشی است که باعث شناسایی افکار محدود کننده و نقاط کور شما
              می‌شود. همینطور دیدن پیشرفت و حرکت رو به جلو هم گروهی‌ها، الهام
              بخش است و نیروی محرکی برای تلاش بیشتر شما می‌شود. مهمتر از همه
              شرکت در کوچینگ گروهی می‌تواند به شما کمک کند تا افراد قبیله خود،
              یعنی دوستان و همراهانی همیشگی پیدا کنید!{" "}
              <span style={{ color: "red", fontWeight: "bold" }}>
                و البته خبر خوب اینکه هزینه کوچینگ گروهی، کمتر از بسته های
                کوچینگ خصوصی است.
              </span>
            </p>
            <p>در حال حاضر دوره های گروهی کوچینگ آریانا عبارتند از:</p>
            <br />
            <ul
              style={{
                paddingRight: "1.2rem",
                fontSize: "1.17rem",
                fontWeight: "bold",
              }}
            >
              <li>پذیرش خود و اعتماد به نفس</li>
              <li>شناسایی افکار محدود کننده و تغییر ذهنیت</li>
              <li>دعوت آرامش و مدیریت استرس</li>
            </ul>
            <br />
            <p>
              گروه‌ها متشکل از حداقل چهار نفر و حداکثر هشت نفر می‌باشند. جلسات
              ۷۵ دقیقه‌ای بطور هفتگی و بصورت آنلاین به مدت پنج هفته برگزار
              می‌شوند. در طی این جلسات برنامه‌ای منسجم و هدفمند دنبال می‌شود
              بطوریکه در انتهای دوره شما مجهز به دانش لازم و ابزارهای کاربردی
              برای رویارویی با چالش‌های زندگی خود در زمینه مورد بحث خواهید شد.
              در طی این جلسات آریانا به مدت ۳۰ تا ۴۰ دقیقه تدریس می‌کند و
              باقیمانده زمان به کوچینگ و پاسخ به سوالات شما می‌گذرد. در انتهای
              هر جلسه تکلیفی برای جلسه آینده به شما داده خواهد شد. تعهد صد در
              صدی شما به رشد فردی خود و اختصاص زمان لازم برای بازبینی درس‌ها و
              انجام تکالیف، برای گرفتن نتیجه مطلوب ضروری است. لازم به ذکر است که
              جلسات ضبط می‌شوند و شما برای همیشه به فایل‌های صوتی دسترسی خواهید
              داشت. یعنی براحتی در هر زمانی قادر به مرور آموخته‌ها خواهید بود.
              همچنین شما به یک گروه خصوصی واتس‌اپ وصل خواهید شد تا با هم
              گروهی‌های خود بیشتر آشنا شوید، حامی رشد یکدیگر باشید، دستاوردهای
              خود را به اشتراک بگذارید و آنها را جشن بگیرید. شما برای همیشه به
              این گروه دسترسی خواهید داشت و تا مدتهای طولانی پس از اتمام دوره
              قادر به حمایت یکدیگر و عمیق‌تر کردن ارتباطات خود و درس‌های آموخته
              شده خواهید بود.
            </p>
            <br />
            <p>
              جهت ثبت نام و یا درخواست اطلاعات بیشتر لطفا از طریق لینک زیر اقدام
              کنید:
            </p>
            <Link
              to="/coaching.group.request"
              style={{ textDecoration: "none" }}
              state={{
                coachingTypeRequest: "Group-Coaching",
              }}
            >
              <SectionButton style={{ margin: "2rem auto" }}>
                ثبت نام
                <h6 className="coachingType">(کوچینگ گروهی)</h6>
              </SectionButton>
            </Link>
          </Typography>
        </Paper>
      </CoachingWrapper>
    )
  }
}

// Coaching_Tab_Private_FR.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default withStyles(stylesTheme)(CoachingTab_GroupCoaching_FR)

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
