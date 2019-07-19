const numberArray = [0, 0, 1, -2, -5, -8, -7, -9, 5, 1, 2, 3, 6, 44, 5];
const peopleArray = [
  {
    name: 'Serbentautas',
    surname: 'Bordiūras',
    age: 31
  },
  {
    name: 'Monitorė',
    surname: 'Vaizdinienė',
    age: 28
  },
  {
    name: 'Sandra',
    surname: 'Barantaitė',
    age: 32
  },
  {
    name: 'Velinas',
    surname: 'Dviratis',
    age: 25
  },
  {
    name: 'Vajetauskas',
    surname: 'Ištiktenis',
    age: 11
  },
  {
    name: 'Kęstas',
    surname: 'Paskęstas',
    age: 12
  },
  {
    name: 'Marytė',
    surname: 'Grėblytė',
    age: 44
  },
];
// WHILE ciklas
// 1. Sukurkite ciklą, kuris nukopijuotų 'numberArray' narius į naują masyvą. Atspausdinkite.
// 2. Sukurkite ciklą, kuris nukopijuotų 'numberArray' narius į naują masyvą atvirkščia tvarka. Atspausdinkite.
// 3. Sudarykite naują masyvą, kuriame būtų nukopijuotos 'numberArray' reikšmės, paverstos STRING'ais. Atspausdinkite.
// 4. Iteruodami per 'numberArray', sudėkite visas reikšmes ir atspausdinkite visų narių sumą.
// 5. Sudarykite naują masyvą, kuriame būtų 'numberArray' kvadratai(el**2). Atspausdinkite.
// 6. Sudarykite naują masyvą, kuriame būtų tik teigiamos 'numberArray' reikšmės. Atspausdinkite.
// 7. Sudarykite naują masyvą, kuriame būtų tik neigiamos 'numberArray' reikšmės. Atspausdinkite.
// 8. Sudarykite naują masyvą, kuriame visos 'numberArray' neigiamos reikšmės būtų paverstos teigiamomis. Atspausdinkite.
// 9. Atrinkite naują žmonių masyvą, kuriame būtų tik jaunesni nei 30 metų žmonės. Atspausdinkite.
// 10. Suskaičiuokite visų žmonių esančių 'peopleArray' amžiaus vidurkį. Atspausdinkite.

// FOR ciklas
// 1. Sukurkite ciklą, kuris nukopijuotų 'numberArray' narius į naują masyvą. Atspausdinkite.
// 2. Sukurkite ciklą, kuris nukopijuotų 'numberArray' narius į naują masyvą atvirkščia tvarka. Atspausdinkite.
// 3. Sudarykite naują masyvą, kuriame būtų nukopijuotos 'numberArray' reikšmės, paverstos STRING'ais. Atspausdinkite.
// 4. Iteruodami per 'numberArray', sudėkite visas reikšmes ir atspausdinkite visų narių sumą.
// 5. Sudarykite naują masyvą, kuriame būtų 'numberArray' kvadratai(el**2). Atspausdinkite.
// 6. Sudarykite naują masyvą, kuriame būtų tik teigiamos 'numberArray' reikšmės. Atspausdinkite.
// 7. Sudarykite naują masyvą, kuriame būtų tik neigiamos 'numberArray' reikšmės. Atspausdinkite.
// 8. Sudarykite naują masyvą, kuriame visos 'numberArray' neigiamos reikšmės būtų paverstos teigiamomis. Atspausdinkite.
// 9. Atrinkite naują žmonių masyvą, kuriame būtų tik jaunesni nei 30 metų žmonės. Atspausdinkite.
// 10. Suskaičiuokite visų žmonių esančių 'peopleArray' amžiaus vidurkį. Atspausdinkite.

// ARRAY.FOREACH ciklas
// 1. Sukurkite ciklą, kuris nukopijuotų 'numberArray' narius į naują masyvą. Atspausdinkite.
// 2. Sukurkite ciklą, kuris nukopijuotų 'numberArray' narius į naują masyvą atvirkščia tvarka. Atspausdinkite.
// 3. Sudarykite naują masyvą, kuriame būtų nukopijuotos 'numberArray' reikšmės, paverstos STRING'ais. Atspausdinkite.
// 4. Iteruodami per 'numberArray', sudėkite visas reikšmes ir atspausdinkite visų narių sumą.
// 5. Sudarykite naują masyvą, kuriame būtų 'numberArray' kvadratai(el**2). Atspausdinkite.
// 6. Sudarykite naują masyvą, kuriame būtų tik teigiamos 'numberArray' reikšmės. Atspausdinkite.
// 7. Sudarykite naują masyvą, kuriame būtų tik neigiamos 'numberArray' reikšmės. Atspausdinkite.
// 8. Sudarykite naują masyvą, kuriame visos 'numberArray' neigiamos reikšmės būtų paverstos teigiamomis. Atspausdinkite.
// 9. Atrinkite naują žmonių masyvą, kuriame būtų tik jaunesni nei 30 metų žmonės. Atspausdinkite.
// 10. Suskaičiuokite visų žmonių esančių 'peopleArray' amžiaus vidurkį. Atspausdinkite.

// WHILE užduočių atlikimas------------------------------------------------
console.log('---------------------------WHILE---------------------------');
console.log('Number array');
console.log(numberArray);
console.log('');
// 1.
console.log('1.');
let numberArrayCopy = [];
let i = 0;
while(numberArray.length > i){
  numberArrayCopy.push(numberArray[i]);
  i = i + 1;
}
console.log('Number array copy')
console.log(numberArrayCopy);
console.log('');

// FOR užduočių atlikimas--------------------------------------------------
console.log('----------------------------FOR----------------------------');
console.log('Number array');
console.log(numberArray);
console.log('');
// 2.
console.log('2.');
let numberArrayReverse = [];
for (let i = 0; i < numberArray.length; i++) {
  numberArrayReverse.unshift(numberArray[i]);
}
console.log('Number array reverse');
console.log(numberArrayReverse);
console.log('');

// ARRAY.FOREACH užduočių atlikimas----------------------------------------
console.log('-----------------------ARRAY FOREACH-----------------------');
console.log('Number array');
console.log(numberArray);
console.log('');
// 3.
console.log('3.');
let numberArrayString = [];
numberArray.forEach(function(number){
  numberArrayString.push(String(number));
});
console.log('String number array');
console.log(numberArrayString);
console.log('');