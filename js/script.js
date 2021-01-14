// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla
// volta i numeri che ha visto precedentemente. Dopo che
// sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati

var memoryNumbers = [];


while (memoryNumbers.length < 5 ){
    var number = generaRandom(1,100);
    if(memoryNumbers.includes(number) == false){
        memoryNumbers.push(number);
    }   
}

alert(memoryNumbers);


//********FUNZIONI********


function generaRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}




function ciao(){

}
