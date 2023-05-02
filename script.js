const today = new Date();
const submitbtn = document.getElementById("submit-btn");

const bdayinput = document.getElementById("day");
const bmonthinput = document.getElementById("month");
const byearinput = document.getElementById("year");

const dashday = document.getElementById("netdaydiff");
const dashmonth = document.getElementById("netmonthdiff");
const dashyear = document.getElementById("netyeardiff");

submitbtn.addEventListener('click', () => {
  const newStr = `${byearinput.value}-${bmonthinput.value}-${bdayinput.value }`;
  const dobDate = new Date(newStr);

  var bday=dobDate.getDate();
  var bmonth=dobDate.getMonth();
  var byear=dobDate.getFullYear();

  var currentDate=today.getDate();
  var currentMonth=today.getMonth();
  var currentYear=today.getFullYear();

  var yearAgeDiff=currentYear-byear;

  var monthAgeDiff=0;
  if(currentMonth>=bmonth){
    monthAgeDiff=currentMonth-bmonth;
  }
  else{
    monthAgeDiff=12+currentMonth-bmonth;
    yearAgeDiff--;
  }

  var dayAgeDiff;
  var monthDays = [31, ((currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (currentDate >= bday) {
    dayAgeDiff = currentDate - bday;
  } else {
    dayAgeDiff = currentDate - bday + monthDays[bmonth];
    if (bmonth === 1 && ((currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0)) {
      dayAgeDiff++;
    }
    monthAgeDiff--;
  }

  dashday.innerText = dayAgeDiff;
  dashmonth.innerText = monthAgeDiff;
  dashyear.innerText = yearAgeDiff;
});

