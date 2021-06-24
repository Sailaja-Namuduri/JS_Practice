//Suppose if you open a url: https://google.com

localStorage.setItem('token name','3646')

//if you close the browser and re-opened , and you opened the same url , then the token created is still there, until you manually delete that token,life long it will be there only
localStorage.getItem('token name')
//if you want to remove

localStorage.removeItem('token name')

//SESSION STORAGE

sessionStorage.setItem("myName","test store")

sessionStorage.getItem("myName")

