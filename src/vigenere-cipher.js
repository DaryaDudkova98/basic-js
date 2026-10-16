/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  _process(message, key, direction) {
    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (const char of upperMessage) {
      if (char >= 'A' && char <= 'Z') {
        const shift = upperKey[keyIndex % upperKey.length].charCodeAt(0) - 65;
        const code = char.charCodeAt(0) - 65;
        const newCode = (code + direction * shift + 26) % 26;
        result += String.fromCharCode(newCode + 65);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    return this._process(message, key, 1);
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    return this._process(encryptedMessage, key, -1);
  }
}


module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
