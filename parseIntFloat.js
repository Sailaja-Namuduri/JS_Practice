var a="10"
console.log(typeof(a))
var b=parseInt(a)
console.log(typeof(b))

Output: String
        Number

//ES5

var a="10.90"
var b="45.9"
var c=parseInt(a)+parseInt(b)
console.log(c)
var d=parseFloat(a)+parseFloat(b)
console.log(d)

Output: 55
        56.8

//es6
var a="10.90"
var b="45.9"
var c=Number(a)+Number(b)
console.log(c)
Output:56.8

var a="10"
var b="20"
var c=Number(a)+Number(b)
console.log(c)
Output:30

var a="Delhi10"
parseInt(a)
Output:NaN

var a="10Delhi"
parseInt(a)
Output:10

var a="10Delhi90"
parseInt(a)
Output:10

var a="Delhi10"
typeof(parseInt(a))
"number"
