const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let word = '';
  for (i = 0; i < expr.length / 10; i++) {
    if (expr.slice(i * 10, (i + 1) * 10) === '**********') {
      word += ' ';
    } else {
      let letter = '';
      let morse = '';
      letter += expr.slice(i * 10, (i + 1) * 10)
      for (j = 0; j < 10; j += 2) {
        if (letter.slice(j, j + 2) === '11')
          morse += '-'
        if (letter.slice(j, j + 2) === '10')
          morse += '.'
      }
      word += MORSE_TABLE[morse]
    }
  }
  return (word)
}

module.exports = {
  decode
}