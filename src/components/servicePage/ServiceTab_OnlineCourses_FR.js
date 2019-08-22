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
class CoachingTab_OnlineCourses_FR extends Component {
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
            دوره آموزشی سفر خلق زندگی ایده آل
          </Typography>
          <Typography component="h3" className={classnames("text", "textFR")}>
            <p>
              این دوره آموزشی بصورت غیر حضوری و آنلاین برگزار می‌شود. یعنی با
              خرید این دوره در زمان‌ها و مکان‌های دلخواه خود و با هر سرعتی که
              مناسب شرایط زندگی شماست قادر به دنبال کردن مطالب و تکمیل دوره
              خواهید بود. طراحی این دوره به صورتی است که مطالب با بهترین کیفیت و
              بیانی گویا به شما انتقال داده می‌شود و توسط تمرین‌ها و کاربرگ‌ها
              بطور عملی با زندگی شما آمیخته می‌شود. بدین صورت با پرداخت هزینه‌ای
              کمتر از دوره‌های کوچینگ خصوصی و یا حتی کوچینگ گروهی می‌توانید از
              آموزش‌های تحول برانگیز آریانا بهره‌مند شوید. خبر خوب اینکه با ثبت
              نام در این دوره به تمام محتوای آن برای همیشه دسترسی خواهید داشت و
              می‌توانید در زمان‌های مختلف به‌ این دروس رجوع کنید.{" "}
              <span style={{ color: "red", fontWeight: "bold" }}>
                همچنین اگر تا دو هفته پس از خرید این دوره، به هر دلیلی به این
                نتیجه رسیدید که این دوره آموزشی برای شما مفید نیست، تمام هزینه
                شما باز خواهد گشت.
              </span>
            </p>
            <Link
              to="/coaching.onlinecourses.request"
              style={{ textDecoration: "none" }}
              state={{
                coachingTypeRequest: "group-coaching",
              }}
            >
              <SectionButton style={{ margin: "2rem auto" }}>
                ثبت نام
                <h6 className="coachingType">
                  (دوره آموزشی: سفر خلق زندگی ایده‌آل)
                </h6>
              </SectionButton>
            </Link>
          </Typography>
          <br />
          <Typography
            variant="h5"
            component="h3"
            className={classnames("intro", "introFR")}
            style={{ color: "green" }}
          >
            توصیف دوره{" "}
          </Typography>
          <Typography component="h3" className={classnames("text", "textFR")}>
            براستی تا بحال فکر کرده‌اید که هدف از زندگی چیست؟ آیا ما به ‌این
            دنیا آمده‌ایم که بعد از تحمل دوره‌ها‌یی از رنج و سختی و تجربه کمی
            خوشی از این دنیا برویم؟ آیا ما به ‌این دنیا آمده‌ایم که محکوم شرایط
            خانوادگی، اجتماعی، اقتصادی، سیاسی، جغرافیایی و ... شویم و بعد از چند
            صباحی زندگی پر‌مشقت در نهایت به عنوان یک محکوم و کسی که قربانی شرایط
            محیطی خود است با روحی خسته و بدنی فرسوده رخت از دنیا بربندیم؟
            <br />
            خیر! حقیقت این است که هیچ کدام از ما قربانی شرایط نیستیم، بلکه
            موجوداتی فوق العاده قدرتمند هستیم. اما متاسفانه اکثر ما از همان سنین
            کودکی، تحت تاثیر خانواده، فرهنگ و جامعه ‌این حقیقت را به فراموشی
            می‌سپاریم و قدرت و حقیقت درونی خود را در جعبه‌ای در بسته در اعماق
            وجود خود دفن می کنیم. به قول پیر تیلار دو شاردن دانشمند و فیلسوف
            فرانسوی «ما انسان‌هایی نیستیم که معنویت را تجربه می کنیم. ما موجودات
            معنوی هستیم که انسان بودن را تجربه می کنیم.»
            <br />
            حقیقت این است که تجربه زنده بودن و زندگی کردن یک افتخار و شانسی بزرگ
            است. ما به ‌این دنیا نیامده‌ایم که امتحان پس دهیم یا سختی بکشیم و
            بعد هم بازخواست و تنبیه شویم! ما به ‌این دنیا آمده‌ایم برای لذت بردن
            و خلق زیبایی، برای تجربه عشق و عشق ورزیدن... اما با گم شدن در هیاهوی
            زندگی و به فراموشی سپردن این حقایق، افتخار و شانس زنده بودن را بجای
            فرصتی برای تجربه لذت و خلق زیبایی، به یک امتحان سخت، سفری پر مشقت و
            یا حتی زندانی خود ساخته تبدیل می کنیم!
            <br />
            حقیقت این است که همه ما لایق تجربه زندگی با رضایت و لذت هستیم و خلق
            چنین زندگی برای خود، مسئولیت و وظیفه تک ‌تک ماست. زمانیکه ‌این
            مسئولیت را بپذیریم، نه تنها به خود بزرگترین خدمت را کرده‌ایم، بلکه
            بزرگترین و ارزشمندترین خدمت را به جامعه انسانی و نسل‌های آینده
            کرده‌ایم. زیرا زمانیکه هر کدام از ما به خود فضا و اجازه درخشش دهیم و
            بالاترین پتانسیل‌های خود را به مرحله ظهور برسانیم، حرکت زلزله
            گونه‌ای ایجاد می‌شود که لایه های تکتونیک رفتاری- برخوردی فرهنگ و
            جامعه را در راستای بهبودی و روشنایی برای همگان دگرگون می‌کند.
            <br />
            در طی این دوره علمی-کاربردی آریانا بطور شفاف و ملموس به سوالات مهم و
            اساسی زیر پاسخ می‌دهد:
            <br />
            <ul
              style={{
                paddingRight: "1.2rem",
              }}
            >
              <li
                style={{
                  marginTop: "1.2rem",
                }}
              >
                منظور از زندگی ایده‌‌آل چیست؟ آیا اصلا تجربه چنین زندگی امکان
                پذیر است؟ آیا برای تجربه چنین زندگی باید ثروتمند و متمول بود و
                یا دسترسی به منابع خاصی داشت؟ آیا برای افرادی که با چالش‌های
                فراوان اقتصادی، اجتماعی و سیاسی دست و پنجه نرم می‌کنند هم می‌شود
                حرف از زندگی ایده‌‌آل زد؟ آیا سفر خلق زندگی ایده‌‌آل برای آنها
                هم امکان‌پذیر است؟
              </li>

              <li
                style={{
                  marginTop: "1.2rem",
                }}
              >
                چرا تغییر دیدگاه مهم ترین قدم در سفر خلق زندگی ایده‌‌آل است؟
                توسط چه دیدگاهی می‌توانیم زندگی ایده‌‌آل خود را درک کنیم؟ چگونه
                ممکن است خالق زندگی دلخواه و ایده‌‌آل خود باشیم؟
              </li>

              <li
                style={{
                  marginTop: "1.2rem",
                }}
              >
                آیا داشتن مقصدی معین برای رسیدن به جایی که روح و تمام وجود ما را
                ارضا می‌کند، ضروری است؟ چطور می‌توانیم این مقصد را برای خود مشخص
                کنیم؟ چطور مطمئن شویم مقصد را درست انتخاب کرده‌ایم و اگر مقصدی
                اشتباه برگزیدیم چه کنیم؟
              </li>
              <li
                style={{
                  marginTop: "1.2rem",
                }}
              >
                پس از بستن کوله باری مجهز برای سفر خلق زندگی ایده آل و تعیین
                مقصد (ویژن) روی نقشه زندگی، با چه استراتژی سفر را آغاز کنیم؟ و
                چطور مطمئن شویم که در مسیر درست در حال حرکت هستیم؟
              </li>
              <li
                style={{
                  marginTop: "1.2rem",
                }}
              >
                پس از بستن کوله باری مجهز برای سفر خلق زندگی ایده‌‌آل و تعیین
                مقصد (ویژن) روی نقشه زندگی، با چه استراتژی سفر را آغاز کنیم؟ و
                چطور مطمئن شویم که در مسیر درست در حال حرکت هستیم؟
              </li>
            </ul>
            <br />
          </Typography>
          <br />
          <Typography
            variant="h5"
            component="h3"
            className={classnames("intro", "introFR")}
            style={{ color: "green" }}
          >
            در این دوره آموزشی چه می آموزید؟{" "}
          </Typography>

          <Typography component="h3" className={classnames("text", "textFR")}>
            بطور خلاصه با شرکت در این دوره آموزشی یاد خواهید گرفت چطور شیشه
            عینکی که زندگی و دنیای اطراف خود را با آن ید تمیز کنید تا دیدی
            واضح‌تر، شفاف‌تر، حقیقی‌تر و بی‌طرفانه نسبت به زندگی خود و دنیای
            اطراف پیدا کنید. در طی این دوره آریانا کوله بار شما را به ابزارهای
            ارزشمند کاربردی مجهز می‌کند تا بوسیله آنها بتوانید درکی شفاف از
            خواسته‌های قلبی خود داشته باشید، مقصد و ویژنی مشخص برای خود ترسیم
            کنید و حرکتی پایدار و سفری لذت بخش را برای خلق زندگی تان آغاز کنید.
            این دوره غیر از مقدمه و جمع بندی، شامل چهار فصل اصلی است. هر فصل
            شامل مجموعه‌ای از ویدیوهای آموزشی، تمرین‌های کاربردی، کاربرگ‌ها و
            منابع تکمیلی است.
            <br />
          </Typography>
          <br />
          <Typography
            variant="h6"
            component="h3"
            className={classnames("intro", "introFR")}
          >
            فصل اول: آماده سازی برای سفر{" "}
          </Typography>
          <Typography component="h3" className={classnames("text", "textFR")}>
            دانش همان قدرت است (دانش = قدرت). شناخت، درک و یادگیری نحوه
            بهره‌گیری از قدرت درونی خود، اولین پیش نیاز برای آغاز سفر خلق زندگی
            شماست. در این بخش آریانا شما را مجهز به بینش و دانش لازم جهت تنظیم و
            تمیز کردن عینکی که از طریق آن زندگی و دنیای اطراف خود را ید، . در
            این بخش ارتباط مستقیم یافته‌های تکان دهنده علمی، نشات گرفته از علوم
            مختلفی شامل علم اپی ژنتیک، کوانتم فیزیک، ریاضیات و علم مغز و اعصاب،
            با زندگی روزمره ما بررسی می‌شود. مطالب اراِئه شده در این بخش حاصل
            سال‌ها تحصیل، مطالعه، تحقیق و ارتباط آریانا با اساتید مشهور
            بین‌المللی است. درک، یاد‌گیری و توسعه ‌این بینش که بر پایه یافته‌های
            معتبر علمی و تست شده در زندگی شخصی آریانا و کلاینت‌هایش است، به خودی
            خود رهایی بخش و تحول برانگیز است. نگران نشوید اگرچه ‌این مطالب سنگین
            و پیچیده به نظر می آیند، آریانا به ساده ترین زبان ممکن آنها را به
            شما انتقال می‌دهد. تمام سعی آریانا بر این است که ‌این مطالب قدرت بخش
            و تحول برانگیز را به روان‌ترین و قابل فهم‌ترین شکل ممکن به تعداد
            بیشماری از شما عزیزان برساند تا بتوانید پرآرامش‌تر، موفق‌تر و شادتر
            زندگی کنید.
          </Typography>
          <br />
          <Typography
            variant="h6"
            component="h3"
            className={classnames("intro", "introFR")}
          >
            فصل دوم: انتخاب مقصد{" "}
          </Typography>
          <Typography component="h3" className={classnames("text", "textFR")}>
            در این بخش آریانا توسط تمرین‌ها و کاربرگ‌های هدفمند به شما آموزش
            می‌دهد که چگونه خواسته‌های عمیق قلبی و احساسات مرتبط به آنها را از
            اعماق وجودتان حفاری کنید. سپس نحوه استفاده از آنها برای طرح ویژنی
            شفاف (مقصد اصلی زندگی) را به شما یاد می‌دهد. در این بخش ابزارهای
            کلیدی را یاد خواهید گرفت که نه تنها در طی این دوره آموزشی، بلکه در
            طول زندگیتان از آنها بهره خواهید برد.
          </Typography>
          <br />
          <Typography
            variant="h6"
            component="h3"
            className={classnames("intro", "introFR")}
          >
            فصل سوم: طراحی و انتخاب مسیرها و آغاز حرکت{" "}
          </Typography>
          <Typography component="h3" className={classnames("text", "textFR")}>
            در این بخش یاد خواهید گرفت که چگونه فعالانه خواسته‌های عمیق قلبی خود
            را به حقیقت زندگی روزمره خود گره بزنید و در مسیر خلق زندگی خود حرکت
            کنید. حقیقت این است که زیباترین، عمیق ترین و شیرین ترین خواسته‌ها و
            آرزو‌ها هم بدون اهداف مشخص کاربردی که براحتی قابل اجرا باشند، شما را
            به زندگی تان نمی رساند. اهداف مشخص کاربردی نیز اگر با خواسته‌های
            عمیق قلبی شما در هماهنگی و هارمونی نباشند، مسلماً شما را به زندگی
            تان نخواهد رساند! در این قسمت آریانا از راز پنهان هدف‌گذاری پرده
            برداری می‌کند و نحوه هدف‌گذاری موثر و حرکت پایدار در مسیر خلق زندگی
            ، یعنی حرکت در مسیر موفقیت را به شما آموزش می‌دهد.
          </Typography>
          <br />
          <Typography
            variant="h6"
            component="h3"
            className={classnames("intro", "introFR")}
          >
            فصل چهارم: نحوه رویارویی و عبور از چالشها در طی مسیر برای ادامه حرکت{" "}
          </Typography>
          <Typography component="h3" className={classnames("text", "textFR")}>
            طبیعتاً حرکت در مسیر خلق زندگی مانند رانندگی با یک خودرو لوکس و راحت
            در اتوبانی شش بانده نیست! ممکن است در طی مسیر تصادف کنیم، ممکن است
            به جاده‌های پر دست انداز و خاکی برسیم، حتی ممکن است به جای
            صعب‌العبوری برسیم که مجبور به جاده سازی شویم! در این بخش آریانا شما
            را مجهز به جعبه ابزار قدرتمندی می‌کند که توسط آن ید مشکلات و موانع
            بر سر راه را بردارید و به حرکت خود ادامه دهید.
          </Typography>
          <br />
          <Typography
            variant="h5"
            component="h3"
            className={classnames("intro", "introFR")}
            style={{ color: "green" }}
          >
            این دوره آموزشی برای چه افرادی مناسب است؟
          </Typography>
          <Typography component="h3" className={classnames("text", "textFR")}>
            <ul
              style={{
                paddingRight: "1.2rem",
              }}
            >
              <li>اگر در زندگی خود احساس ناآرامی و گمشدگی دارید،</li>
              <li>
                اگر احساس می کنید دقیقا نمی‌دانید چه می‌خواهید یا اصلا از کجا
                باید شروع کنید،
              </li>

              <li>
                اگر می دانید چه می‌خواهید و از کجا باید شروع کنید اما قادر به
                جلو رفتن در مسیر دلخواه خود نیستید یا براحتی تمرکز خود را از دست
                می دهید و از مسیر خارج می‌شوید،
              </li>
              <li>
                اگر احساس می کنید در شرایط حاضر زندگی گیر افتاده‌اید و راه خروجی
                برای خود نمی‌بینید،
              </li>
              <li>
                اگر زندگی امروزتان با زندگی ایده‌‌آلتان فاصله دارد، در حالیکه
                احساس می کنید پتانسیل شما بیش از این است و این باعث ایجاد استرس
                و ناراحتی شماست،
              </li>
              <li>
                اگر به هر علتی از جایگاه حاضر خود در زندگی ناراضی هستید و
                می‌خواهید در جهت بهبودی حرکت کنید.
              </li>
            </ul>
            <br />
          </Typography>
          <Typography
            variant="h5"
            component="h3"
            className={classnames("intro", "introFR")}
            style={{ color: "green" }}
          >
            چرا خرید این محصول بهترین سرمایه گذاری در زندگی شما خواهد شد؟
          </Typography>
          <Typography component="h3" className={classnames("text", "textFR")}>
            <p>
              این دوره آموزشی با این هدف طراحی شده آست که زندگی و نگرش شما را
              متحول ‌کند و به شما یاد ‌دهد چگونه به هر آنچه در زندگی برایتان مهم
              است، برسید. این محصول چکیده بیش از ۱۲ سال مطالعه، تحقیق، آزمایش و
              بررسی در زمینه رشد فردی و خلق زندگی توسط آریانا است. در این دوره
              آموزشی آریانا سخاوتمندانه بهترین و کاربردیترین روش‌ها و
              استراتژی‌های خلق زندگی را به شما آموزش می‌دهد. لازم به ذکر است که
              موفقیت روش‌ها و تکنیک‌های آریانا نه تنها توسط خود او و در زندگی
              شخصی‌اش امتحان شده است، بلکه روی صدها کلاینتی که بطور خصوصی با او
              کار کرده‌اند هم جواب داده است.
            </p>
            <p>براستی حاضرید چقدر هزینه کنید تا:</p>
            <ul
              style={{
                paddingRight: "1.2rem",
              }}
            >
              <li>به خواسته های عمیق قلبی خود برسید؟</li>

              <li>
                تا یک زندگی با معنی، هدفمند، سرشار از آرامش، پر از لذت، پر
                انگیزه، و سرشار از شور و هیجان را تجربه کنید؟
              </li>

              <li>
                تا والاترین پتانسیل های بالقوه خود را بالفعل کنید و بدرخشید؟
              </li>
              <li>
                تا آرزوهای خود را به حقیقت زندگی خود گره بزنید و بطور مستمر در
                مسیر رشد و موفقیت قدم بردارید؟
              </li>
              <li>
                چگونه و با چه ابزارهایی با چالشهای مسیر و مسایلی که انرژی ما را
                تخلیه می کنند و مانع ادامه حرکت ما می شوند روبرو شویم؟ چگونه می
                توانیم با وجود همه مصائب با اقتدار به راه خود ادامه دهیم؟
              </li>
            </ul>
            <br />
            <p>
              لطفاً برای لحظاتی چشمان خود را ببندید، نفسی عمیق بکشید و صادقانه
              چنین دستاوردهایی را در ذهن‌تان ارزیابی و قیمت گذاری کنید! واقعیت
              این است که هیچ قیمتی نمی‌شود روی این دستاورد‌ها گذاشت! هیچ مقدار
              پول، الماس یا چیز باارزشی در این دنیا نیست که ارزشش با ارزش این
              دستاوردها برابری کند اما آریانا با تمام وجود می‌خواهد همه شما به
              نقشه و کلید طلایی زندگی خود دست پیدا کنید و خالق این زندگی برای
              خود باشید.
            </p>
            <br />
          </Typography>
          <Typography
            variant="h5"
            component="h3"
            className={classnames("intro", "introFR")}
            style={{ color: "green" }}
          >
            تضمین برگشت پول{" "}
          </Typography>
          <Typography component="h3" className={classnames("text", "textFR")}>
            کیفیت محتوا و کاربردی بودن این دوره تضمینی است. به همین دلیل اگر تا
            دو هفته پس از خرید این دوره، به ‌این نتیجه رسیدید که ‌این دوره
            آموزشی برای شما مناسب و مفید نیست، ید با تیم پشتیبان تماس بگیرید و
            هزینه پرداختی شما بطور کامل باز خواهد گشت. چه معامله‌ای از این بهتر؟
            آیا واقعا این بهترین سرمایه گذاری زندگی شما نخواهد بود؟!
          </Typography>
          <br />
          <br />
          <Typography
            variant="h5"
            component="h3"
            className={classnames("intro", "introFR")}
            style={{ color: "green" }}
          >
            هدف آریانا از تهیه این دوره آموزشی علمی - کاربردی چیست؟{" "}
          </Typography>
          <Typography component="h3" className={classnames("text", "textFR")}>
            آریانا درخواست‌های بسیار زیادی از شما عزیزان دریافت می کند که نیاز
            به کمک و کار کردن با او دارید و تعداد این درخواست‌ها هر روز بیشتر
            می‌شود. اما متاسفانه وقت آریانا بسیار محدود است و تنها با تعداد
            محدودی در یک زمان خاص د کار کند. مشکل دیگری هم وجود دارد و آن مساله
            هزینه‌های کار با آریانا است. آریانا خارج از ایران زندگی می‌کند و
            تعداد زیادی از عزیزانی که با او تماس می‌گیرند ساکن ایران هستند.
            متاسفانه با توجه به ارزش بسیار کم ریال نسبت به دلار ، پرداخت
            هزینه‌های کوچینگ و مشاوره برای اکثریت ساکنین ایران مقدور نبود.
            آریانا همواره از این قضیه رنج می برد و با تمام وجود تمایل داشت تا
            بتواند به تمام هموطنان عزیز خود کمک کند. در نتیجه تصمیم گرفت تا
            بصورت محدود و با قیمتی بسیار کمتر، قسمتی از وقت خود را به کسانی
            اختصاص دهد که از ایران با او تماس می‌گیرند. ولی این شیوه نیز اصلا
            جوابگو نبود چون تعداد در خواست‌ها بسیار بیشتر از ظرفیتی بود که
            آریانا برای کار با عزیزان خود در نظر گرفته بود. سرانجام عشق بی‌انتها
            و تعهد آریانا برای خدمت رسانی به شما عزیزان سبب شد تا با تلاش و صرف
            وقت فراوان این دوره آموزشی را بصورت آنلاین برای شما فراهم کند.
            آریانا مصمم است تا به بهترین شکل ممکن با شما عزیزان ارتباط برقرار
            کند و هر روز در تلاش است تا از تمام ظرفیت‌های خود برای خدمت رسانی
            بهتر و بیشتر به شما استفاده کند.
          </Typography>
          <br />
          <Typography
            variant="h5"
            component="h3"
            className={classnames("intro", "introFR")}
            style={{ color: "green" }}
          >
            هزینه دوره{" "}
          </Typography>

          <Typography component="h3" className={classnames("text", "textFR")}>
            هزینه این دوره آموزشی تنها ۸۵۰،۰۰۰ تومان است
            <p>
              جهت ثبت نام و یا درخواست اطلاعات بیشتر لطفا از طریق لینک زیر اقدام
              کنید:
            </p>
            <Link
              to="/coaching.onlinecourses.request"
              style={{ textDecoration: "none" }}
              state={{
                coachingTypeRequest: "group-coaching",
              }}
            >
              <SectionButton style={{ margin: "2rem auto" }}>
                ثبت نام
                <h6 className="coachingType">
                  (دوره آموزشی: سفر خلق زندگی ایده آل)
                </h6>
              </SectionButton>
            </Link>
          </Typography>
          <br />
          <br />
        </Paper>
      </CoachingWrapper>
    )
  }
}

// Coaching_Tab_Private_FR.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

export default withStyles(stylesTheme)(CoachingTab_OnlineCourses_FR)

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
