//Implementa el objeto cipher. Este objeto contiene dos métodos:

// Método encode. El offset es el número de posiciones que queremos mover a la derecha en el alfabeto y string el mensaje (texto) que queremos cifrar.

window.cipher = {
encode: (offset, string) => {
let result = "";//variable que recibirá y expresará el resultado
for (let i=0; i<string.length; i++) {
  let inputStrAsciiEncode = string.charCodeAt(i);//convierte y guarda valores ASCII de cada caracter del mensaje
  let outputStrAsciiEncode = (inputStrAsciiEncode - 65 + offset) % 26 + 65;//aplica la fórmula estándar para cifrado César, utilizando valores ASCII
  result += String.fromCharCode(outputStrAsciiEncode);//convierte en caracteres alfabéticos los valores ASCII ya codificados y los concatena
  }
  return result;
},

//Método decode. El offset es el número de posiciones que queremos mover a la izquierda en el alfabeto y string el mensaje (texto) que queremos descifrar.

decode: (offset, string) => {
  let result = "";//variable que recibirá y expresará el resultado
  for (let i=0; i<string.length; i++) {
    let inputStrAsciiDecode = string.charCodeAt(i);//obtiene y guarda valores ASCII de cada caracter del mensaje
    let outputStrAsciiDecode = (inputStrAsciiDecode + 65 - offset) % 26 + 65;//aplica la fórmula estándar para descifrar código César, utilizando valores ASCII
    result += String.fromCharCode(outputStrAsciiDecode);//convierte en caracteres alfabéticos los valores ASCII ya decodificados y los concatena
    }
    return result;
  },
}