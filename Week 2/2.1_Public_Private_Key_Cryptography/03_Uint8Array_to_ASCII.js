function bytesToAscii(byteArray) {
  return new TextDecoder().decode(byteArray);
}

const byteArray = new Uint8Array([72, 101, 108, 108, 111]); 
const asciiString = bytesToAscii(byteArray);
console.log(asciiString);


function AsciiToByte(asciiString) {
  return new TextEncoder().encode(asciiString);
}

const asciiString1 = 'Hello';
const byteArray1 = AsciiToByte(asciiString1);
console.log(byteArray1); 