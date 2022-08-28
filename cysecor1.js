// let a = 6
// let b = 8

// if (a > b) {
//     console.log(a + " je vece od : " + b);
// }else{
//     console.log( b + " je vece od : " + a);
// }

// let mesec = 13

// switch(mesec){

//     case 1:
//         console.log("Januar");
//         break
//     case 2:
//         console.log("Februar");
//         break
//     case 3:
//         console.log("Mart"); 
//         break  
//     case 4:
//         console.log("April");
//         break 
//     case 5:
//         console.log("Maj");
//         break
//     case 6:
//         console.log("Jun");
//         break
//     case 7:
//         console.log("Jul"); 
//         break  
//     case 8:
//         console.log("Avgust");
//         break
//     case 9:
//         console.log("Septembar");
//         break
//     case 10:
//         console.log("Oktobar");
//         break
//     case 11:
//         console.log("Novembar"); 
//         break  
//     case 12:
//         console.log("Decembar");
//         break                           
// }

// let novcanice = [10, 5, 20, 50, 100, 5, 20, 10, 5, 10];
// let brojNovcanica = novcanice.length

// // let novcanica = 44
// // let vrednostNovcanice = 10 
// let brojac = 0
// let izbrojaneNovcanice = 0

// while (izbrojaneNovcanice < brojNovcanica) {
//     izbrojaneNovcanice++
            
// }
// console.log(izbrojaneNovcanice);

//             WHILE PETLJA   


// let novcanice = [10, 5, 20, 50, 100, 5, 20, 10, 5, 10];
// let brojNovcanica = novcanice.length
// let brojac = 0
// while (brojac < brojNovcanica) {
//     console.log('-----------------------------------');
//     console.log('Uslov je prosao')
//     console.log(`Novcanica na poziciji [${brojac}] je :  ${novcanice[brojac]}`);
//     brojac++
// }

// console.log(" ~~~ KRAJ PETLJE ~~~~   ");

// if(brojac < brojNovcanica){
//     console.log("BROJAC JE MANJI OD BROJA NOVCANICA");
// }   else{
//     console.log("BROJAC JE VECI OD BROJA NOOVCANICA");
// }


//            ~~  FOR PETLJA 

//  let novcanice = [10, 5, 20, 50, 100, 5, 20, 10, 5, 10];
//  let suma = 0

// for (let i = 0; i < novcanice.length; i++) {
//     console.log(novcanice[i]);

//     suma += novcanice[i]
// }
// console.log("Ukupno imamo  " + suma + "  eura");



///  FOR PETLJA INN



// let novcanice = [10, 5, 20, 50, 100, 5, 20, 10, 5, 10];


// for (let i in novcanice) {
//     console.log(i);
//     console.log(novcanice[i]);
//     console.log("----------------------");
// }

// for(let i of novcanice){
//     console.log(i);
// }

// novcanice.forEach(function(i){
//     console.log(i);
// })


//           ~~~  OBJEKTII ~~~~

// let automobili = {
//     audi: ['70000','2017','Q7'],
//     bmw:  ['50000','2018','330D'],
//     porsche: ['60000','2016','Boxter'],
//     mercedes: ['100000','2019','S400']
// };
// for(let automobil in automobili){
//     let podatciOvozilu = automobili[automobil]
//     let naziv = automobil
//     // console.log(naziv);
//     // console.log(podatciOvozilu);

//     // console.log(`${naziv} model : ${podatciOvozilu}`);
//     console.log(`${naziv} - model : ${podatciOvozilu[2]}, 
//     cena : ${podatciOvozilu[0]} eura  , 
//     godiste : ${podatciOvozilu[1]} `);
// }
// console.log(automobili.audi);


//                              ~~~~~~FUNKCIJE~~~~~~~~~



// let nekretnine = {
//     stan : 70000,
//     kuca : 150000,
//     plac : 30000
// }

// let godine = 10
// let meseci = godine * 12
// let rata = nekretnine.stan / meseci
// rata = rata.toFixed(2)

// console.log(meseci);
// console.log(rata);
// console.log(`Mesecna rata za stan isnosi : ${rata} na ${meseci} meseci`);
// console.log(`--------------------------------------------------------------`);

// //    PLAC

// godine = 5
// meseci = godine * 12
// rata = nekretnine.plac / meseci
// rata = rata.toFixed(2)

// console.log(`Mesecna rata za plac isnosi : ${rata} na ${meseci} meseci`);
// console.log(`--------------------------------------------------------------`);


// //   KUCA


// godine = 15
// meseci = godine * 12
// rata = nekretnine.kuca / meseci
// rata = rata.toFixed(2)

// console.log(`Mesecna rata za KUCU isnosi : ${rata} na ${meseci} meseci`);



  //  ova funkcija izracunava ratu za odredjene nekretnine na odredjeni broj godina - meseci..!!
// let nekretnine = {
//     stan : 70000,
//     kuca : 150000,
//     plac : 30000
// }
// function racunanje_mesecne_rate(godine, vrsta_nekretnine){
//     let meseci = godine * 12
//     let rata = nekretnine[vrsta_nekretnine] / meseci
//     rata = rata.toFixed(2)


//     console.log(`Mesecna rata za ${vrsta_nekretnine} isnosi : ${rata} eura na ${meseci} meseci, tj ${godine}. godina.`);    


// }
// racunanje_mesecne_rate(5 , 'plac')
// racunanje_mesecne_rate(10 , 'stan')
// racunanje_mesecne_rate(15 , 'kuca')


// let brend = document.getElementsByTagName('span')

// // console.log(brend[0].innerText);
// // console.log(brend[1].innerText);
// // console.log(brend[2].innerText);
// for (let auto of brend){
//   console.log(auto.innerHTML);
// } 

// console.log('---------------------------------------');

// let modeli = document.getElementsByClassName("automobil-model")

// for (let model of modeli){
//   console.log(model.innerHTML);
// } 
// let najbolji = document.getElementById("recenica")
// console.log(najbolji.innerText);
// console.log('------------------------------------');

let brend = document.querySelectorAll('span')
for (let auto of brend){
  console.log(auto.innerHTML);
} 
console.log('==========================================');

let modeli = document.querySelectorAll('.automobil-model')
 for (let model of modeli){
   console.log(model.innerHTML);
} 

console.log('----------------------------------------');

let recenica = document.querySelector("#recenica")
console.log(recenica.innerHTML);