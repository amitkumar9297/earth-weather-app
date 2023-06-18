const today = document.getElementById('day');
const today_date = document.getElementById('today_date');



var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let currentTime = new Date();
let day = weekday[currentTime.getDay()];


var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
];

var now = new Date();
var month = months[now.getMonth() + 1];
var date = now.getDate();
today.innerHTML = day;
today_date.innerHTML = `${date}_${month}`;