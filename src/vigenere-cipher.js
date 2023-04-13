const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(handler = true) {
    this.notReverse =  handler;
  }
  encrypt(message, key) {
    if (!message || !key) {
     throw new Error('Incorrect arguments!');
    }
    message = this.notReverse ? message.toUpperCase() : message.toUpperCase().split('').reverse().join('');
    key = key.toUpperCase();
    const UPPERCASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let normalizedKey = key.repeat(Math.ceil(message.length / key.length));
    const charArray = normalizedKey.split('');
    Array.from(message).forEach((item, index) => UPPERCASE_CHARS.indexOf(item) < 0 ? charArray.splice(index, 0, item) : '');
    normalizedKey = charArray.join('');
    let encryptedString = '';
    for (let i = 0; i < message.length; i++) {
      if (UPPERCASE_CHARS.indexOf(message[i]) < 0) {
        encryptedString += message[i];
      } else {
      const index = (UPPERCASE_CHARS.indexOf(message[i]) + UPPERCASE_CHARS.indexOf(normalizedKey[i])) % UPPERCASE_CHARS.length;
      encryptedString += UPPERCASE_CHARS[index];
      }
    }
    return encryptedString;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
     throw new Error('Incorrect arguments!');
    }
    encryptedMessage = this.notReverse ? encryptedMessage.toUpperCase() : encryptedMessage.toUpperCase().split('').reverse().join('');
    key = key.toUpperCase();
    const UPPERCASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let normalizedKey = key.repeat(Math.ceil(encryptedMessage.length / key.length));
    const charArray = normalizedKey.split('');
    Array.from(encryptedMessage).forEach((item, index) => UPPERCASE_CHARS.indexOf(item) < 0 ? charArray.splice(index, 0, item) : '');
    normalizedKey = charArray.join('');
    let decryptedString = '';
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (UPPERCASE_CHARS.indexOf(encryptedMessage[i]) < 0) {
        decryptedString += encryptedMessage[i];
      } else {
      const index = ((UPPERCASE_CHARS.length - UPPERCASE_CHARS.indexOf(normalizedKey[i])) + UPPERCASE_CHARS.indexOf(encryptedMessage[i])) % UPPERCASE_CHARS.length;
      decryptedString += UPPERCASE_CHARS[Math.abs(index)];
      }
    }
    return decryptedString;
  }
}


module.exports = {
  VigenereCipheringMachine
};
