// Atlikdami užduotis pernaudokite kintamuosius iš praeitų užduočių.
// Konsolėje prieš atlikdami užduotis išspausdinkite užduoties salygą.
// Kintamųjų pavadinimai - angliškai.
// 1. Sukurkite 2 Number kitamuosius ir juos sudėję išveskite į ekraną.
// 2. Sukurkite 3 Number kitamuosius ir juos sudauginę išveskite į ekraną.
// 3. Sukurkite 3 Number kitamuosius ir išsaugokite jų sumą ketvirtame kintamajame. Atspausdinkite jį konsolėje.
// 4. Sukurkite 3 Number kitamuosius ir išsaugokite jų sandaugą ketvirtame kintamajame. Atspausdinkite jį konsolėje.
// 5. Sukurkite 2 String kintamuosius, vardui ir pavardei. Sudėkite juos, su tarpu viduryje ir išsaugokite jį naujame kintamajame. Atspausdinkite.
// 6. Sukurkite knygos objektą su 4 savybėmis. Atspausdinkite visas knygos savybes eilute.
// 7. Sukurkite knygų masyvą ir išsaugokite jame 3 knygas su vienodu žanru.
// 8. Sukurkite dar 2 knygų masyvus, kaip nurodyta 7 užduotyje.
// 9. Sukurkite skyriaus objektą, kuris turėtų pavadinimą (žanrą) ir masyvą su jam priklausančiomis bent 3 knygomis.
// 10. 7 ir 8 užduotyje sukurtus knygų masyvus priskirkite skyriams.
// 11. Sukurkite objektą saugoti bibliotekos darbuotojui su 5 savybėmis. Ir sukurkite 4 darbuotojus.
// 12. Sukurtus darbuotojus 11 užduotyje išsaugokite masyve.
// 13. Suformuokite bibliotekos objektą su pavadinimu, adresu, darbuotojais(12) ir knygų skyriais(10). 

// pvz.:
console.log('x. Užduoties salyga ...');
// atlikimas
let a = 5;
let b = 7;
let c = -5, d = 5;
// rezultatų spausdinimas
console.log('Atsakymas');
console.log(''); // tuščia eilutė atskyrimui 

// Galutinio varianto struktūra
const library = {
  title: 'Saulėtekis biblioteka',
  address: 'Saulėtekio al. 17c',
  employees: [
    {
      name: 'Kęstas',
      surname: 'PodKęstas',
      sex: 'Vyras',
      salary: 720,
      position: 'Ūkvedys',
    },
    {
      name: 'Sandra',
      surname: 'Lėkštutė',
      sex: 'Moteris',
      salary: 840,
      position: 'Bibliotekininkė',
    },
    {
      name: 'Giedrius',
      surname: 'Paskaitinskas',
      sex: 'Vyras',
      salary: 1350,
      position: 'Direktorius',
    },
    {
      name: 'Severija',
      surname: 'Žiaurinienė',
      sex: 'Moteris',
      salary: 840,
      position: 'Administratorė',
    },
  ],
  sections: [
    {
      title: 'Grožinė literatūra',
      books: [
        {
          title: 'Peizažas',
          author: 'Motiejus Tolimauskas',
          year: '2002',
          genre: 'Grožinė litaratūra'
        },
        {
          title: 'Saulėlydis',
          author: 'Santanas Kurpavičius',
          year: '2001',
          genre: 'Grožinė litaratūra'
        },
        {
          title: 'Marijonetė',
          author: 'Teatrauskas Vaidenis',
          year: '2005',
          genre: 'Grožinė litaratūra'
        }
      ]
    },
    {
      title: 'Mokslinė literatūra',
      books: [
        {
          title: 'Kinematika',
          author: 'Skaitenis Kritauskas',
          year: '1998',
          genre: 'Mokslinė literatūra'
        },
        {
          title: 'Matematika',
          author: 'Skaičius Sandauga',
          year: '2001',
          genre: 'Mokslinė literatūra'
        },
        {
          title: 'Chemikalai',
          author: 'Chemstva Polimeraitė',
          year: '2005',
          genre: 'Mokslinė literatūra'
        }
      ]
    },
    {
      title: 'Autobiografinė literatūra',
      books: [
        {
          title: 'Gyvenimo sprendimas',
          author: 'Čilas Belenkauskas',
          year: '2002',
          genre: 'Autobiografinė literatūra'
        },
        {
          title: 'Erelė',
          author: 'Strėlė Lankauskaitė',
          year: '2017',
          genre: 'Autobiografinė literatūra'
        },
        {
          title: 'Keptuvės ir samčiai',
          author: 'Puodas Krosnelis',
          year: '2005',
          genre: 'Autobiografinė literatūra'
        }
      ]
    }
  ]
}
console.log(library);