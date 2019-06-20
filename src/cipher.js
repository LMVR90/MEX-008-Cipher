//Implementa el objeto cipher. Este objeto contiene dos métodos:

// Método encode. El offset es el número de posiciones que queremos mover a la derecha en el alfabeto y string el mensaje (texto) que queremos cifrar.
window.cipher = {
encode: (offset, string) => {
  let result = ""; //variable que recibirá y expresará el resultado
  let outputStrAsciiEncode; //variable que recibirá los valores ascii ya codificados
  for (let i=0; i<string.length; i++) {
    const inputStrAsciiEncode = string.charCodeAt(i); //convierte y guarda valores ASCII de cada caracter del mensaje
    if (inputStrAsciiEncode >= 65 && inputStrAsciiEncode <=90) { //identifica mayúsculas
      outputStrAsciiEncode = (inputStrAsciiEncode -65 + offset) % 26 + 65; //aplica la fórmula estándar para cifrado César (este paso se repite para cada rango)
      result += String.fromCharCode(outputStrAsciiEncode); //convierte en caracteres alfabéticos los valores ASCII ya codificados y los concatena (este paso se repite para cada rango)
    } else if (inputStrAsciiEncode >= 97 && inputStrAsciiEncode <= 122) { //identifica minúsculas
      outputStrAsciiEncode = (inputStrAsciiEncode -97 + offset) % 26 + 97; 
      result += String.fromCharCode(outputStrAsciiEncode); 
    } else if (inputStrAsciiEncode === 32) { //identifica espacios
      result = result +  " "; 
    } else if (inputStrAsciiEncode >= 33 && inputStrAsciiEncode <= 64) { //identifica caracteres especiales
      outputStrAsciiEncode = (inputStrAsciiEncode -33 + offset) % 32 + 33; 
      result += String.fromCharCode(outputStrAsciiEncode); // identifica caracteres especiales que incluyen Ñ y acentos
    } else if (inputStrAsciiEncode >= 161 && inputStrAsciiEncode <= 250) {
      outputStrAsciiEncode = (inputStrAsciiEncode - 161 + offset) % 90 + 161;
      result += String.fromCharCode(outputStrAsciiEncode);
      }
    }   
      return result;
  },
  
//Método decode. El offset es el número de posiciones que queremos mover a la izquierda en el alfabeto y string el mensaje (texto) que queremos descifrar.
decode: (offset, string) => {
  let result = ""; //variable que recibirá y expresará el resultado
  let outputStrAsciiDecode; //variable que recibirá los valores ascii ya codificados
    for (let i=0; i<string.length; i++) {
    const inputStrAsciiDecode = string.charCodeAt(i); //convierte y guarda valores ascii de cada caracter del mensaje
    if (inputStrAsciiDecode >= 65 && inputStrAsciiDecode <=90) { //identifica mayúsculas
      outputStrAsciiDecode = (inputStrAsciiDecode - 13 - offset) % 26 + 65; //aplica la fórmula estándar para descifrado César (este paso se repite para cada rango)
      result += String.fromCharCode(outputStrAsciiDecode); //convierte en caracteres alfabéticos los valores ASCII ya codificados y los concatena (este paso se repite para cada rango)
    } else if (inputStrAsciiDecode >= 97 && inputStrAsciiDecode <= 122) { //identifica minúsculas
      outputStrAsciiDecode = (inputStrAsciiDecode - 19 - offset) % 26 + 97; 
      result += String.fromCharCode(outputStrAsciiDecode); 
    } else if (inputStrAsciiDecode === 32) { //identifica espacios
      result = result + " ";
    } else if (inputStrAsciiDecode >= 33 && inputStrAsciiDecode <= 64) { //identifica caracteres especiales
      outputStrAsciiDecode = (inputStrAsciiDecode -1 - offset) % 32 + 33;
      result += String.fromCharCode(outputStrAsciiDecode);
    } else if (inputStrAsciiDecode >= 161 && inputStrAsciiDecode <= 250) { // identifica caracteres especiales que incluyen Ñ y acentos
      outputStrAsciiDecode = (inputStrAsciiDecode - 161 - offset) % 90 + 161;
      result += String.fromCharCode(outputStrAsciiDecode);
      }
    }
      return result;
  },
}