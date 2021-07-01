var city=["Delhi","Mumbai","Pune","London","Helsinki"]

typeof(city)
"object"

city.length
5

city[0]
"Delhi"

city[city.length-1]
"Helsinki"

//PUSH:: add element at the end of the array
city.push("Amsterdam")
6

//POP:: removes element at the end of array

city.pop("Delhi")
"Amsterdam"

city
(5) ["Delhi", "Mumbai", "Pune", "London", "Helsinki"]

city.pop(2)
"Helsinki"//Still it removes last element instead of index number you have mentioned

city
(4) ["Delhi", "Mumbai", "Pune", "London"]

city.pop(20000)
"London"

city
(3) ["Delhi", "Mumbai", "Pune"]

city.unshift('Nice')//UNSHIFT:: add the value at starting point of the array
4
city
(4) ["Nice", "Delhi", "Mumbai", "Pune"]

city[0]
"Nice"

city.shift()//SHIFT::removes the element at the starting of the array
"Nice"

city
(3) ["Delhi", "Mumbai", "Pune"]
