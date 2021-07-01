var city=["Delhi","Mumbai","Pune","London","Helsinki","Amsterdam","Venice","Paris"]

//TASK::REMOVE "Pune","London" and i want to insert there India

city.splice(2,2,"India")//(start index, delete count,insert text)
(2) ["Pune", "London"]//Elements removed
city//Modified city with India
(7) ["Delhi", "Mumbai", "India", "Helsinki", "Amsterdam", "Venice", "Paris"]

//TASK::I want to delete India,and no insertion

city.splice(2,1)
["Pallamkurru"]   //REMOVED
city
(6) ["Delhi", "Mumbai", "Helsinki", "Amsterdam", "Venice", "Paris"]

//TASK:: NO deletion only inserting the values,insert at 2 index

city.splice(2,0,"Pune","Agra")
[]
city
(8) ["Delhi", "Mumbai", "Pune", "Agra", "Helsinki", "Amsterdam", "Venice", "Paris"]

//TASK:: on index 4 remove 1 value and add 1 value

city.splice(4,1,"Poland")
["Helsinki"]

city
(8) ["Delhi", "Mumbai", "Pune", "Agra", "Poland", "Amsterdam", "Venice", "Paris"]

