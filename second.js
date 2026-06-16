// let heading= document.querySelector("h1");
// console.log(heading)
//heading.innerText="hello"  //chnage word
//heading.innerHTML="<p> this is pragya </p>"   //used to change with tags

//let heading=document.querySelector("h1");
// let body=document.querySelector("body")

// let h2=document.createElement("h2")
// h2.innerText="this is new heading"

// body.appendChild(h2)

let heading=document.querySelector("#head")
let paragraph=document.querySelector(".para")
paragraph.innerText=("army")
 heading.innerHTML="BTS"

//access body
let body = document.querySelector("body")

//now we are going to create a new element and add it into dom

let btn=document.createElement("button")
btn.innerHTML="submit"
body.appendChild(btn)

//text manipulation
//create new elem and append
//how to style element using dom

body.style.backgroundColor="lavender"
heading.style.color="purple"

// btn.remove();

//event handling

btn.addEventListener("click",evenHandler)
function evenHandler()
{
    body.style.backgroundColor="grey"
}
paragraph.addEventListener("click",parachange)
function parachange()
{
    paragraph.style.backgroundColor="purple"
}
//prevent default 

const checkbox = document.querySelector('#id-checkbox');
checkbox.addEventListener("click", checkboxClick);

function checkboxClick(event){
    const warn = " wont let you check this!\n";
    document.querySelector("#output-box").innerText+=warn;
    event.preventDefault();
}