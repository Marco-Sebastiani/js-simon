// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla
// volta i numeri che ha visto precedentemente. Dopo che
// sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati

//QUI POPOLO L'ARRAY CON LA FUNZIONE GENERA RANDOM
var numeriRandom = popolaArray();

//QUI FACCIO COMPARIRE I NUMERI ALL'UTENTE CON UN ALERT
alert('REGOLE DEl GIOCO \n' + 'MEMORIZZATI QUESTI NUMERI \n' + '\n' + numeriRandom);

console.log(numeriRandom);


setTimeout(game, 10000);

//********FUNZIONI********

function generaRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function popolaArray(){
    var memoryNumbers = [];
    while (memoryNumbers.length < 5 ){
        var number = generaRandom(1,100);
        if(memoryNumbers.includes(number) == false){
            memoryNumbers.push(number);
        }   
    }
    return  memoryNumbers;
}

function game(){
        //QUI CON UN CICLO CONTROLLO SE I NUMERI DELL'UTENTE SONO GIA' PRESENTI E SE SONO GIUSTI
    var userNumber = [];
    var correctNumbers = [];
    var wrongNumbers = [];

    for(var i = 0; i < 5; i++){
        var user = parseInt(prompt('inserisi i numeri visti'));
        if( userNumber.includes(user) == false){
            userNumber.push(user);
            if(numeriRandom.includes(user)){
                correctNumbers.push(user);
            } else{
            wrongNumbers.push(user)
            }     
        }

    }

    document.write(userNumber + ' numeri inseriti' + '<br>');
    document.write(correctNumbers + ' numeri indovinati' + '<br>');
    document.write(wrongNumbers + ' numeri sbabliati');
}



