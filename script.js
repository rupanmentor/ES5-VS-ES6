// Scoping : var vs let vs const 
//Var example :- function / global scope 
/*
if(true){
    var x =10;
}
console.log(x);
*/
//let example :- block scope 
/*
if(true){
    let x =10;
}
console.log(x);
*/

//Arrow Function :- 
//without arrow function
/*
function add(a,b){
    return a+b
}
console.log(add(1,3));
*/
//with arrow function
/*
const addition = (a,b)=>a+b;
console.log(addition(2,3));
*/

//Template literals :- 

//without template literal
/*
const name  = "John Doe"
console.log("my name is",name)
*/
//with template literal
/*
const greet = "Hello all Iam Fine"
console.log(`How are you ${greet}`);
*/

//spread Operator:- 
/*
const arr = [1,2,3]
const arr1 = [4,5,6]
const arr2 = [...arr,...arr1]
console.log(arr2);

const obj = {a:1,name:"rupan"};
const obj1 = {b:2};
const obj2 = {...obj,...obj1}
console.log(obj2);
*/

//rest parameter:- 
/*
function oddEven (a,b,d,...c){
   
    let even = [];
    for(let i=0;i<c.length;i++){
        if(c[i]%2===0){
            even.push(c[i])
        }
    }
    return even
}
console.log(oddEven(10,11,12,13,14,15,16,17,18))
*/

//Array Destructure:- 

//without Destructure:-
/*
const fruits = ["🍎","🍊","🍓","🥭"]
const apple = fruits[0];
const orange = fruits[1];
const strawberry = fruits[2]
const mango = fruits[3]
console.log(apple,orange,strawberry,mango);
*/

//with destructure:- 
//syntax : const/let [variablename] = arrayname
/*
const fruits = ["🍎","🍊","🍓","🥭"]
const [apple,orange,strawberry,mango,banana="🍌"] = fruits
console.log(apple,orange,strawberry,mango,banana);
console.log(fruits);
*/


//Object Destructure:- 

//without Destructure:-
/*
let obj = {
names:"John",
age:30,
address:{
city:"chennai",
state: "tamilnadu"
}
}
console.log(obj.names);
console.log(obj.age);
console.log(obj.address.city)
console.log(obj.address.state);

*/



//with destructure:- 
//syntax : const/let {keyname} = objectname
/*
let obj = {
names:"John",
age:30,
address:{
city:"chennai",
state: "tamilnadu"
}
}

const {names,age,address:{city,state}} = obj
console.log(names,age,city,state);
*/
/*
const shop = [
   {
    item:"rice",
    price:100,
    category:"grains"
   },
    {
    item:"apple",
    price:150,
    category:"fruits"
   },
    {
    item:"carrot",
    price:80,
    category:"vegetable"
   }
]

const [{item,price,category}] = shop
shop.forEach(({item,price,category})=>{
    console.log(item,price,category);
    
})
*/