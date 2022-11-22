// KONDICIONALI //

//if (uslov1) {
//    // kod za izvrsavanje u slucaju ispunjenja prvog uslova
//} else if (uslov2) {
//    // kod za izvrsavanje u slucaju ispunjenja drugog uslova
//} else {
//    // kod za izvrsavanje u slucaju ne ispunjenja uslova
//}


// Ako je broj godina unet od strane korisnika > ili == 18 neka se ispise poruka punoletni ste,
// u suprotnom maloletni ste
//const godine = Number(prompt("Unesite broj godina: "))
// if (godine >= 18) {
//     console.log("punoletni ste")}
// else if (godine < 0) {
//     console.log("ti mislis ja sam glup")}
// else if(godine < 18) {
//     console.log("maloletni ste")}
// else {
//     console.log("niste uneli godine")
// }

// if (godine >= 12 && godine <18) {
//     console.log("vi ste maloletni")
// }
// else if(godine<0){
//     console.log("jbs")
// }
// else if(godine <12){
//     console.log("Vi ste decijeg doba")
// }
// else if (godine >= 18 && godine < 40){
//     console.log("vi ste punoletna osoba")
// }
// else if(godine >= 40){
//     console.log("Vi ste zrela osoba")
// }
// else {
//     console.log("niste uneli broj godina")
// }


// Switch naredba 
// sintaksa
// switch (izraz) {
//     case x:
//         // Blok koda koji se izvrsava u slucaju da je izraz = x
//         break;
//         // break se ne sme izostaviti jer bi se izvrsio kod narednog slucaja sto svakako nije nesto sto zelimo da se desi.
//     case y:
//         // Blok koda koji se izvrsava u slucaju da je izraz = y
//         break;
//     case z:
//         // Blok koda koji se izvrsava u slucaju da je izraz = z
//         break;
//     default:
//         // Blok koda koji se izvrsava u slucaju da izraz nije jednak ni x, ni y, ni z
// }

// const broj = +prompt("Unesite broj izmedju 12 i 15: ")

// switch (broj) {
//     case 12:
//         console.log("Korisnik je uneo broj 12")
//         break;
//     case 13:
//         console.log("Korisnik je uneo broj 13")
//         break;
//     case 14:
//         console.log("Korisnik je uneo broj 14")
//         break;
//     case 15:
//         console.log("Korisnik je uneo broj 15")
//         break;
//     default:
//         console.log("Korisnik nije udeo trazeni broj")
// }


// DOMACI //

// 1.

// const broj1= +prompt("Unesite broj : ")
// const broj2= +prompt("Unesite broj : ")

// if (broj1 === broj2) {
//     console.log(broj1 * broj2)
//     console.log("povrsina kvadrata ")
// } else {
//     console.log(broj1 * broj2)
//     console.log("povrsina pravougaonika")
// }

// 2.

// const x= +prompt(" unesite x:")
// const y= +prompt(" unesite y:")
// if (y!==0){
//     console.log(x/y)
// }
// else{
//         console.log("Deljenje je ne moguce")
//     }



const c = console.log.bind(document)


// if (x>0){
//     c("x>0")
// }
// else if(x>0 && x<5) {
//     c("x je izmedju 0 i 5")
// }