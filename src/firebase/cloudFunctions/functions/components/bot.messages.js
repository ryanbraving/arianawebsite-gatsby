module.exports.privateCoachingFR = function messages(snap) {
  const docId = snap.id
  const {
    clientInfo,
    coachingTypeRequest,
    country,
    email,
    expectation,
    explaination,
    howFindAriana,
    mainProblem,
    name,
    obstacle,
    otherProblem,
    phone,
    whyCoaching,
    telegram,
  } = snap.data()
  const { country_name, region, city } = clientInfo
  const botMessage =
    "نوع کوچینگ: " +
    coachingTypeRequest +
    "\n" +
    "محل اقامت: " +
    country +
    "\n" +
    "کشور : " +
    country_name +
    "\n" +
    "ایالت: " +
    region +
    "\n" +
    "شهر: " +
    city +
    "\n" +
    "نام: " +
    name +
    "\n" +
    "ایمیل: " +
    email +
    "\n" +
    "تلفن: " +
    phone +
    "\n" +
    "تلگرام: " +
    telegram +
    "\n" +
    "نحوه آشنایی: " +
    howFindAriana +
    "\n" +
    "خلاصه‌ شرایط: " +
    explaination +
    "\n" +
    "دلیل کوچینگ: " +
    whyCoaching +
    "\n" +
    "بزرگترین مشکل: " +
    mainProblem +
    "\n" +
    "مسائل دیگر: " +
    otherProblem +
    "\n" +
    "انتظار نهایی: " +
    expectation +
    "\n" +
    "موانع: " +
    obstacle +
    "\n" +
    "دیتابیس: " +
    docId +
    "\n"
  return botMessage
}

module.exports.privateCoachingEN = function messages(snap) {
  const docId = snap.id
  const {
    clientInfo,
    coachingTypeRequest,
    country,
    email,
    expectation,
    explaination,
    howFindAriana,
    mainProblem,
    name,
    obstacle,
    otherProblem,
    phone,
    whyCoaching,
    telegram,
  } = snap.data()
  const { country_name, region, city } = clientInfo
  const botMessage =
    "Coaching-Type: " +
    coachingTypeRequest +
    "\n" +
    "From: " +
    country +
    "\n" +
    "Country: " +
    country_name +
    "\n" +
    "Region: " +
    region +
    "\n" +
    "City: " +
    city +
    "\n" +
    "Name: " +
    name +
    "\n" +
    "Email: " +
    email +
    "\n" +
    "Phone: " +
    phone +
    "\n" +
    "Telegram: " +
    telegram +
    "\n" +
    "How-Found: " +
    howFindAriana +
    "\n" +
    "Brief-Situation: " +
    explaination +
    "\n" +
    "Why-Coaching : " +
    whyCoaching +
    "\n" +
    "Main-Problem: " +
    mainProblem +
    "\n" +
    "Other-Problems: " +
    otherProblem +
    "\n" +
    "End-Expectation: " +
    expectation +
    "\n" +
    "Blocks: " +
    obstacle +
    "\n" +
    "Database: " +
    docId +
    "\n"
  return botMessage
}

module.exports.groupCoachingFR = function messages(snap) {
  const docId = snap.id
  const {
    clientInfo,
    coachingTypeRequest,
    country,
    email,
    expectation,
    explaination,
    howFindAriana,
    mainProblem,
    name,
    obstacle,
    otherProblem,
    phone,
    subject,
    telegram,
  } = snap.data()
  const { country_name, region, city } = clientInfo
  const botMessage =
    "نوع کوچینگ: " +
    coachingTypeRequest +
    "\n" +
    "محل اقامت: " +
    country +
    "\n" +
    "کشور : " +
    country_name +
    "\n" +
    "ایالت: " +
    region +
    "\n" +
    "شهر: " +
    city +
    "\n" +
    "نام: " +
    name +
    "\n" +
    "ایمیل: " +
    email +
    "\n" +
    "تلفن: " +
    phone +
    "\n" +
    "تلگرام: " +
    telegram +
    "\n" +
    "نحوه آشنایی: " +
    howFindAriana +
    "\n" +
    "خلاصه‌ شرایط: " +
    explaination +
    "\n" +
    "موضوع کوچینگ: " +
    subject +
    "\n" +
    "بزرگترین مشکل: " +
    mainProblem +
    "\n" +
    "مسائل دیگر: " +
    otherProblem +
    "\n" +
    "انتظار نهایی: " +
    expectation +
    "\n" +
    "موانع: " +
    obstacle +
    "\n" +
    "دیتابیس: " +
    docId +
    "\n"
  return botMessage
}

module.exports.groupCoachingEN = function messages(snap) {
  const docId = snap.id
  const {
    clientInfo,
    coachingTypeRequest,
    country,
    email,
    expectation,
    explaination,
    howFindAriana,
    mainProblem,
    name,
    obstacle,
    otherProblem,
    phone,
    subject,
    telegram,
  } = snap.data()
  const { country_name, region, city } = clientInfo
  const botMessage =
    "Coaching-Type: " +
    coachingTypeRequest +
    "\n" +
    "From: " +
    country +
    "\n" +
    "Country: " +
    country_name +
    "\n" +
    "Region: " +
    region +
    "\n" +
    "City: " +
    city +
    "\n" +
    "Name: " +
    name +
    "\n" +
    "Email: " +
    email +
    "\n" +
    "Phone: " +
    phone +
    "\n" +
    "Telegram: " +
    telegram +
    "\n" +
    "How-Found: " +
    howFindAriana +
    "\n" +
    "Brief-Situation: " +
    explaination +
    "\n" +
    "Coaching-Subject  : " +
    subject +
    "\n" +
    "Main-Problem: " +
    mainProblem +
    "\n" +
    "Other-Problems: " +
    otherProblem +
    "\n" +
    "End-Expectation: " +
    expectation +
    "\n" +
    "Blocks: " +
    obstacle +
    "\n" +
    "Database: " +
    docId +
    "\n"
  return botMessage
}

module.exports.onlineCourseFR = function messages(snap) {
  const docId = snap.id
  const {
    clientInfo,
    coachingTypeRequest,
    country,
    email,
    explaination,
    howFindAriana,
    idealLife,
    name,
    obstacle,
    otherProblem,
    phone,
    registrationGoal,
    telegram,
    whatActions,
  } = snap.data()
  const { country_name, region, city } = clientInfo
  const botMessage =
    "نوع کوچینگ: " +
    coachingTypeRequest +
    "\n" +
    "محل اقامت: " +
    country +
    "\n" +
    "کشور : " +
    country_name +
    "\n" +
    "ایالت: " +
    region +
    "\n" +
    "شهر: " +
    city +
    "\n" +
    "نام: " +
    name +
    "\n" +
    "ایمیل: " +
    email +
    "\n" +
    "تلفن: " +
    phone +
    "\n" +
    "تلگرام: " +
    telegram +
    "\n" +
    "نحوه آشنایی: " +
    howFindAriana +
    "\n" +
    "خلاصه‌ شرایط: " +
    explaination +
    "\n" +
    "موضوع کوچینگ: " +
    idealLife +
    "\n" +
    "مسائل دیگر: " +
    otherProblem +
    "\n" +
    "چه اقداماتی: " +
    whatActions +
    "\n" +
    "موانع: " +
    obstacle +
    "\n" +
    "هدف ثبتنام: " +
    registrationGoal +
    "\n" +
    "دیتابیس: " +
    docId +
    "\n"
  return botMessage
}

module.exports.inquiryFR = function messages(snap) {
  const docId = snap.id
  const { name, email, phoneOrtId, comment, clientInfo } = snap.data()
  const { country_name, region, city } = clientInfo
  const botMessage =
    "کشور: " +
    country_name +
    "\n" +
    "ایالت: " +
    region +
    "\n" +
    "شهر: " +
    city +
    "\n" +
    "نام: " +
    name +
    "\n" +
    "ایمیل: " +
    email +
    "\n" +
    "تلفن-آی‌دی: " +
    phoneOrtId +
    "\n" +
    "پیغام: " +
    comment +
    "\n" +
    "دیتابیس: " +
    docId +
    "\n"
  return botMessage
}

module.exports.inquiryEN = function messages(snap) {
  const docId = snap.id
  const { name, email, phoneOrtId, comment, clientInfo } = snap.data()
  const { country_name, region, city } = clientInfo
  const botMessage =
    "Country: " +
    country_name +
    "\n" +
    "Region: " +
    region +
    "\n" +
    "City: " +
    city +
    "\n" +
    "Name: " +
    name +
    "\n" +
    "Email: " +
    email +
    "\n" +
    "Phone/Id: " +
    phoneOrtId +
    "\n" +
    "Comment: " +
    comment +
    "\n" +
    "Database: " +
    docId +
    "\n"
  return botMessage
}
