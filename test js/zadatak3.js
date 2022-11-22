let recenica = "Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa"
recenica2 = ""
for (i=0;i<recenica.length;i++){
    if (recenica[i]=== "a" || "i"||"u"||"e"||"o"){
        recenica2 += recenica[i].toUpperCase
    }
}
console.log(recenica2 + ".")