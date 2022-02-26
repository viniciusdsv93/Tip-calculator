let billInput = document.querySelector('#bill-input');
let peopleInput = document.querySelector('#people-input');
let percentButtons = document.querySelectorAll('.tip-button');
let customButton = document.querySelector('#button-custom');
let resetButton = document.querySelector('#reset-button');
let errorBill = true;
let errorPeople = true;

for (let i = 0; i < percentButtons.length; i++) {
    percentButtons[i].addEventListener('click', (evt) => {
        calculateTip(percentButtons[i].value);
        if (errorBill == false && errorPeople == false) {
            removeActive();
            percentButtons[i].classList.add('active');
        }
    })
}

function removeActive() {
    for (let i = 0; i < percentButtons.length; i++) {
        percentButtons[i].classList.remove('active');
    }
}

function calculateTip(percent) {

    if (errorBill == false && errorPeople == false) {
        let billValue = parseFloat(billInput.value);
        let tipValue = (billValue / 100) * percent;
        let numPeople = parseInt(peopleInput.value);

        let tipValuePerson = tipValue / numPeople;
        let billValuePerson = billValue / numPeople;

        document.querySelector('.tip-amount-value').innerHTML = `$${tipValuePerson.toFixed(2)}`;
        document.querySelector('.total-value').innerHTML = `$${(billValuePerson + tipValuePerson).toFixed(2)}`;
    }
    else {
        alert('Please, correct the errors to proceed.');
    }
    
}

customButton.addEventListener('blur', (evt) => {
    if (customButton.value > 0 && errorBill == false && errorPeople == false) {
        customButton.classList.add('input-correct');
        customButton.classList.remove('input-wrong');
        removeActive();
        calculateTip(customButton.value);
        customButton.value = `${customButton.value}%`;
    }
    else if (customButton.value == '') {
        customButton.classList.remove('input-correct');
        customButton.classList.remove('input-wrong');
    }
    else {
        customButton.classList.remove('input-correct');
        customButton.classList.add('input-wrong');
        alert('Please, insert a valid number.');
    }
})

billInput.addEventListener('blur', (evt) => {
    if (billInput.value > 0) {
        billInput.classList.add('input-correct');
        billInput.classList.remove('input-wrong');
        document.querySelector('.error-message-bill').classList.add('hidden');
        errorBill = false;
    }
    else if (billInput.value == '') {
        billInput.classList.remove('input-correct');
        billInput.classList.remove('input-wrong');
        document.querySelector('.error-message-bill').classList.add('hidden');
    }
    else {
        billInput.classList.remove('input-correct');
        billInput.classList.add('input-wrong');
        document.querySelector('.error-message-bill').classList.remove('hidden');
        if (billInput.value == 0) {
            document.querySelector('.error-message-bill').innerHTML = "Can't be zero";
        }
        else {
            document.querySelector('.error-message-bill').innerHTML = "Can't be negative";
        }  
    }
})

peopleInput.addEventListener('blur', (evt) => {
    if (peopleInput.value > 0) {
        peopleInput.classList.add('input-correct');
        peopleInput.classList.remove('input-wrong');
        document.querySelector('.error-message-people').classList.add('hidden');
        errorPeople = false;
    }
    else if (peopleInput.value == '') {
        peopleInput.classList.remove('input-correct');
        peopleInput.classList.remove('input-wrong');
        document.querySelector('.error-message-people').classList.add('hidden');
    }
    else {
        peopleInput.classList.remove('input-correct');
        peopleInput.classList.add('input-wrong');
        document.querySelector('.error-message-people').classList.remove('hidden');
        if (peopleInput.value == 0) {
            document.querySelector('.error-message-people').innerHTML = "Can't be zero";
        }
        else {
            document.querySelector('.error-message-people').innerHTML = "Can't be negative";
        }  
    }
})

resetButton.addEventListener('click', (evt) => {
    removeActive();
    billInput.value = '';
    peopleInput.value = '';
    customButton.value = '';
    document.querySelector('.tip-amount-value').innerHTML = `$0.00`;
    document.querySelector('.total-value').innerHTML = `$0.00`;
    errorBill = true;
    errorPeople = true;
    customButton.classList.remove('input-correct');
    customButton.classList.remove('input-wrong');
    billInput.classList.remove('input-correct');
    billInput.classList.remove('input-wrong');
    peopleInput.classList.remove('input-correct');
    peopleInput.classList.remove('input-wrong');
})