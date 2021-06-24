var url="https://github.com/Akashdeveloper/April-React-Evng"

var out=url.split('/')

console.log(out)

Output:: (5) ["https:", "", "github.com", "Akashdeveloper", "April-React-Evng"]

var ou1 =out[out.length-1]
console.log(ou1)

Output:: April-React-Evng

var a="Javascript"

var ou2=a.split('')
console.log(ou2)

Output::(10) ["J", "a", "v", "a", "s", "c", "r", "i", "p", "t"]

console.log(ou2[8])
"p"

var ou3=ou2.toString()

Output:"J,a,v,a,s,c,r,i,p,t"

var ou4=ou3.replace(/,/g,'')
console.log(ou4)

Output:"Javascript"
