const c = console.log.bind(document)
// const recenica = prompt("unesite neki string:")
// let brojac = 0
// let i = 0
// while (i <= recenica.length){
//     if (recenica[i] === "m" || recenica[i] === "M"){
//         brojac++
//     }
//     i++
// }
// console.log(brojac)



// let brojac2 = 0
// const recenica2 = prompt("Unesite neki string")
// for(let i = 0; i < recenica2.length;i++){
//     if (isNaN(recenica2[i])){
//         continue
//     }
//     else{
//         brojac2++
//     }
// }
// console.log(brojac2)




// let recenica = "Omare jesi li se spremio za test?"
// const duzina = recenica.length
// let recenica2 = ""
// for (i=0;i<duzina;i++){
//     if(recenica[i] !==" "){
//         recenica2 += recenica[i]
//     }
// }
// console.log(recenica2)



// let recenica = "Omare jesi li se spremio za test?"
// const duzina = recenica.length
// let recenica2 = ""
// let brojac = 0
// for (i=0;i<duzina;i++){
//     if(recenica[i]===" "){
//         recenica2 += recenica
//         brojac++
//     }
// }
// console.log(brojac)


let recenica = prompt("unesite neku recenicu")
let recenica2 = ""
for (i=0;i<recenica.length;i++){
    if (recenica[i] === "a" && recenica[i+1]=== "n"){
        recenica2 += "d"
    }else if (recenica[i]==="a"){
        recenica2 += "t"
    }else {
        recenica2 += recenica[i]
    }
}
console.log(recenica2)














