var a=12
if(a%2==0)
{
    console.log(`Number ${a} is even`)
}
else
{
    console.log(`Number ${a} is odd`)
}

Output: Number 12 is even

var name1="Aakash"
if(name1=="Priya")
{
    console.log(`Hi ${name1} you are admin`)
}
else{
    console.log(`Hi ${name1} you are user`)
}

Output::Hi Aakash you are user

var role="Admin"
var name2="John"
if(role=="Admin")
{
    if(name=="Aakash")
    {
        console.log(`Hi ${name2} you are not a admin`)
    }
    else if(name2=="John")
    {
        console.log(`Hi ${name2} you are admin`)
    }
    else
        console.log(`Hi ${name2} you are unkonwn`)
}
else if(role=="user")
{
    if(name2=="Aakash")
    {
        console.log(`User is ${name2}`)
    }
    else
        console.log(`user is new user`)
}

Output::Hi John you are admin