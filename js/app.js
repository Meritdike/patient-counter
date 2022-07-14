let countEl = document.getElementById('patient-counter');
let days = document.getElementById('days');
let startCount = 0;
let day = 0;

let increment = () => {
    startCount += 1;
    countEl.textContent = startCount;
}

let decrement = () => {
    startCount -= 1;
    countEl.textContent = startCount;
}

let save = () => {
    day += 1;
    days.innerHTML += `<div class="my-3"><span class="fw-bold">Day ${day}:</span><br> Patients ${startCount} <br></div>`;
    startCount = 0;
    countEl.textContent = startCount;
    console.log('finish')
}

let reset = () => {
    startCount = 0;
    countEl.textContent = startCount;
}

