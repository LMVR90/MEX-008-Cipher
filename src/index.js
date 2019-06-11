document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

const userMessage = document.getElementById('user-message');
const offset = document.getElementById('offset');

const buttonCipher = document.getElementById('button-cipher');
const buttonDecipher = document.getElementById('button-decipher');

const saveAnswers = () => {
/*userMessage = document.getElementById('user-message').value;
offset = document.getElementById('offset').value;
=*/
console.log(userMessage.value);
console.log(offset.value);
document.addEventListener('click',saveAnswers)
}

saveAnswers();
