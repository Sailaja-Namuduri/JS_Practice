var city=["Delhi","Mumbai","Pune","London","Helsinki","Amsterdam","Venice","Paris"]
var b;
//b=city[0]+","+city[1]+"'"+city[2]+","+city[3]+","+city[4]+","+city[5]+","+city[6]+","+city[7]+","
//console.log(b)

for(i=0;i<city.length;i++)
{
    if(i==0)
        b=city[i]
    else
        b=b+","+city[i]
}
console.log(b)