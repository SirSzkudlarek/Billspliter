const payment = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const err = document.querySelector('.error');
const cost = document.querySelector('.cost')
const result = document.querySelector('.cost-info');
const countBtn = document.querySelector('.count');

const splitBill = () => {
  const bill = Math.floor((((payment.value * 1) + ((payment.value * 1) * tip.value)) / (people.value * 1)) * 100) / 100;
  cost.textContent = ` ${bill} `;
  result.style.display = "block";
}

const inputEmpty = () => {
  if(payment.value == '') {
    err.textContent = 'Podaj kwotę do zapłaty.';
  } else if(people.value == '') {
    err.textContent = 'Podaj liczbę osób.';
  } else {
    err.textContent = '';
    splitBill();
  }
}

countBtn.addEventListener('click', inputEmpty);