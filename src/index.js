/*COMPRUEBA QUE EL DOM SE CARGUE COMPLETAMENTE ANTES DE EJECUTAR CÓDIGO*/
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

/*DECLARA VARIABLES DEL DOM*/
const userMessage = document.getElementById('user-message');
const offset = document.getElementById('offset');
const buttonCode = document.getElementById('button-code');
const buttonDecode = document.getElementById('button-decode');
const buttonStartAgain = document.getElementById('start-again-button');


/*FUNCIÓN PARA REGRESAR A PANTALLA DE BIENVENIDA*/
const startAgain = () => {
  document.getElementById('welcome').style.display="block";
  document.getElementById('code-screen').style.display="none";
  document.getElementById('decode-screen').style.display="none";
  document.getElementById('start-again').style.display="none";
  return codeScreen;
}

/*FUNCIÓN PARA IR A PANTALLA DE TEXTO CODIFICADO*/
const codeScreen = () => {
  document.getElementById('welcome').style.display="none";
  document.getElementById('code-screen').style.display="block";
  document.getElementById('start-again').style.display="block";
  return codeScreen;
}

/*FUNCIÓN PARA IR A PANTALLA DE TEXTO DECODIFICADO*/
const decodeScreen = () => {
  document.getElementById('welcome').style.display="none";
  document.getElementById('decode-screen').style.display="block";
  document.getElementById('start-again').style.display="block";
  return decodeScreen;
}

/*DECLARA BOTONES Y EVENTOS DEL DOM*/
buttonCode.addEventListener("click", codeScreen);
buttonDecode.addEventListener("click", decodeScreen);
buttonStartAgain.addEventListener("click",startAgain);

/* COMPROBAR SI GUARDA RESPUESTAS
const saveAnswers = () => {
console.log(userMessage.value);
console.log(offset.value);
document.addEventListener('click',saveAnswers)
}
saveAnswers();
*/
