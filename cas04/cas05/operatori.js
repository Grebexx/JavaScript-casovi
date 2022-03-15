// SPREAD OPERATOR

function F(...niz){

}

F(4);
F(5,6,7);


function Suma(...brojevi){
    var suma = 0;
brojevi.forEach(
    function(value){
        suma += value;
    }
)
    return suma;
}