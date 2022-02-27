//1. Solving problems using array functions on rest countries data.

//e. Print the country which uses US Dollars as currency.

const xhr=new XMLHttpRequest();

xhr.open("GET","https://restcountries.com/v3.1/all")
xhr.send()

xhr.onload=function()
{
    if(xhr.status==200)
    {
        let c=JSON.parse(xhr.responseText)
        c.filter((u)=> u.currencies)
        .filter((u)=> u.currencies.USD)
        .map((u)=>{    
        console.log(u.name.official)

         })

    }
else{
xhr.onerror=function(){
    console.log("Not Found")
}
}} 
