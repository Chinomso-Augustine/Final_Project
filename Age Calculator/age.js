
function yearFun(){
//User date data
const userDate = document.getElementById("yearBorn") 

//value of user date
const userYearValue = userDate.value; 
//Date obj
const date = new Date(userYearValue); 

//Getting real info
const userYear = date.getFullYear();
/* 
const userMonth = date.getMonth() + 1; 
const userWeek = userMonth * 4; 
const userDay = date.getDay();
const userHour = userDay * 24; 
const userMinutes = userHour * 60; 
*/

//Year display
const year = new Date().getFullYear() - userYear; 
document.getElementsByClassName("year")[0].textContent = year; 

//months 
const month = year * 12; 
document.getElementsByClassName("month")[0].textContent = month; 

//weeks: 52.1429 in a year but I am using 52 
const week = year * 52; 
document.getElementsByClassName("week")[0].textContent= week; 

//Days: 365.2425 but using 365 + 5. 5 for leap year
const day = (year * 365) + 5; 
document.getElementsByClassName("day")[0].textContent= day; 

//Hours: 24 hr in day
const hour = day * 24; 
const hourElement = document.getElementsByClassName("hour")[0].textContent= hour; 

//minutes
const minute = hour * 60; 
const minuteElement = document.getElementsByClassName("minute")[0].textContent= minute; 

}


