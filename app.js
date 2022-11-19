//import requirement modules
const { encryptor } = require('./encrypt-data')
const { decryptor } = require('./decrypt-data')
const fs = require('fs')

/*read data to encrypt from a file .txt formatted with utf-8 */
const data_to_encrypt = fs.readFileSync('data_to_encrypt.txt', { encoding: 'utf-8' }) //should not exceed maximum size of memory < 190 characters

/*read data to decrypt from a file .txt formatted with utf-8 */
const encrypted_data = fs.readFileSync('encrypted_data.txt', { encoding: 'utf-8' })

/*short of console.log */
function l(c) {
    console.log(c)
}

/* store result in memory */
// encrypt
const encryptedDT = encryptor(data_to_encrypt);
// decrypt
const decryptedDT = decryptor(encryptedDT);

/*log all data into console*/
l(data_to_encrypt + " " + data_to_encrypt.length)
l(encryptedDT)
l(decryptedDT)