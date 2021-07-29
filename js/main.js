// funzione random 5 numeri
function rnd5() {
    var  vet5 =[];
    for( var i = 0; i<5; i++){
        
        var num =Math.floor(Math.random() * 20) + 1;
        vet5.push(num);
    }
    return vet5;
}
// funzione che prende il vettore random e il vettore dell utente e vede se ci sono i numeri dell utente
function controllo (vettore_giusto, vettore_utente){
    var vettore_finale= [];
    for (var i= 0 ; i < vettore_giusto.length; i++ ){
        for (var j = 0; j < vettore_utente.length; j++){
            if (vettore_utente[j] == vettore_giusto[i]){
                vettore_finale.push(vettore_utente[j]);
            }
        }

    }
    return [vettore_finale, vettore_finale.length];
}
// funzione per far inserire all utente i numeri
function inserire_numeri(){
    var mio_vettore=[];
    for(i= 0; i<5; i++){
        mio_vettore.push(parseInt(prompt('inserisci numero')));
    }
    return mio_vettore;
}


var a = rnd5();
alert(a);
console.log(a);
setTimeout(gioco, 30000);
function gioco(){
    var b = inserire_numeri();
    console.log(controllo(a,b));
}

// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto prec

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Bonus:
// Introdurre la parte di grafica oltre a quella di logica :occhiolino:
