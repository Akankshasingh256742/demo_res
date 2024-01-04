//STRING
/* let str=" hey you! ";
console.log(str[2]);
str=str.toUpperCase();
str=str.trim();
str=str.slice(0,6);
let str2="u!";
str=str.replace(" ","Y")
str=str.replaceAll("Y",str2)
str="hey you!"
str=str.split("");
console.log(str.length);*/

//ARRAY
/*
let arr1 = [1,2,3,4]
let arr2 =[5,6,7,8]
arr1.push(5,6);
arr1.pop();
arr1.pop();
arr1.unshift(-1,0);
arr1.shift();
arr1=arr1.concat(arr2)
console.log(arr1)

function logthings(){
    console.log("hello");
}

arr1.forEach(logthings);*/

//CLASS

/*class animal{
    constructor(name,legcount){
        this.name=name;
        this.legcount=legcount;
    }
    static walk(){
        console.log("animal can walk");
    }
    describe(){
        return `${this.name} has ${this.legcount} legs.`
    }
}

let dog = new animal("dog",4);
console.log(dog.describe());
animal.walk();*/

/*class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    age(){
        return `${this.year}`
    }
}

const mycar = new car("ford",14);
//console.log(`${mycar.name} is ${mycar.age()} year old`)
console.log(mycar)*/

//DATES IN JAVASCRIPT

/*const a=new Date();
let m= a.getFullYear();
let month=a.getMonth();
let Second=a.getSeconds();
let Totaltime=a.getTime();

console.log(`Year: ${m}`);
console.log(`Month: ${month+1}`);
console.log(`Second: ${Second}`);
console.log(`time: ${Totaltime}`);

a.setFullYear(2014)
console.log(a)

const d= new Date();
const beforetime = d.getTime();
console.log(beforetime)
let a=7;
let sum=1;
for(i=1;i<=100000000;i++){
sum = sum + a*i;
sum++;
a++;
}
const  aftertime=d.getTime();
console.log(aftertime)
let m=aftertime-beforetime;
console.log(m)*/

//JSON

/*let json ='{"value1":"key1","value2":"key2" }'
let obj = JSON.parse(json);
console.log(obj);
let json2= JSON.stringify(obj);
console.log(json2);
*/

//IS ANAGRAM
/*function isAnagram(str1, str2) {
    let n=str1.length;
    let m=str2.length;
    if(n!=m){
     return false;
    }
    let arr1=str1.split("");
    let arr2=str2.split("");
    arr1.sort();
    arr2.sort();
    for(let i=0;i<n;i++){
     if(arr1[i]==arr2[i]){
       return true;
     }
     else{
       return false;
     }
    }
}

let str1="openai";
let str2="aiopen";
console.log(isAnagram(str1,str2));*/

/*let transactions = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        timestamp: 1656259600000,
        price: 20,
        category: 'Food',
        itemName: 'Burger',
    },
    {
        id: 3,
        timestamp: 1656019200000,
        price: 15,
        category: 'Clothing',
        itemName: 'T-Shirt',
    },
    {
        id: 4,
        timestamp: 1656364800000,
        price: 30,
        category: 'Electronics',
        itemName: 'Headphones',
    },
    {
        id: 5,
        timestamp: 1656105600000,
        price: 25,
        category: 'Clothing',
        itemName: 'Jeans',
    },
];

function calculateTotalSpentByCategory(transactions) {
    let arr=[];
   for(let i=0;i<transactions.length;i++){
     for(let j=i+1;j<transactions.length;j++){
       let value = 0;
       let k;
        
       if(transactions[i].category==transactions[j].category){
                value =transactions[i].price + transactions[j].price;
                let arr2=[];
                arr2.push(`category: ${transactions[i].category}`)
                arr2.push(`totalSpent: ${value}`)
                arr.push(arr2);
               }else{
                 let arr2=[];
                 arr2.push(`category: ${transactions[i].category}`)
                 arr2.push(`totalSpent: ${transactions[i].price}`)
                 arr.push(arr2);
               }
     }
   }
   return arr;
 }
 

 let m = calculateTotalSpentByCategory(transactions);
 console.log(m);*/

 /*function isPalindrome(str) {
    str=str.split(" ").join('')
    
     let arr=str.split("");
     
     let m=false;
     let j=arr.length-1;
     for(let i=0;i<arr.length/2;i++){
        if(arr[i]==arr[j]){
            m=true;
            j--;
        }else{
            m=false;
            break;
        }
     }
     return m;
  }
  
  let str='hello';
  console.log(isPalindrome(str));*/

  /*function calculateTime(n) {
    let sum=0;
    let d=new Date();
    let beforetime=d.getTime()
    for(i=1;i<=n;i++){
       sum=sum+i;
    }
    let m=new Date();
    let aftertime=m.getTime()

    return aftertime-beforetime;
}
let n=100;
console.log(calculateTime(n))*/
/*class Calculator {
    constructor(result){
      this.result=0;
    }
    add(n) {
        
        this.result = this.result + n;
         return this.result;
    }
    substract(n){
        this.result=this.result - n
        return this.result;
    }
    multiply(n){
        this.result=this.result * n
        return this.result;
    }
    divide(n){
        this.result=this.result / n
        return this.result;
    }

    clear(n){
        this.result=0;
        return this.result;
    }
    getResult(n){
        return this.result;
    }
    calculate(n){
        

    }

}
let cal=new Calculator;
console.log(cal.add(5));
let m = '2+3+6'
let k=parseInt(m);
console.log(m);*/

/*function gettime(){
    let d= new Date();
    console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)
    let count=1;
}
let count=1000;
for(let i=0;i<=20;i++){
setTimeout(gettime,count);
count=count+1000;
}*/

/*let fs = require("fs");

fs.readFile("a.txt","utf-8",function(err,data){
     console.log(data)
})
let sum=0;
for(let i=0;i<10;i++){
sum=sum+i;
console.log(sum)
}
*/
/*let fs = require("fs");
fs.writeFile("a.txt","hello there 12345!",function(err){
    console.log("saved!")
})*/
let fs = require("fs");
let m;
fs.readFile("a.txt","utf-8",function(err,data){
     let space=/\s+/g;
     let s=data;
     m=s.replace(space," ")
     console.log(m)
     fs.writeFile("a.txt",m,function(err){
        console.log("saved!")
    })
})
/*setTimeout(function add(){
      console.log("hii")
},1000)
fs.writeFile("a.txt",m,function(err){
    console.log("saved!")
})*/

//let s=m.replaceAll("  "," ");
//console.log(s)
/*function wait1(t) {
    return new Promise(function(resolve){
     setTimeout(function(){
         resolve(t);
     },t)
    })
 }
 
 function wait2(t) {
     return new Promise(function(resolve){
         setTimeout(function(){
             resolve(t);
         },t)
        })
 }
 
 function wait3(t) {
     return new Promise(function(resolve){
         setTimeout(function(){
             resolve(t);
         },t)
        })
 }
 
 function calculateTime(t1, t2, t3) {
       return Promise.all([wait1(t1),wait2(t2),wait3(t3)]).then(function(values){
         let sum=0;
         for(let i=0;i<values.length;i++){
            sum=sum+values[i];
         }console.log(sum);
       })
 }
 */
 /*function wait1(t) {
    return new Promise(function (resolve) {
      setTimeout(resolve, t * 1000);
    });
  }
  
  function wait2(t) {
    return new Promise(function (resolve) {
      setTimeout(resolve, t * 1000);
    });
  }
  
  function wait3(t) {
    return new Promise(function (resolve) {
      setTimeout(resolve, t * 1000);
    });
  }
  
  function calculateTime(t1, t2, t3) {
    const start = new Date().getTime();
    return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(function () {
      const end = new Date().getTime();
      return end - start;
    });
  }
  
 
 
 let a=calculateTime(1000,2000,3000);
 console.log(a);*/

 const users=[{
    name:john,
    kidney:[{
       healthy:true
    }]
 }]
 console.log(users[0].k)