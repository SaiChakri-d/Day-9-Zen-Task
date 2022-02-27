//1. Solving problems using array functions on rest countries data.

//d. Print the total population of countries using reduce function

const xhr=new XMLHttpRequest();

xhr.open("GET","https://restcountries.com/v3.1/all")
xhr.send()
xhr.onload=function()
{ 
    if (xhr.status==200)
    {
let c=JSON.parse(xhr.responseText)
b=c.reduce((a,{ population: p})=> a+=p,0)
console.log(b);
    }
else   
{ 
xhr.onerror=function()
{
    console.log("Not Found")
}}} 

