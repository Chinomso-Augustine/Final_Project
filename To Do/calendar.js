const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentDate = new Date(); //current date and time

const updateCalendar = () => {
    const currentYear = currentDate.getFullYear(); //Gets current Year
    const currentMonth = currentDate.getMonth(); //gets current month
    
    const firstDay = new Date(currentYear, currentMonth, 1);//date object for first day of the month
    const lastDay = new Date(currentYear, currentMonth + 1, 0); //last day of the month
    const totalDays = lastDay.getDate(); 
    const firstDayIndex = (firstDay.getDay() === 0) ? 6 : firstDay.getDay() - 1;
    const lastDayIndex = lastDay.getDay(); 

    const monthYearString = currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric' });
    monthYearElement.textContent = monthYearString; 

    let dateHtml = ''; 
    
    // Previous month inactive dates
    for (let i = firstDayIndex; i > 0; i--) {
        const prevDate = new Date(currentYear, currentMonth, -i + 1); 
        dateHtml += `<div class="date inactive">${prevDate.getDate()}</div>`; 
    }

    // Current month dates
    for (let i = 1; i <= totalDays; i++) {
        const date = new Date(currentYear, currentMonth, i); 
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
        dateHtml += `<div class="date ${activeClass}">${i}</div>`; 
    }

    // Next month inactive dates
    for (let i = 1; i < 7 - lastDayIndex; i++) {
        const nextDate = new Date(currentYear, currentMonth + 1, i); 
        dateHtml += `<div class="date inactive">${nextDate.getDate()}</div>`; 
    }

    datesElement.innerHTML = dateHtml; 
};

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar(); 
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar(); 
});

updateCalendar();
