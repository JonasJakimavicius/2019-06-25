console.log('---------------------- Ciklų kartojimas ----------------------');
// Ciklas tai komandų bloko kartojimas tol, kol tenkinama salyga
// Salyga užrašoma 'Boolean' išraiška. Jeigu išraiška gražina 'true' kodo blokas kartojamas, priešingu atveju nutraukiamas.
// Salyga yra automatiškai tikrinama prieš bandant atlikti ciklo kodo bloką.
// Kiekvienam ciklui reikalingi pradiniai duomenys ar kintamasis(kai kuriais atvejais salygą gali įtakoti keli kintamieji). 
// Tam kad ciklas veiktų korektiškai, salygą sudarantys darbiniai kintamieji privalo keistis ir artėti link baigtinės salygos.

// ------------------------------------------- WHILE -------------------------------------------
// let k = 0;  // Pradinis darbinis kintamasis
// //        ↓ - Salyga, pateikta boolean išraiška(true arba false) 
// while (k < 10) { // --------------------------------------------------
//   // Kodas vykdomas jeigu salyga grąžino - true                       |
//   console.log(k); //                                                  |----->   Blokas kuris bus kartojimas, 
//   k = k + 1; // Darbinis kintamasis artinamas link baigtinės salygos  |       esant salygai - true
// } // -----------------------------------------------------------------
// // Kodas nebevykdomas, ir vykdomas kodas už ciklo, jei salyga grąžino  - false

// // ------------------------------------------- FOR -------------------------------------------
// //              ↓↓↓↓↓↓ - Salyga, pateikta boolean išraiška(true arba false) 
// for (let i = 0; i < 10; i++) { // --------------------------------------------------
//   // ↑↑↑↑↑↑↑↑↑          ↑↑↑ - Darbinis kintamasis artinamas link baigtinės salygos  |
//   //    ↑↑↑ - Pradinis darbinis kintamasis                                          |----->   Blokas kuris bus kartojimas,
//   // Kodas vykdomas jeigu salyga grąžino - true                                     |-----> esant salygai - true
//   console.log(i); //                                                                |
// } // -------------------------------------------------------------------------------
// // Kodas nebevykdomas, ir vykdomas kodas už ciklo, jei salyga grąžino  - false


// // ------------------------------------------- FOREACH -------------------------------------------
// let arr = [5, 8, 4, 2, 4, 1, 6, 8, 9, 1];
// // !!! Foreach atveju salyga ir kintamuoju yra pasirūpinama automatiškai !!!
// //                    ↓ - einamasis elementas; Galite vadinti kaip norite
// arr.forEach(function (el, i) { // -----------------------------------------
//   // i - nėra privalomas  ↑ - masyvo indeksas; Galite vadinti kaip norite  |----->   Blokas kuris bus kartojimas,
//   console.log(i); //                                                       |-----> kol baigsis masyvo elementai
// }); // --------------------------------------------------------------------
// Kuomet bus įvykdytas ciklo kodo blokas su kiekvienu elementu, išeinama iš ciklo. 


// ----------------------------------------- UŽDUOTYS ----------------------------------------
// 1. Ant lapo persibraižyti 'while' ciklo struktūrą ir pažymėti:
//    1.1 Salyga
//    1.2 Darbinį kintamąjį
//    1.3 Vykdomą bloką
//    1.4 Darbinio kintamojo kitimą, kuris veda link baigties
// 2. Ant lapo persibraižyti 'for' ciklo struktūrą ir pažymėti:
//    2.1 Salyga
//    2.2 Darbinį kintamąjį
//    2.3 Vykdomą bloką
//    2.4 Darbinio kintamojo kitimą, kuris veda link baigties
// 3. Ant lapo persibraižyti 'foreach' ciklo struktūrą ir darbinį masyvą. Pažymėti:
//    3.1 Einamajį elementą
//    3.2 Elemento indeksą
//    3.3 Vykdomą bloką
// 4. Susikurkite žmonių masyvą ({name: '', surname: '', age: x}) su 8 žmonėmis kintamajame: 'people'.
// -------------------------- Sekančias užduotis atlikite su visais 3 ciklais -----------------------------
// 5. Atspausdinkite visus 'people' masyvo žmonių objektų vardus eilutėmis
// 6. Atspausdinkite visus 'people' amžius
// 7. Atspausdinkite visus 'people' vardus ir pavardes eilutėmis
// 8. Sudėkite visus 'people' amžius. Atspausdinkite
// 9. Sukurkite vieną STRING'ą kuriame būtų būtų išrašyti visi vardai, atskirti kableliu ir tarpu. Atspausdinkite
// 10. Sukurkite vieną STRING'ą kuriame būtų būtų išrašyti visi pilni vardai, atskirti kableliu ir tarpu. Atspausdinkite


// ----------------------------- Pavyzdiai -----------------------------
people = [
  {
    name: 'Aetras'
  },
  {
    name: 'Betras'
  },
  {
    name: 'Cetras'
  },
  {
    name: 'Detras'
  },
  {
    name: 'Eetras'
  },
]
// 5.

let x = 0; // darbinis kintamasis skirtas iteravimui
while(x < people.length){ // salyga, jog darbinis kintamasis nebūtų didesnis už masyvo ilgį
  console.log(people[x].name); // spausdinama objekto(einamojo elemento) savybė, raktu 'name'
  x++; // darbinio kintamojo artinimas baigties salygai
}

// 9.

// let z = 0; // darbinis kintamasis
// let result = '';
// while (z < people.length) {
//   result += people[z].name + ', ';
//   z += 1;
// }
// result = result.substring(0, result.length - 2);

// let res = '';
people.forEach(function (person) {
  res += person.name + ', ';
});
// res = res.substr(0, res.length - 2);
// console.log(res);

// Praktikoje naudojama logika
// resEasy = people.map(p => p.name).join(', ');
// console.log(resEasy);
console.log('');


for (let z = 0; z < 5; z++) {
  console.log(z);  
}