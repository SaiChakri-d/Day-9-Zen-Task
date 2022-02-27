//1. Solving problems using array functions on rest countries data.

//b. Get all the countries with a population of less than 2 lakhs using Filter function

const xhr=new XMLHttpRequest();

xhr.open("GET","https://restcountries.com/v3.1/all")
xhr.send()
xhr.onload=function()
{ 
    if (xhr.status==200)
    {
let c=JSON.parse(xhr.responseText)
c.filter((s)=>s.population<200000).map((e)=>{
console.log(e.population,e.name.official)})
}
else   
{ 
xhr.onerror=function()
{
    console.log("Not Found")
}}} 