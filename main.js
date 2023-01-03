let billInput = document.querySelector('.form__input-bill');
let qualitySelect = document.querySelector('.form__input-quality');
let peopleInput = document.querySelector('.form__input-people');

let calcButton = document.querySelector('.form__button-calc');
let reserButton = document.querySelector('.form__button-reset');

calcButton.addEventListener('click', calcClickHandler);
reserButton.addEventListener('click', resetCliclHandler);

function calcClickHandler() {
    let bill = parseInt(billInput.value);
    let quality = parseInt(qualitySelect.value);
    let people = parseInt(peopleInput.value);

    let tips = calculateTips(bill, quality);
    let tipForEach = tips / people;
    let totalForEach = calculateTotal(bill, tips) /people;
    
    renderResult(tipForEach, totalForEach);
}

function resetCliclHandler() {
    billInput.value = '';
    qualitySelect.value = '';
    peopleInput.value = '';

    document.querySelector('.results__value-tips').innerText = '. . .';
    document.querySelector('.results__value-total').innerText = '. . .';
}

function calculateTips(sum, percent) {
    return sum * percent / 100;
}

function calculateTotal(sum, tips) {
    return sum + tips;
}

function renderResult(tips, total) {
    document.querySelector('.results__value-tips').innerText = parseFloat(tips.toFixed(2)) + ' руб.';
    document.querySelector('.results__value-total').innerText = parseFloat(total.toFixed(2)) + ' руб.';
}
