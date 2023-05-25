let date = new Date();
let day = Number(date.getDate());
let month = Number(date.getMonth()) + 1;
let year = Number(date.getFullYear());

document.querySelector('#year').max = year;

function calculate() {
    let inDay = document.querySelector('#day').value;
    let inMonth = document.querySelector('#month').value;
    let inYear = document.querySelector('#year').value;

    let span = document.querySelectorAll('.span');
    
    let resMonth = 12 - Number(inMonth) + Number(month);
    if (resMonth > 12) {
        resMonth = Number(resMonth) - 12;
    }
    let resDay = 0; 
    if (day > inDay) {
        resDay = (31 - Number(day)) - (31 - Number(inDay));
        resMonth--;
    }
    else if (day < inDay) {
        resDay = (31 - Number(day)) - (31 - Number(inDay)) + 30;
    }
    if (resDay > 30) {
        resDay = (31 - Number(day)) - (31 - Number(inDay));
    }
    else if (resDay < 0) {
        resDay = (31 - Number(day)) - (31 - Number(inDay)) + 30;
    }

    let name = document.querySelectorAll('.name');
    let inputs = document.querySelectorAll('.inputs');
    let erro = document.querySelectorAll('.erro');

    if (month < inMonth) {
        span[0].innerText = year - inYear - 1;
    }
    else if (month >= inMonth) {
        span[0].innerText = year - inYear;
    }
    else if (month == inMonth && day > inDay) {
        span[0].innerText = year - inYear;
    }
    else if (month == inMonth && day < inDay) {
        span[0].innerText = year - inYear - 1;
    }
    else if (month == inMonth && day == inDay) {
        span[0].innerText = year - inYear;
    }

    if (month == inMonth && day == inDay) {
        span[1].innerText = 0;
    }
    else {
        span[1].innerText = resMonth;
    }

    span[2].innerText = resDay;

    normalColor(name, inputs, erro);

    if (inDay <= 0 || inMonth <= 0 || inYear <= 0) {
        error(span, name, inputs, erro);
    }
    else if (inDay > 31 || inMonth > 12 || inYear > year) {
        error(span, name, inputs, erro);
    }
    else if (inDay > day && inMonth >= month && inYear == year || inMonth > month && inYear == year) {
        error(span, name, inputs, erro);
    }   
}

function calcDays(resYear, inMonth, day) {
    return Number(Math.round((resYear * 365.3)) + Math.round((((13 - inMonth) + month) * 30.417))) + Number(day);
}

function error(span, name, inputs, erro) {
    span[0].innerText = '--';
    span[1].innerText = '--';
    span[2].innerText = '--';

    name[0].style.color = '#ff5757';
    name[1].style.color = '#ff5757';
    name[2].style.color = '#ff5757';

    inputs[0].style.border = 'solid 1px #ff5757';
    inputs[1].style.border = 'solid 1px #ff5757';
    inputs[2].style.border = 'solid 1px #ff5757';

    erro[0].innerText = 'Must be a valid day';
    erro[1].innerText = 'Must be a valid month';
    erro[2].innerText = 'Must be in the past';
}

function normalColor(name, inputs, erro) {

    name[0].style.color = '#716f6f';
    name[1].style.color = '#716f6f';
    name[2].style.color = '#716f6f';
    inputs[0].style.border = 'solid 1px #dbdbdb';
    inputs[1].style.border = 'solid 1px #dbdbdb';
    inputs[2].style.border = 'solid 1px #dbdbdb';

    erro[0].innerText = '';
    erro[1].innerText = '';
    erro[2].innerText = '';
}
