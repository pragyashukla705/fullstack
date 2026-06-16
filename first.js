/*function display() {
        let num = 10;

    if (true) {
  console.log(num);
      
}
    //num=35;
}
let num ;
console.log(num);
let num = 10;*/
//array
//let arr=[10,"pragya",true,null];
/*let arr=[10,20,30,40,50];
arr.forEach((nums)=>{
    console.log(nums);
})
    //use map to increase elements by 5
let newarr=arr.map((nums)=>
    nums+=5
)
console.log(arr);  
console.log(newarr);*/
//using map to convert loweracse to uppercase the array elements
/*let names=["pragya","priya","pratiksha"];
let up= names.map((nn)=>nn.toUpperCase())
console.log(up);
//filter the elements
let arr=[10,20,30,40,50];
let f=arr.filter((ff)=> ff>15)
console.log(f);
//reduce function to reduce array to single element
let arr=[10,20,30,40,50]
let red=arr.reduce((nums,acc)=> nums+acc,0)
console.log(red)

function addition()
{
  console.log("this is addition")
}
console.log(addition()) //returns undefined swince in js a function needs to return something otherwise it will not show 

function add()
{
  return "this is addition"
}
console.log(add()) 

//arrow function
let func=()=>console.log("this is an arrow function");
func();
//arrow func does not support hoisting
//this does not work for arrow function

let student = {
    name: "pragya",
    uid: 1018,
    course: "btech cse",

    markattendance: function () {
        console.log("present");
        console.log(this.name); //works for normal function
    }
};

student.markattendance();

//arrow
let student2 = {
    name: "pragya",
    uid: 1018,
    course: "btech cse",

    markattendance: ()=> {
        console.log("present");
        console.log(this.name); //gives undefined for arrow function
    }
};

student2.markattendance();
*/

//template literal

//let name="pragya"
//console.log(`this is my name: ${name}`)

//destructuring

/*let arr=["pragya","mca","bca","btech"]
let[arr1,arr2]=arr;
console.log(arr1,arr2)

//callback
//when we pass a function as a parameter to another function , called as callback

function display(name)
{
  console.log(name)
}
function greet(callback){
  callback("aman");
}
greet(display);

//passing arrow ffunction in asynchronour=s function settimeout 

setTimeout (
  ()=>{
    console.log("it is a asynch func")
  },4
)
console.log("3")

setTimeout(
()=>{
  console.log("4")
},1
)*/

// //callback function again
// function order(product_name){
//   setTimeout(() => {
//   console.log("product is ordererd",product_name);    
//   },1);

// }
// function payment(callback)   //callback is a parameter to stor order function
// {
//   console.log("payment is ncompleted")
//   callback("laptop");
// }
// payment(order);
// function payment(callback)
// {
//   setTimeout(() => {
//     console.log("payment done");
//     callback("laptop");
//   }, 5000);
// }
// payment(order);

// function getuserdata(name)
// {
//   setTimeout(() => {
//     console.log("welcome",name);
//     // console.log("20");
  
//   }, 1000);
// }
// function userorderhistory()
// {
//   setTimeout(() => {
//     console.log("order 1: laptop");
   
//   }, 3000);
// }

// function userdashboard(callback1,callback2){
//   setTimeout(() => {
//     callback1("pragya");
//     callback2();
//   }, 5000);
// }
// userdashboard(getuserdata,userorderhistory);

// function step1(callback){
//   setTimeout(() => {
//     console.log("step 1 is completed");
//   }, );
// }
//promises tovercome callback hell or pyramid of dom =asynchronous  
// uses= avoids callback hell , api fetch , file read , database query
// //3 tupes= pending, fulfilled, rejected
// let p= new Promise((resolve,reject)=>{
// //let num=10;
// let num=9;
// if(num%2== 0){
// resolve("number is even");
// }
// else{reject("number is odd");}
// })
// //console.log(p);
// //if fulfill- then but reject- cache
// p.then((result)=>{
//   console.log(result);
// })
// .catch((result)=>{
//   console.log(result);
// })


// Prompt the user with a question
// rl.question("What is your name? ", (answer) => {
//   console.log(`Hello, ${answer}!`);
  
//   rl.close(); // Stop listening for inputs
// });

//input age
// const readline = require('readline'); // Import native library

// // Create the input/output interface
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let prom=new Promise((resolve,reject)=>{
//   //take input from user 

//   rl.question("what is your age?",(ans)=>{
//   console.log(`age=${ans}`);

//   if(ans>18){
//     resolve("adult");
//   }
//   else{
//     reject("not adult");
//   }
//   rl.close();
// })
// })
// prom.then((result)=>  console.log(result))
// .catch((result)=>console.log(result))

//async await

//fetch api

async function fetchdata(){
  const data= await fetch("https://jsonplaceholder.typicode.com/users/1");
  const jsondata= await data.json();
  console.log(jsondata.name)
}
fetchdata();