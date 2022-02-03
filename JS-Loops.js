
// Napisati javascript snippet code koji :
// 1. Ispisuje prosledjeni niz brojeva jedan ispod drugog.
var k = [3, 4, 5, 6, 7, 8];
for(i of k){
    console.log(i);
}

// 2. Od prosledjenjog niza brojeva ispisuje samo parne
var k = [3, 4, 5, 6, 7, 8];
for(i of k){
    if(i % 2 != 0){
        continue;
    }
    else{
        console.log(i);
    }
}

// 3. Racuna sumu prosledjenog niza
var sum = 0;
var array = [3, 4, 5, 6, 7, 8]
for(i = 0 ; i < niz.length ; i++){
    suma += niz[i];
}
console.log(suma);




