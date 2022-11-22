const c = console.log.bind(document)
let recenica = "Danas cemo raditi neke operacije sa stringovima"
// c(recenica)
let Omar="Omar"

// pristupanje nekom karakteru stringa se vrsi preko indexa.
// INDEKSIRANJE IDE OD 0.
// U SVAKOM ITERIRAJUCEM OBJEKTU, POSLEDJI KARAKTER IMA INDEX:
// (UKUPNA DUZINA STRINGA)-1
c(Omar[2])


// Metoda za dobijanje ukupne duzine stringa je lenght:
let duzinaRecenice = recenica.length
c(duzinaRecenice)

// Primer. Svaki karakter neke recenice neka se ispise jedan ispod drugog.

// Kod ovakvih zadataka iterator predstavlja index pomocu kojeg pristupamo karakteru stringa