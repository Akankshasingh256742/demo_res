/*function square(a){
    return a*a;
}

function cube(a){
    return a*a*a;
}

function sumofsomething(a,b,fn,fn2){ //callback function
    let val1=fn(a);
    let val2=fn2(b);
    return val1+val2;
}

console.log(sumofsomething(2,3,square,cube))
let a=3;
let b=5;
function printingsomething(){
    console.log(sumofsomething(a,b,square,cube))
}
*/
//ASYNCHRONOUS FUNCTION

/*setTimeout(printingsomething,100)

console.log("welcome");*/
/*setTimeout(myFunction, 1000);

function myFunction() {
  let d = new Date();
  console.log(
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds());
}
console.log("hello there")

const fs = require("fs");
fs.readFile("a.txt","utf-8",function(err, data){
    console.log(data);
})*/

/*function promisefied(){
    let p=new Promise(function(resolve){
        
        setTimeout(function(){
            let i;
            for(i=0;i<=10;i++){
                i=i+10;
           } resolve()
        },1000)
    })
    return p;
}

promisefied().then(function(){
    console.log("hi there")
})
*/
/*const fs=require("fs");
function promisify() {
    let p=new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        })
    })
    return p;
}

promisify().then(function(data){
   console.log(data)
})*/

