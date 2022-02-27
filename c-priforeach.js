//1. Solving problems using array functions on rest countries data.

//c. Print the following details name, capital, flag using forEach function

const xhr=new XMLHttpRequest();

xhr.open("GET","https://restcountries.com/v3.1/all")
xhr.send()
xhr.onload=function()
{ 
    if (xhr.status==200)
    {
let c=JSON.parse(xhr.responseText)
c.forEach((g)=>{
    console.log("Name:" + g.name.official);
    console.log("Capital:" + g.capital);
    console.log("Flag:" + g.flags.svg);

})
}
else   
{ 
xhr.onerror=function()
{
    console.log("Not Found")
}}} 