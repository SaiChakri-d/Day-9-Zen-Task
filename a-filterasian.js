//1. Solving problems using array functions on rest countries data.

//a.Get all the countries from Asia continent /region using Filter function
const xhr=new XMLHttpRequest();

xhr.open("GET","https://restcountries.com/v3.1/all")
xhr.send()
xhr.onload=function()
{ 
    if (xhr.status==200)
    {
let c=JSON.parse(xhr.responseText)
c.filter((s)=>s.region==="Asia").map((e)=>{
console.log(e.name.official)})
}
else   
{ 
xhr.onerror=function()
{
    console.log("Not Found")
}}} 