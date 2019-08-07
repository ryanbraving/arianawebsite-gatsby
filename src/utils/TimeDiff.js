function toPersianNum(num, dontTrim) {
  var i = 0,
    len,
    res = "",
    pos,
    persianNumbers

  dontTrim = dontTrim || false
  num = dontTrim ? num.toString() : num.toString().trim()
  len = num.length
  persianNumbers =
    typeof persianNumber == "undefined"
      ? ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
      : persianNumbers

  for (; i < len; i++)
    if ((pos = persianNumbers[num.charAt(i)])) res += pos
    else res += num.charAt(i)

  return res
}

function timeDifference(current, previous, language) {
  const milliSecondsPerMinute = 60 * 1000
  const milliSecondsPerHour = milliSecondsPerMinute * 60
  const milliSecondsPerDay = milliSecondsPerHour * 24
  const milliSecondsPerMonth = milliSecondsPerDay * 30
  const milliSecondsPerYear = milliSecondsPerDay * 365

  const elapsed = current - previous

  // String.prototype.toPersianDigits = function() {
  //   var id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
  //   return this.replace(/[0-9]/g, function(w) {
  //     return id[+w]
  //   })
  // }

  if (language === "farsi") {
    if (elapsed < milliSecondsPerMinute / 3) {
      return "همین لحظه"
    }
    if (elapsed < milliSecondsPerMinute) {
      return "کمتر از ۱ دقیقه"
    } else if (elapsed < milliSecondsPerHour) {
      return (
        toPersianNum(Math.round(elapsed / milliSecondsPerMinute)) +
        " " +
        "دقیقه قبل"
      )
    } else if (elapsed < milliSecondsPerDay) {
      return (
        toPersianNum(Math.round(elapsed / milliSecondsPerHour)) +
        " " +
        "ساعت قبل"
      )
    } else if (elapsed < milliSecondsPerMonth) {
      return (
        toPersianNum(Math.round(elapsed / milliSecondsPerDay)) + 
        " " + 
        "روز قبل"
      )
    } else if (elapsed < milliSecondsPerYear) {
      return (
        toPersianNum(Math.round(elapsed / milliSecondsPerMonth)) +
        " " +
        "ماه قبل"
      )
    } else {
      return (
        toPersianNum(Math.round(elapsed / milliSecondsPerYear)) +
        " " +
        "سال قبل"
      )
    }
  } else {
    if (elapsed < milliSecondsPerMinute / 3) {
      return "just now"
    }
    if (elapsed < milliSecondsPerMinute) {
      return "less than 1 min ago"
    } else if (elapsed < milliSecondsPerHour) {
      return Math.round(elapsed / milliSecondsPerMinute) + " min ago"
    } else if (elapsed < milliSecondsPerDay) {
      return Math.round(elapsed / milliSecondsPerHour) + " hours ago"
    } else if (elapsed < milliSecondsPerMonth) {
      return Math.round(elapsed / milliSecondsPerDay) + " days ago"
    } else if (elapsed < milliSecondsPerYear) {
      return Math.round(elapsed / milliSecondsPerMonth) + " months ago"
    } else {
      return Math.round(elapsed / milliSecondsPerYear) + " years ago"
    }
  }
}

export function timeDifferenceForDate(date, language) {
  const now = new Date().getTime()
  const updated = new Date(date).getTime()
  return timeDifference(now, updated, language)
}
