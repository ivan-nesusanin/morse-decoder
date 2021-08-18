const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arrOf10 = [];
  let decodeStr = '';
  for (let i = 0; i < expr.length; i += 10) {
    arrOf10.push(expr.substring(i, i+10));
  }
  for (let i = 0; i < arrOf10.length; i++) {
    if (arrOf10[i] === '**********') {
      decodeStr += ' ';
    } else {
      let arrOf2 = [];
      for (let j = 0; j < arrOf10[i].length; j += 2) {
        arrOf2.push(arrOf10[i].substring(j, j+2));
      }
      let morseLet = '';
      for (let i = 0; i < arrOf2.length; i++) {
        switch (arrOf2[i]) {
          case '00':
            break;
          case '10':
            morseLet += '.'
            break;
          case '11':
            morseLet += '-'
            break;
        }
      }
      // if (morseLet in MORSE_TABLE)
      decodeStr += MORSE_TABLE[morseLet]
    }
  }
  return decodeStr;
};

module.exports = {
    decode
}