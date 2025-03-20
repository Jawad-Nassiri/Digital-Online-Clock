const timeElement = document.querySelector('.time')
const secondsElement = document.querySelector('.seconds')
const showDateElement = document.querySelector('.date')


const months = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

const daysOfWeek = [
"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];


setInterval(() => {
  
  let date = new Date()
    let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

    timeElement.innerHTML = `${hours}<span class="separator">:</span>${minutes}`;
    secondsElement.innerHTML = `<span class="digit">${seconds}</span>`;

    let dayOfWeek = daysOfWeek[date.getDay()];
    let month = months[date.getMonth()];
    let dayOfMonth = date.getDate();
    let year = date.getFullYear()

    showDateElement.textContent = `${dayOfWeek}, ${month}, ${dayOfMonth}, ${year}`



}, 1000)