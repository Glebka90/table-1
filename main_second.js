const colAll = document.querySelectorAll('.column__value_number');

let result = {};

for (let i = 0; i < colAll.length; i++){
  let cellClass = colAll[i].classList;
 for(let k = 0; k < cellClass.length; k++){
  if(cellClass[k] in result){
    result[cellClass[k]] += +colAll[i].textContent;
  }
  else{
    result[cellClass[k]] = +colAll[i].textContent;
  }
 }
};

document.querySelector('.column__total_value-secon').textContent = result.second_column;
document.querySelector('.column__total_value-third').textContent = result.third_line;
document.querySelector('.column__result').textContent = result.third_line + result.second_column;
