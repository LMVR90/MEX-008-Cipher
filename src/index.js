/*COMPRUEBA QUE EL DOM SE CARGUE COMPLETAMENTE ANTES DE EJECUTAR CÓDIGO
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});*/

//DECLARAR VARIABLES DEL DOM
const buttonCode = document.getElementById('button-code');
const buttonDecode = document.getElementById('button-decode');
const buttonReset = document.getElementById('reset');

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
  let str = document.getElementById('string').value;
  let string = str.toUpperCase();
  let offsetInput = document.getElementById('offset').value;
  let offset = parseInt(offsetInput);
  document.getElementById("encoded-text").innerHTML = window.cipher.encode(offset,string);
}

//FUNCIÓN PARA IR A PANTALLA DE TEXTO DECODIFICADO
const decodeScreen = () => {
  document.getElementById('welcome').style.display="none";
  document.getElementById('decode-screen').style.display="block";
  document.getElementById('start-again').style.display="block";
  //let str = document.getElementById('string').value;
  //let string = str.toUpperCase();
  //let offsetInput = document.getElementById('offset').value;
  //let offset = parseInt(offsetInput);
  //document.getElementById("decoded-text").innerHTML = window.cipher.decode(offset,string);
}

//DECLARAR BOTONES Y EVENTOS DEL DOM
buttonCode.addEventListener("click", codeScreen);
buttonDecode.addEventListener("click", decodeScreen);
buttonReset.addEventListener("click",resetWelcome);
