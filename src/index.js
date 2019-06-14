/*COMPRUEBA QUE EL DOM SE CARGUE COMPLETAMENTE ANTES DE EJECUTAR CÓDIGO
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});*/

//DECLARAR VARIABLES DEL DOM
//const string = document.getElementById('string').value; Obtener el valor de los inputs y guardarlo en una variable.
//const offset = document.getElementById('offset').value; Obtener el valor de los inputs y guardarlo en una variable.
const buttonCode = document.getElementById('button-code');
const buttonDecode = document.getElementById('button-decode');
const buttonReset = document.getElementById('reset');
//const string = document.getElementById('string');
//const offset = document.getElementById('offset');


//FUNCIÓN PARA REGRESAR A PANTALLA DE BIENVENIDA
const resetWelcome = () => {
  document.getElementById('welcome').style.display="block";
  document.getElementById('code-screen').style.display="none";
  document.getElementById('decode-screen').style.display="none";
  document.getElementById('start-again').style.display="none";
  document.getElementById('offset').value="default value";
  return resetWelcome;
}

//FUNCIÓN PARA IR A PANTALLA DE TEXTO CODIFICADO
const codeScreen = () => {
  document.getElementById('welcome').style.display="none";
  document.getElementById('code-screen').style.display="block";
  document.getElementById('start-again').style.display="block";
  let string = document.getElementById('string').value;
  let offsetInput = document.getElementById('offset').value;
  //let string = str.toUpperCase();
  let offset = parseInt(offsetInput);
  document.getElementById("encoded-text").innerHTML = window.cipher.encode(offset,string);
}

//FUNCIÓN PARA IR A PANTALLA DE TEXTO DECODIFICADO
const decodeScreen = () => {
  document.getElementById('welcome').style.display="none";
  document.getElementById('decode-screen').style.display="block";
  document.getElementById('start-again').style.display="block";
  //let string = document.getElementById('string').value;
  //let offset = document.getElementById('offset').value;
  //console.log(string.value);
  //console.log(offset.value);
  //window.cipher.decode(string,offset);
  //const strDecodedResult = window.cipher.encode.strDecoded;
  return decodeScreen;
}

//DECLARAR BOTONES Y EVENTOS DEL DOM
buttonCode.addEventListener("click", codeScreen);
buttonDecode.addEventListener("click", decodeScreen);
buttonReset.addEventListener("click",resetWelcome);

/* COMPROBAR SI GUARDA RESPUESTAS
const saveAnswers = () => {
console.log(userMessage.value);
console.log(offset.value);
document.addEventListener('click',saveAnswers)
}
saveAnswers();
*/
