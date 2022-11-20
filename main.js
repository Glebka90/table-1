const colAll = document.querySelectorAll('.column__value_number');
const colSecond = document.querySelectorAll('.second_column');
const colThird = document.querySelectorAll('.third_line');

let sum = 0;
let sum_1 = 0;
let sum_2 = 0;

for (let i = 0; i < colAll.length; i++) {
  sum = sum + (+colAll[i].textContent);
}

for (let i = 0; i < colSecond.length; i++) {
  sum_1 = sum_1 + (+colSecond[i].textContent);
}

for (let i = 0; i < colThird.length; i++) {
  sum_2 = sum_2 + (+colThird[i].textContent);
}

document.querySelector('.column__result').textContent = +sum;
document.querySelector('.column__total_value-secon').textContent = sum_1;
document.querySelector('.column__total_value-third').textContent = sum_2;