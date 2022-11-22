// const n= +prompt("unesite neki broj;")
// let brojac = 0
// let suma = 0


// for (let broj=1; broj <= n; broj++){
//     if(broj %5===0){
//         brojac++
//         suma += broj
//     }
// }
// console.log("Ukupno ima " + brojac + " brojeva koji su deljivi sa 5,\na njihova suma je " + suma +"." )


// for (let broj= 99;broj>= -99;broj--){
//     if(broj%4===0){
//         console.log(broj + 14)
//     }
// }


// let iterator = 99
// while(iterator > -100) {
//     if (iterator % 4 === 0){
//         console.log(iterator + 14)
//     }
//     iterator--
// }


// let n=0
// let m=0
// for (broj=3;broj<=17;broj=broj+3){
//     if(broj%3===0){
//         n++
//         m += broj
//     }
// }
// console.log(m/n)





// const d = +prompt("unesite duzinu terena 90-120")
// const s = +prompt("unesite sirinu terena 45-90")
// const r = +prompt("unesite rastojanje ograde i terena 2-10")

// if (isNan(d) || isNan(s) || isNan(r)){
//     console.log("unete vrednosti moraju biti brojevi")
// }else if(d<90 || d>120){
//     console.log("duzina terena mora biti izmedju 90-120")
// }else if(s<45 || s>90){
//     console.log("sirina terena mora biti izmedju 45-90")
// }else if(r<2 || r>10){
//         console.log("rastojanje  mora biti izmedju 2-10")
// }
// console.log("obim ograde " + (d*2+s*2) + 8*r )




// const br1= +prompt("unesite prvi broj")
// const br2= +prompt("unesite drugi broj")
// const suma = 0
// const brojac = 0
// if (br1===m){
//     console.log("uneti brojevi moraju biti razliciti")
// }
// if (br1>br2){
//     while(br2<=br1){
//         if(br2%5===0){
//             brojac++
//             suma += br2
//         }
//         br2++
//     }
//     console.log("Aritmeticka sredina brojeva,od broja " + m + "do broja "+ n +"iznosi " +suma/brojac)
// }else if(br2>br1){
//     while(br1<=br2){
//         if(br1%5===0){
//             brojac++
//             suma += br1
//         }
//         br1++
//     }
//     console.log("Aritmeticka sredina brojeva,od broja " + br1 + "do broja "+ br2 +"iznosi " +suma/brojac)
// }



let broj = +prompt("Unesite neki broj iz intervala [12,16)")
const brojZaPrikaz = broj

for (broj;broj>=1;broj--){
    console.log(broj)
    console.log(broj**2)
    console.log(broj-25)
}
