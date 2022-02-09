var niz = [4,5,6,'g',5.6,{},-6];
3 == NaN
typeof(4)
typeof('5')
typeof({})
typeof(4.5)
if(typeof(4) == 'number')
    console.log("jeste broj")

    for (el of niz)
       if(typeof(el) == 'number')
            console.log(el)

niz = [4,5,6,7,5,6,7,2,4,32,1,4,7,0]
niz = [4,5,6,7,0,5,6,7,2,4,32,1,4,7,0]

for(i = 0 ; i < niz.length ; i++)
    if(niz[i-1 < niz[i]])
       console.log(niz[i])