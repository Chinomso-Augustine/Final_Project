
const monthYearElement =document.getElementById('monthYear');
const datesElement =document.getElementById('dates');
const prevBtnElement =document.getElementById('prevBtn');
const nextBtn =document.getElementById('nextBtn');


let currentDate = new Date(); 
const updateCalendar = ()=>{
    const currentYear = currentDate.getFullYear(); 
    const currentMonth = currentDate.getMonth(); 
    
    const firstDay = new Date(currentYear, currentMonth, 0);
    const lastDay = new Date(currentYear, currentMonth + 1, 0); 
    const totalDays = lastDay.getDate(); 
    const firstDayIndex = firstDay.getDay(); 
    const lastDayIndex = lastDay.getDay(); 

    const monthYearString
}