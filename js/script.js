// Descrizione:
// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire,
// uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// richiamo la funzione per generare numeri random da 1 a 100 e 5 di loro sono in un arrey
let numberToRemeb = randomNumGenerate(1 , 100);
console.log(numberToRemeb)
// mi stampo i numerida ricordare con un laetr
alert('Questi sono i numeri da ricordare: '+numberToRemeb)

// Alexa timer 30 secondi 
setTimeout(startGame, 30000);

// richiamo la funzione al termine dei 30 secondi 
function startGame(){
    // creo un arrei per inserire i numeri dell'utente
    arrayUser = []
    // per 5 volte chiedo all'utente di darmi un numero 
    for( let i = 0; i < 5; i++){
        let userNumber = parseInt(prompt('Indovina i 5 numeri'))
        // se il numero inserito è incluso nell'arrey dei numeri da indovinare lo inserisco in un arrey
        if(numberToRemeb.includes(userNumber)){
            arrayUser.push(userNumber)
            console.log(arrayUser)
        }
    }

    // stampo con un alert quanti numeri sono stati indovinati e quali
    alert(`Ne hai presi ${arrayUser.length} i numeri azzeccati sono: ${arrayUser}` )    
}

// FUNZIONI

function randomNumGenerate( minRange, maxRange) {
    // creo arrey
    const numArrey = [];     
    while(numArrey.length < 5){
        // richiamo la funzione per generare numeri 
      let randomNum = numGen(minRange, maxRange)
      // controlla se quel numero è stato già inserito in bombsArrey
      if(!numArrey.includes(randomNum)){
        numArrey.push(randomNum)
      }
    }
    return numArrey;
  }

// funzione per generare numeri random 
function numGen(min, max) {  
 return Math.floor(Math.random() * (max - min + 1) ) + min;
 }