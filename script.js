let cardNumber = document.getElementById('card-number')
let inputAll = document.querySelectorAll('.input')
let userName = document.getElementById('name')
let cardDate = document.getElementById('card-date')
let cardYear = document.getElementById('card-year')
let cardNumbers = document.getElementById('card-number')
let cardCVV = document.getElementById('card-cvc')
let confirmBtn = document.getElementById('confirm-btn')

let showCardNum = document.querySelector('.cards-num')
let showName = document.querySelector('.show-name')
let showMonth = document.querySelector('.month')
let showYear = document.querySelector('.year')
let showCVV = document.querySelector('.show-cvv')

let container = document.querySelector('.container-1')
let container2 = document.querySelector('.container-2')
let continueBtn = document.querySelector('.continue-btn')

let inputError = document.querySelectorAll('input')
// let errMsgs = document.querySelectorAll('.error')

let forms = document.querySelectorAll('.needs-validation')


Array.from(forms).forEach(form => {
    form.addEventListener('submit', (y) => {
        y.preventDefault()
        if(form.checkValidity()){
            y.preventDefault()
             y.stopPropagation()
            console.log("success"); 
                    showName.textContent = userName.value
    showCardNum.textContent = cardNumbers.value
    showMonth.textContent = cardDate.value
    showYear.textContent = cardYear.value
    showCVV.textContent = cardCVV.value
    userName.value = ''
    cardNumbers.value = ''
    cardDate.value = ''
    cardYear.value = ''
    cardCVV.value = ''
    container.style.display = 'none'
    container2.style.display = 'flex'
        }

        else{

        
     continueBtn.addEventListener('click', () => {
    container.style.display = 'block'
    container2.style.display = 'none'

    showName.textContent = "Jane Appleseed"
    showCardNum.textContent = "0000 0000 0000 0000"
    showMonth.textContent = "00"
    showYear.textContent = "00"
    showCVV.textContent = "000"

      form.classList.remove('was-validated')

})
}

         form.classList.add('was-validated')
       
    })
})


Array.from(forms).forEach(form => {
    form.addEventListener('submit', (y) => {
        
    continueBtn.addEventListener('click', () => {
    container.style.display = 'block'
    container2.style.display = 'none'

    showName.textContent = "Jane Appleseed"
    showCardNum.textContent = "0000 0000 0000 0000"
    showMonth.textContent = "00"
    showYear.textContent = "00"
    showCVV.textContent = "000"
           form.classList.remove('was-validated')
})
    })
})



inputAll.forEach(inputs => {
    inputs.addEventListener('input', (x) => {
        let allVals = x.target.value.replace(/\D/g, '')
        x.target.value = allVals
    })
})

cardNumber.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '')

    if (value.length > 4) {
        value = value.slice(0, 4) + ' ' + value.slice(4)
    }
    if (value.length > 9) {
        value = value.slice(0, 9) + ' ' + value.slice(9)
    }
    if (value.length > 14) {
        value = value.slice(0, 14) + ' ' + value.slice(14)
    }
    e.target.value = value;
})



//  