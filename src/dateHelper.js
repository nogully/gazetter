/* eslint-disable */
const objToday = new Date(),
  weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] ,
  dayOfWeek = weekday[objToday.getDay()],
  domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th" }(),
  dayOfMonth = ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  curMonth = months[objToday.getMonth()],
  curYear = objToday.getFullYear(),
  curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
  curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
  curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";

const today = curHour + ":" + curMinute + " " + curMeridiem + " on " + dayOfWeek + " the " + dayOfMonth + " of " + curMonth + ", " + curYear;

export default today;
