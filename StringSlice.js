var city="aMsterDAm"
var sliced=city.slice(1)
console.log(sliced)

Output:  MsterDAm

var sliced=city.slice(2)
console.log(sliced)
VM652:2 sterDAm

var sliced=city.slice(4)
console.log(sliced)
VM652:2 erDAm

city.charAt(0).toUpperCase()
"A"

city.slice(1).toUpperCase()
"MSTERDAM"

city.slice(2,5)   // A m s t e r d a m
"ste"

city.slice(-1)
"m"

city.slice(-2)
"Am"

city.slice(-3)
"DAm"

city.slice(-4,-1)
"rDA"

city.slice(-1,-4)
""

city.slice(3,-1)
"terDA"

city.slice(-1,3)
""
city.slice(0,3)
"Ams"
city.slice(-9,3)
"aMs"