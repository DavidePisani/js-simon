// Descrizione:
// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire,
// uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.


alert('test')















function randomBombsGenerate(numBomb, minRange, maxRange) {

    // creo arrey
    const bombArrey = [];
     
    while(bombArrey.length < numBomb){
        // richiamo la funzione per generare numeri 
      let randomBombs = bombsGen(minRange, maxRange)
      // controlla se quel numero è stato già inserito in bombsArrey
      if(!bombArrey.includes(randomBombs)){
        bombArrey.push(randomBombs)
      }
    }
    return bombArrey;
  }

// funzione per generare numeri random 
function bombsGen(min, max) {  
 return Math.floor(Math.random() * (max - min + 1) ) + min;
 }