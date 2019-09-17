module.exports.privateCoaching = function messages(data, language) {
  var text = "Nothing"
  language == "FR"
    ? (text = encodeURIComponent(`*درخواست کوچینگ خصوصی*\n`))
    : (text = `*PRIVATE COACHING REQUEST*\n`)
  text = text + "---------------------------------------\n"
  const botMessage =
    "*Coaching-Type:* " +
    data.coachingTypeRequest.S +
    "\n" +
    "*From:* " +
    data.country.S +
    "\n" +
    "*Country:* " +
    data.api_country_name.S +
    "\n" +
    "*Region:* " +
    data.api_region.S +
    "\n" +
    "*City:* " +
    data.api_city.S +
    "\n" +
    "*Name:* " +
    data.name.S +
    "\n" +
    "*Email:* " +
    data.email.S +
    "\n" +
    "*Phone:* " +
    data.phone.S +
    "\n" +
    "*Telegram:* " +
    data.telegram.S +
    "\n" +
    "*How-Found:* " +
    data.howFindAriana.S +
    "\n" +
    "*Brief-Situation:* " +
    data.explaination.S +
    "\n" +
    "*Why-Coaching :* " +
    data.whyCoaching.S +
    "\n" +
    "*Main-Problem:* " +
    data.mainProblem.S +
    "\n" +
    "*Other-Problems:* " +
    data.otherProblem.S +
    "\n" +
    "*End-Expectation:* " +
    data.expectation.S +
    "\n" +
    "*Blocks:* " +
    data.obstacle.S +
    "\n" +
    "*ID:* " +
    data.id.S +
    "\n"
  return text + botMessage
}

module.exports.groupCoaching = function messages(data, language) {
  var text = "Nothing"
  language == "FR"
    ? (text = encodeURIComponent(`*درخواست کوچینگ گروهی*\n`))
    : (text = `*GROUP COACHING REQUEST*\n`)
  text = text + "---------------------------------------\n"
  const botMessage =
    "*Coaching-Type:* " +
    data.coachingTypeRequest.S +
    "\n" +
    "*From:* " +
    data.country.S +
    "\n" +
    "*Country:* " +
    data.api_country_name.S +
    "\n" +
    "*Region:* " +
    data.api_region.S +
    "\n" +
    "*City:* " +
    data.api_city.S +
    "\n" +
    "*Name:* " +
    data.name.S +
    "\n" +
    "*Email:* " +
    data.email.S +
    "\n" +
    "*Phone:* " +
    data.phone.S +
    "\n" +
    "*Telegram:* " +
    data.telegram.S +
    "\n" +
    "*How-Found:* " +
    data.howFindAriana.S +
    "\n" +
    "*Brief-Situation:* " +
    data.explaination.S +
    "\n" +
    "*Subject:* " +
    data.subject.S +
    "\n" +
    "*Main-Problem:* " +
    data.mainProblem.S +
    "\n" +
    "*Other-Problems:* " +
    data.otherProblem.S +
    "\n" +
    "*End-Expectation:* " +
    data.expectation.S +
    "\n" +
    "*Blocks:* " +
    data.obstacle.S +
    "\n" +
    "*ID:* " +
    data.id.S +
    "\n"
  return text + botMessage
}

module.exports.onlineCourse = function messages(data, language) {
  var text = "Nothing"
  language == "FR"
    ? (text = encodeURIComponent(`*درخواست دوره آنلاین*\n`))
    : (text = `*ONLINE COURSE REQUEST*\n`)
  text = text + "---------------------------------------\n"
  const botMessage =
    "*Coaching-Type:* " +
    data.coachingTypeRequest.S +
    "\n" +
    "*From:* " +
    data.country.S +
    "\n" +
    "*Country:* " +
    data.api_country_name.S +
    "\n" +
    "*Region:* " +
    data.api_region.S +
    "\n" +
    "*City:* " +
    data.api_city.S +
    "\n" +
    "*Name:* " +
    data.name.S +
    "\n" +
    "*Email:* " +
    data.email.S +
    "\n" +
    "*Phone:* " +
    data.phone.S +
    "\n" +
    "*Telegram:* " +
    data.telegram.S +
    "\n" +
    "*How-Found:* " +
    data.howFindAriana.S +
    "\n" +
    "*Brief-Situation:* " +
    data.explaination.S +
    "\n" +
    "*Ideal-Life:* " +
    data.idealLife.S +
    "\n" +
    "*Other-Problems:* " +
    data.otherProblem.S +
    "\n" +
    "*What-Actions:* " +
    data.whatActions.S +
    "\n" +
    "*Blocks:* " +
    data.obstacle.S +
    "\n" +
    "*Registeration-Goal:* " +
    data.registrationGoal.S +
    "\n" +
    "*ID:* " +
    data.id.S +
    "\n"
  return text + botMessage
}

module.exports.inquiry = function messages(data, language) {
  var text = "Nothing"
  language == "FR"
    ? (text = encodeURIComponent(`*تماس از طریق وبسایت*\n`))
    : (text = `*WEBSITE INQUIRY*\n`)
  text = text + "---------------------------------------\n"
  const botMessage =
    "*Country:* " +
    data.api_country_name.S +
    "\n" +
    "*Region:* " +
    data.api_region.S +
    "\n" +
    "*City:* " +
    data.api_city.S +
    "\n" +
    "*Name:* " +
    data.name.S +
    "\n" +
    "*Email:* " +
    data.email.S +
    "\n" +
    "*Phone/Id:* " +
    data.phoneOrtId.S +
    "\n" +
    "*Comment:* " +
    data.comment.S +
    "\n" +
    "*ID:* " +
    data.id.S +
    "\n"
  return text + botMessage
}
