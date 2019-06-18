//Implementa el objeto cipher. Este objeto contiene dos métodos:

// Método encode. El offset es el número de posiciones que queremos mover a la derecha en el alfabeto y string el mensaje (texto) que queremos cifrar.

window.cipher = {
encode: (offset, string) => {
  let result = "";//variable que recibirá y expresará el resultado
  let outputStrAsciiEncode;
  for (let i=0; i<string.length; i++) {
    let inputStrAsciiEncode = string.charCodeAt(i); //convierte y guarda valores ASCII de cada caracter del mensaje
    if (inputStrAsciiEncode >= 65 && inputStrAsciiEncode <=90){ //identifica mayúsculas
      outputStrAsciiEncode = (inputStrAsciiEncode -65 + offset) % 26 + 65; //aplica la fórmula estándar para cifrado César, utilizando valores ASCII de mayúsculas
      result += String.fromCharCode(outputStrAsciiEncode); //convierte en caracteres alfabéticos los valores ASCII ya codificados de mayúsculas y los concatena
    } else if (inputStrAsciiEncode >= 97 && inputStrAsciiEncode <= 122) { //identifica minúsculas
      outputStrAsciiEncode = (inputStrAsciiEncode -97 + offset) % 26 + 97; //aplica la fórmula estándar para cifrado César, utilizando valores ASCII de minúsculas
      result += String.fromCharCode(outputStrAsciiEncode); //convierte en caracteres alfabéticos los valores ASCII ya codificados de minúsculas y los concatena
    } else if (inputStrAsciiEncode === 32) { //identifica espacios por su valor ASCII
      result = result +  " "; //hace que los espacios aparezcan como tales en el string result   
      }    
    }  
   return result;
  },

//Método decode. El offset es el número de posiciones que queremos mover a la izquierda en el alfabeto y string el mensaje (texto) que queremos descifrar.

decode: (offset, string) => {
  let result = ""; //variable que recibirá y expresará el resultado
  let outputStrAsciiDecode;
  for (let i=0; i<string.length; i++) {
    let inputStrAsciiDecode = string.charCodeAt(i); //convierte y guarda valores ASCII de cada caracter del mensaje
    if (inputStrAsciiDecode >= 65 && inputStrAsciiDecode <=90) { //identifica mayúsculas
      outputStrAsciiDecode = (inputStrAsciiDecode - 13 - offset) % 26 + 65; //aplica la fórmula estándar para descifrado César, utilizando valores ASCII de mayúsculas
      result += String.fromCharCode(outputStrAsciiDecode); //convierte en caracteres alfabéticos los valores ASCII ya codificados de mayúsculas y los concatena
    } else if (inputStrAsciiDecode >= 97 && inputStrAsciiDecode <= 122) { //identifica minúsculas
      outputStrAsciiDecode = (inputStrAsciiDecode - 19 - offset) % 26 + 97; //aplica la fórmula estándar para descifrado César, utilizando valores ASCII de minúsculas
      result += String.fromCharCode(outputStrAsciiDecode); //convierte en caracteres alfabéticos los valores ASCII ya codificados de minúsculas y los concatena
    } else if (inputStrAsciiDecode === 32) { //identifica espacios por su valor ASCII
      result = result + " "; //hace que los espacios aparezcan como tales en el string result
      }    
    }
  return result;
  },
}