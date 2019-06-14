/*Implementar el objeto cipher, el cual debe estar exportado en el objeto global (window). (sólo hay que introducir funciones al método).
Este objeto (cipher) debe contener dos métodos:

cipher.encode(offset, string):
offset es el número de posiciones que queremos mover a la derecha en el alfabeto y string el mensaje (texto) que queremos cifrar.*/


window.cipher = {
encode: (offset, string) => {
console.log(string);
console.log(offset);
let result = "";
for (let i=0; i<string.length; i++) {
  let inputStrAsciiEncode = string.charCodeAt(i);
  let outputStrAsciiEncode = (inputStrAsciiEncode - 65 + offset) % 26 + 65;
  result += String.fromCharCode(outputStrAsciiEncode);
  }
  console.log(result);
  return result;
},

/*cipher.decode(offset, string):
offset es el número de posiciones que queremos mover a la izquierda en el alfabeto y string el mensaje (texto) que queremos descifrar*/

//decode: () => {
  // ...
//},

}