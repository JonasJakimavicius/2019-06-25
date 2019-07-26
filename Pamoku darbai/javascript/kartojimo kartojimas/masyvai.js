console.log('---------------------- Masyvų kartojimas ----------------------');

// Masyvas tai kintamųjų kolekcija
// Kintamieji masyve yra vadinami elementais ( gali būt bet kokio tipo )
// Elementai masyve turi eiliškumą ir numeruojami: 0, 1, 2, ..., n-1, n; n - visų elementų skaičius
// Numeracijos kintamasis vadinamas indeksu (0, 1, 2, 3)
//                    ↓  ↓   ↓  ↓  ↓  ↓ - elementai
let skaičiųMasyvas = [1, 2, -5, 6, 8, 7];
//                    0  1   2  3  4  5 - indeksai
let objektųMasyvas = [
  {                       // ------                 
    raktas1: 'reikšmė1',  //       |
    raktas2: 'reikšmė2',  //       |--> pirmasis elementas; ideksas: 0; objektųMasyvas[0]
    raktas3: 'reikšmė3',  //       |
  },                      // -----
  {                       // ------                 
    raktas1: 'reikšmė1',  //       |
    raktas2: 'reikšmė2',  //       |--> antrasis elementas; ideksas: 1; objektųMasyvas[1]
    raktas3: 'reikšmė3',  //       |
  },                      // ------
  {                       // ------                 
    raktas1: 'reikšmė1',  //       |
    raktas2: 'reikšmė2',  //       |--> trečiasis elementas; ideksas: 2; objektųMasyvas[2]
    raktas3: 'reikšmė3',  //       |
  },                      // ------
];

// arrayName.push(... elements ...) - įdėjimas į masyvo galą
skaičiųMasyvas.push(1);
skaičiųMasyvas.push(1, 2, 3);
objektųMasyvas.push(
  {
    raktas1: 'reikšmė1',
    raktas2: 'reikšmė2',
    raktas3: 'reikšmė3',
  }
);

// arrayName.length - masyvo elementų skaičius
let skaičiųMasyvoElementųSkaičius = skaičiųMasyvas.length;
let objektųMasyvoElementųSkaičius = objektųMasyvas.length;

// arrayName.pop() - ištraukimas iš masyvo galo
let ištrauktasPaskutinisElementas = skaičiųMasyvas.pop();
ištrauktasPaskutinisElementas = objektųMasyvas.pop();

// arrayName.unshift - idėjimas į priekį
skaičiųMasyvas.unshift(1);
skaičiųMasyvas.unshift(1, 2, 3);
objektųMasyvas.unshift(
  {
    raktas1: 'reikšmė1',
    raktas2: 'reikšmė2',
    raktas3: 'reikšmė3',
  }
);

// arrayName.shift() - ištraukimas iš masyvo priekio
let ištrauktasPirmasElementas = skaičiųMasyvas.shift();
ištrauktasPirmasElementas = objektųMasyvas.shift();

// arrayname.slice(from, to) - masyvos kopijavimas;
// from - nuo kurio elemento (įskaitant); Jeigu 'from' (pirmasis) parametras nenurodytas, kopijuojamas visas masyvas;
// to - iki kurio elemento (neįskaitant); Jeigu 'to' (antrasis) parametras nenurodytas, kopijuojama iki galo;
let pilnaMasyvoKopija = skaičiųMasyvas.slice();
let pirmi2ElementaiKopija = objektųMasyvas.slice(0, 2);
let paskutiniai2ElementaiKopija = objektųMasyvas.slice(objektųMasyvas.length - 2);
let nuo2Iki4Kopija = objektųMasyvas.slice(2, 4);

// arrayname.splice(from, count, el1, el2, ... elN) - masyvo IŠPJOVIMAS (IŠKIRPIMAS)
// from - nuo kurio elemento;
// count - kiek elementų;  Jeigu 'count' (antrasis) parametras nenurodytas, išpjaunamas visas masyvas;
// el1, el2, ... elN - bet koks kiekis elementų kurie bus įterpiami nuo 'from' ( pirmo ) parametro;
//    Jeigu nėra 3, 4, ..., N parametrų - nieko nebus įterpiama
let pilnaMasyvoIšpjova = skaičiųMasyvas.splice(0);
let pirmi2Elementai = objektųMasyvas.splice(0, 2);
let paskutiniai2Elementai = objektųMasyvas.splice(objektųMasyvas.length - 2);
let nuo2Iki4 = objektųMasyvas.splice(2, 2);
skaičiųMasyvas.slice(2, 1) // Vieno Elemento ištrinimas indeksu - 2 
skaičiųMasyvas.slice(2, 3) // Trijų Elemento ištrinimas pradedant indeksu - 2 (2, 3, 4)
skaičiųMasyvas.splice(0, 0, 4, 5, 6, 7) // Elementų pridėjimas į priekį
skaičiųMasyvas.splice(skaičiųMasyvas.length, 0, 4, 5, 6, 7) // Elementų pridėjimas į galą

// ----------------------------------------- Užduotys -----------------------------------------
// 1. Nusibraižykite ant lapo masyvo struktūros brėžinį ir pažymėkite kur yra indeksai, ir elementai.
// 2. Sukurkite masyvą su 5 mašinų objektais (be tarpinių mašinų kintamųjų) pavadinimu: 'cars'.
//    2.1 Mašinų objektai turi turėti savybes: brand, model, year, color.
// 3. Išimkite 2 paskutines mašinas iš masyvo galo. Naudojant arrayName.pop()
// 4. Išimtas mašinas įdėkite į masyvo priekį. Naudojant arrayName.unshift(... element(s) ...)
// 5. Išimkite 3 mašinas iš pasyvo priekio. Naudojant arrayName.shift()
// 6. Išimtas mašinas įdėkite į masyvo galą. Naudojant arrayName.push(... element(s) ...)
// 7. Nusibraižykite ant lapo skaičių masyvą; pažymėkite ką daro:
//    7.1 arrayName.push(... element(s) ...) 
//    7.2 let išGalo = arrayName.pop()
//    7.3 let išPriekio = arrayName.shift()
//    7.4 arrayName.unshift(... element(s) ...)
//    7.5 arrayName.length
// 8. Nusibraižykite ant lapo skaičių masyvą; pažymėkite ką daro:
//    8.1 let copy  = arrayName.slice(from, to);
//    8.2 let cut  = arrayName.splice(from, count);
//    8.3 arrayName.splice(from, 1);
//    8.4 arrayName.splice(from, 0, newEl1, newEl2);
// 9. Nusikopijuokite mašinų masyvą.
// 10. Išimkite 2 paskutines mašinas iš masyvo galo. Naudojant arrayName.splice(...)
// 11. Išimtas mašinas įdėkite į masyvo priekį. Naudojant arrayName.splice(...)
// 12. Išimkite 3 mašinas iš masyvo priekio. Naudojant arrayName.splice(...)
// 13. Išimtas mašinas įdėkite į masyvo galą. Naudojant arrayName.splice(...)
// 14. Susiskaičiuokite elementų kiekį ir išsaugokite kintamejame: 'length'
// 15. Suskaičiuokite vidurinio elemento indeksą ir išsaugokite kintamajame: 'indexMiddle'
//    15.1 Duotas pavyzdys skaičiuoti viduriniam elementui. Nusibraižykite ant lapo masyva
//    ir vizualiai pavaizduokite, ką daro formulė:
//        let indexMiddle = Math.ceil(length/2) - 1; Math.ceil('x') - apvalina 'x' į didesnę pusę
// 16. Iškirpkite masyvo dalį iki vidurinio elemento 
// 17. Nukopijuokite masyvo dalį nuo vidurinio elemento (įskaitant) iki galo
// 18. Suklijuokite iš 16. ir 17. užduotyje gautų masyvų naują masyva, apkeisdami vietomis pradžią su pabaiga
// 19. Džiaukitės

// 15.
arr = [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 5 }]
let indexMiddle = Math.ceil(arr.length / 2) - 1;
// 16.
let front = arr.splice(0, indexMiddle + 1); // Pridedame vieną, nes elementai skaičiuojami nuo 0
console.log('front', front);
// 17.
//    Iškirpus masyvo priekį, masyve sumažėja elementų ir 'indexMiddle' tampa nekorektiškas,
// todėl turime tai kompensuoti iš 'indexMiddle' atimdami iškirptų elementų skaičių
let back = arr.slice(indexMiddle - front.length + 1); // Pridedame vieną, nes elementai skaičiuojami nuo 0
console.log('back', back)
// 18.
let res = back.concat(front);
console.log(res);
// 19.
console.log('Džiaugiuosi');