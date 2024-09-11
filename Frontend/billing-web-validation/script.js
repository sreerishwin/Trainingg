
const formEl = document.getElementById('form');
const fnameEl = document.getElementById('fname');
const lnameEl = document.getElementById('lname');
const usernameEl = document.getElementById('username');
const emailEl = document.getElementById('email');
const addressEl = document.getElementById('address');
// const address2El = document.getElementById('address2');
const cardEl = document.getElementById('card');
const cardnumEl = document.getElementById('cardnum');
const expirationEl = document.getElementById('expiration');
const cvvEl = document.getElementById('cvv');
const promoEl = document.getElementById('promo');



formEl.addEventListener("submit", (event) => {
    event.preventDefault()

    validateInputs();
})


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}


const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

function validateInputs() {

    const fnameValue = fnameEl.value.trim();
    if (fnameValue === '') {
        setError(fnameEl, "First Name cannot be empty")
    } else {
        setSuccess(fnameEl)
    }

    const lnameValue = lnameEl.value.trim();
    if (lnameValue === '') {
        setError(lnameEl, "Last Name cannot be empty")
    } else {
        setSuccess(lnameEl)
    }

    const usernameValue = usernameEl.value.trim();
    if (usernameValue === '') {
        setError(usernameEl, "Username cannot be empty")
    } else {
        setSuccess(usernameEl)
    }

    const emailValue = emailEl.value.trim();
    if (emailValue === '') {
        setError(emailEl, "Email cannot be empty")
    } else {
        if (validateEmail(emailValue) === true) {
            setSuccess(emailEl)
        }
        else {
            setError(emailEl, "Enter correct email id")
        }
    }

    const addressValue = addressEl.value.trim();
    if (addressValue === '') {
        setError(addressEl, "Address cannot be empty")
    } else {
        setSuccess(addressEl)
    }

    const cardValue = cardEl.value.trim();
    if (cardValue === '') {
        setError(cardEl, "Card name cannot be empty")
    } else {
        setSuccess(cardEl)
    }


    const cardnumValue = cardnumEl.value.trim();
    if (cardnumValue === '') {
        setError(cardnumEl, "Card number cannot be empty")
    } else {
        if (isNaN(cardnumValue) === false) {
            setSuccess(cardnumEl)
        } else {
            setError(cardnumEl, "Card number should be a number.")
        }
    }


    const expirationValue = expirationEl.value.trim();
    if (expirationValue === '') {
        setError(expirationEl, "Expiration cannot be empty")
    } else {
        if (isNaN(expirationValue) === false) {
            setSuccess(expirationEl)
        } else {
            setError(expirationEl, "Expiration number should be a number.")
        }
    }

    const cvvValue = cvvEl.value.trim();
    if (cvvValue === '') {
        setError(cvvEl, "CVV cannot be empty")
    } else {
        if (isNaN(cvvValue) === false) {
            setSuccess(cvvEl)
        } else {
            setError(cvvEl, "CVV should be a number.")
        }
    }




}
function validateEmail(emailValue) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(emailValue);

}


