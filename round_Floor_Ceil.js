var a=5678.890

Math.round(a)              // .1 to .49 output :5678

Output: 5679              //.50 to .99 output:5679

var b=5678.49
Math.round(b)

Output:5678

//floor .01 to .99  anything it will not consider decimal number 

var c=5678.89
Math.floor(c)

5678

var c=5678.99
Math.floor(c)

5678

var c=5678.01
Math.floor(c)

5678

//ceil() .anything whether it is .01 or .99 anything it will add by 1

var d=5678.89
Math.ceil(d)

5679
var d=5678.01
Math.ceil(d)
56709