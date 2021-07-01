var a=['a','b','c','d',1]
var b=[4,3,2,1]
a+b
"a,b,c,d,14,3,2,1"    //combine two arrays but last element in the first array and first element inthe second array arenot comma seperated

a.concat(b)
(9) ["a", "b", "c", "d", 1, 4, 3, 2, 1]

b.concat(a)
(9) [4, 3, 2, 1, "a", "b", "c", "d", 1]

var c=[4,true]
a.concat(b,c)

(11) ["a", "b", "c", "d", 1, 4, 3, 2, 1, 4, true]