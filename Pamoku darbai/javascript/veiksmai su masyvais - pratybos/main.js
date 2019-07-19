const numArray = [1, 2, 3, 4, 5, 6, 7];
const stringArray = ['.', ',', 'buvo', 'graži', 'diena', 'naktį', 'laiškas',
  'gavo', 'draugė', 'laiškininkas', 'obuolį', 'suvalgė', 'bebriukai', 'šunį', 'pavogė'];
// ----------------------- Naudingos komandos -----------------------
// Pavertimas STRING'u:
let stringValue = String(7);
// STRING'ų sujungimas:
let concatinatedString = 'Tikras' + ' ' + 'žemaitiškas ' + 'balius.';
// Paversti STRING'o pirmą raidę dižiąja
let lowerString = 'artūras';
lowerString = lowerString.charAt(0).toUpperCase() + lowerString.slice(1);
// Elementų skaičius masyve (masyvo ilgis)
let numArrayLength = numArray.length;

//    1. Panaudodami numArray masyvo elementus ir aritmetines operacijas išspausdinkite rezultatus:
// 15, 32, 55, 71.
//    2. Panaudodami numArray masyvo elementus KAIP STRING'us išspausdinkite rezultatus:
// "13", "22", "65", "57".
//    3. Sudarykite 5 sakinius iš stringArray elementų, jeigu norite papildykite žodžių masyvą 
// naudodami funkcijas array.push('naujas') arba array.unshift('žodis').
//    4. Pridėkite numArray masyvui likusius dešimtainės sistemos skaitmenis.
//    5. Sukurkite naują tik lyginių skaičių masyvą iš numArray masyvo elementų.
//    6. Sukurkite naują tik pirminių skaičių masyvą iš numArray masyvo elementų.
//    7. Performuokite numArray masyvą išrikiuota priešinga tvarka panaudojant splice.

// 1.
console.log(numArray[2] * numArray[4]);
// ...
console.log('');
// 2.
console.log("" + numArray[0] + numArray[2]);
// ...
console.log('');

// 3.
console.log(
  stringArray[2].charAt(0).toUpperCase() + stringArray[2].slice(1),
  stringArray[3], stringArray[4] + stringArray[0]
);
// ...
console.log('');

// 4.
numArray.unshift(0);
// ...
console.log('');

// 5.
const numArrayEven = [numArray[2]];
numArrayEven.push(numArray[4]);
// ...
console.log('');

// 6.
const numArrayPrime = numArray.slice(1, 4);
// ...
console.log('');

// 7.
let splicedLastElement = numArray.splice(-1, 1)[0];
console.log(splicedLastElement);

numArray.splice(0, 0, splicedLastElement);
numArray.splice(1, 0, numArray.splice(-1, 1)[0]);
numArray.splice(2, 0, ...numArray.splice(-1, 1));
// ...
console.log(numArray);
console.log('');