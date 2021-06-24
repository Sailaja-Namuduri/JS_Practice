console.log("Hi")
    Output:"Hi"

var a=alert("is it Okay to leave the page?")
console.log(a)

Output::undefined

var a=prompt("enter first value")
var b=prompt("enter second value")
var c=a+b
console.log(c)

input as 1 and 2 takes as String, So

Output:: 12

if you want output as 3 , you have to use number()

var a=prompt("enter first value")
var b=prompt("enter second value")
var c=Number(a)+Number(b)
console.log(c)

Output:3

var a=confirm("Do you want to exit")
console.log (a)

Click on Ok gives ,Output:  true
Click on cancel gives, Output: fasle

var a=prompt("1st item cost:")
var b=prompt("2nd item cost:")
var c=prompt("3rd item cost:")
var d=Number(a)+Number(b)+Number(c)
console.log(`Total bill is ${d}`)

Total bill is 60