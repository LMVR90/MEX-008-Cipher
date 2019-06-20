//DECLARA VARIABLES DEL DOM
const buttonCode = document.getElementById('button-code');
const buttonDecode = document.getElementById('button-decode');
const buttonReset = document.getElementById('reset');

//FUNCIÓN PARA REGRESAR A PANTALLA DE BIENVENIDA. OCULTA LAS OTRAS PANTALLAS Y BOTONES. REGRESA LOS INPUTS A SU VALOR INICIAL.
const resetWelcome = () => {
  document.getElementById('welcome').style.display="block";
  document.getElementById('code-screen').style.display="none";
  document.getElementById('decode-screen').style.display="none";
  document.getElementById('start-again').style.display="none";
  document.getElementById('offset').value="default value";
  return resetWelcome;
}

//FUNCIÓN PARA IR A PANTALLA DE TEXTO CODIFICADO. OCULTA LAS OTRAS PANTALLAS Y BOTONES. OBTIENE LOS VALORES DE LOS INPUTS NECESARIOS PARA EL MÉTODO ENCODE. IMPLEMENTA EL MÉTODO ENCODE.
const codeScreen = () => {
  document.getElementById('welcome').style.display="none";
  document.getElementById('code-screen').style.display="block";
  document.getElementById('start-again').style.display="block";
  let string = document.getElementById('string').value;
  let offsetInput = document.getElementById('offset').value;
  let offset = parseInt(offsetInput);
  let result = window.cipher.encode(offset, string);
  document.getElementById('encoded-text').innerHTML = result;
}

//FUNCIÓN PARA IR A PANTALLA DE TEXTO DECODIFICADO. OCULTA LAS OTRAS PANTALLAS Y BOTONES. OBTIENE LOS VALORES DE LOS INPUTS NECESARIOS PARA EL MÉTODO DECODE. IMPLEMENTA EL MÉTODO DECODE.
const decodeScreen = () => {
  document.getElementById('welcome').style.display="none";
  document.getElementById('decode-screen').style.display="block";
  document.getElementById('start-again').style.display="block";
  let string = document.getElementById('string').value;
  let offsetInput = document.getElementById('offset').value;
  let offset = parseInt(offsetInput);
  let result = window.cipher.decode(offset, string);
  document.getElementById('decoded-text').innerHTML = result;
}

//DECLARAR BOTONES Y EVENTOS DEL DOM PARA DETONAR LAS FUNCIONES DECLARADAS 
buttonCode.addEventListener("click", codeScreen);
buttonDecode.addEventListener("click", decodeScreen);
buttonReset.addEventListener("click",resetWelcome);
