let selectOperator = document.querySelector('.operator')
let a = document.querySelector('.firstInput')
let b = document.querySelector('.secondInput')
let result = document.querySelector('.result')
let btn = document.querySelector('.btn')

function operation() {
    let newOperator = (selectOperator.value).toLowerCase()
    let newA = parseInt(a.value)
    let newB = parseInt(b.value)
    if (newOperator == 'a') {
        result.innerHTML = newA + newB
    } else if (newOperator == 'b') {
        result.innerHTML = newA + newB
    } else if (newOperator == 'c') {
        result.innerHTML = newA + newB
    } else if (newOperator == 'd') {
        result.innerHTML = newA + newB
    } else {
        result.innerHTML = 'invalid operator'
    }
} 

btn.addEventListener('click', operation)