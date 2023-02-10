
//adding the copy function:
const copyButton = document.querySelector('.copy-image');
const copyText = document.querySelector('.copy-text');
const password = document.querySelector('.password');

copyButton.addEventListener('click', e => {
    navigator.clipboard.writeText(password.textContent)
        .then(() => {
            copyText.style.visibility = 'visible';
        })
        .then(() => {
            password.style.color = '#817D92'
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
});

//showing number on screen equivalent to the slider
const input = document.querySelector('.rangebar');
const passwordLength = document.querySelector('.length-amount')
input.addEventListener('input', e => {
    let value = e.target.value;
    passwordLength.innerHTML = value;
});

//adding the strength evaluation
const body = document.querySelector('body');
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
const strengthText = document.querySelector('.strength-skala');
const skala = document.querySelectorAll('.skala');
const skala1 = document.querySelector('#skala1');
const skala2 = document.querySelector('#skala2');
const skala3 = document.querySelector('#skala3');
const skala4 = document.querySelector('#skala4');

body.addEventListener('click', e => {
    const checkedCheckBoxes = Array.from(checkBoxes).filter(checkBox => checkBox.checked)
    if (input.value >= 8 && checkedCheckBoxes.length === 1) {
        strengthText.textContent = 'Weak';
        skala1.style.backgroundColor = '#F64A4A';
        skala2.style.backgroundColor = 'transparent';
        skala3.style.backgroundColor = 'transparent';
        skala4.style.backgroundColor = 'transparent';
    } else if (input.value >= 8 && checkedCheckBoxes.length === 2) {
        strengthText.textContent = 'Medium';
        skala1.style.backgroundColor = '#FB7C58';
        skala2.style.backgroundColor = '#FB7C58';
        skala3.style.backgroundColor = 'transparent';
        skala4.style.backgroundColor = 'transparent';
    } else if (input.value >= 8 && checkedCheckBoxes.length === 3) {
        strengthText.textContent = 'Secure';
        skala1.style.backgroundColor = '#F8CD65';
        skala2.style.backgroundColor = '#F8CD65';
        skala3.style.backgroundColor = '#F8CD65';
        skala4.style.backgroundColor = 'transparent';

    } else if (input.value >= 8 && checkedCheckBoxes.length === 4) {
        strengthText.textContent = 'Very Secure';
        skala1.style.backgroundColor = '#A4FFAF';
        skala2.style.backgroundColor = '#A4FFAF';
        skala3.style.backgroundColor = '#A4FFAF';
        skala4.style.backgroundColor = '#A4FFAF';
    } else {
        strengthText.textContent = 'To Weak';
        skala1.style.backgroundColor = 'transparent';
        skala2.style.backgroundColor = 'transparent';
        skala3.style.backgroundColor = 'transparent';
        skala4.style.backgroundColor = 'transparent';
    }

})

//implementing tooltip for copy button:
const tooltip = document.createElement('div');
tooltip.style.display = 'none';
tooltip.style.position = 'absolute';
tooltip.innerHTML = 'Copy';
body.appendChild(tooltip);

copyButton.addEventListener('mouseover', function (event) {
    tooltip.style.display = 'block';
    tooltip.style.left = event.clientX + 'px';
    tooltip.style.top = event.clientY + 'px';
});

copyButton.addEventListener('mouseout', e => {
    tooltip.style.display = 'none'
});

//implementing the password Generator:
const generateButton = document.querySelector('.password-generator-button');
generateButton.addEventListener('click', e => {
    copyText.style.visibility = 'hidden';

    const passwordLength = input.value;

    let totalString = ''

    const checkedCheckBoxes = Array.from(checkBoxes).filter(checkBox => checkBox.checked);

    checkedCheckBoxes.forEach((box) => {
        if (box.id === 'lowercase') {
            totalString += 'abcdefghijklmnopqrstuvwxyz'
        } else if (box.id === 'uppercase') {
            totalString += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        } else if (box.id === 'numbers') {
            totalString += '0123456789';
        } else if (box.id === 'symbols') {
            totalString += '!@#$%^&*()""€+-?/[]{}:,.';
        }

    });



    if (checkedCheckBoxes.length === 0) {
        password.textContent = 'Please select a box'
    } else {
        let userPassword = '';
        for (let i = 0; i < passwordLength; i++) {
            let num = Math.floor(Math.random() * totalString.length);
            userPassword += totalString[num]
        }

        password.textContent = userPassword;
        password.style.color = '#E6E5EA';
    }


})







