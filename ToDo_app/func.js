let taskinput=document.querySelector("#taskinput")

let btn=document.querySelector("#taskbtn")

let list=document.querySelector("#list")

btn.addEventListener("click",taskhandler)
function taskhandler()
{
    let taskdata=taskinput.value;
    console.log(taskdata)
    if(taskdata=="")
       { alert("please eneter your task first!!")
    return;}
    else
    {
        let li=document.createElement("li");
        li.innerHTML= taskdata;
        list.appendChild(li);
        taskinput.value=""
        //delete button
        let delbt=document.createElement("button")
        delbt.innerText="delete data"
        li.appendChild(delbt);

       //hover red color

       delbt.addEventListener("mouseover",()=>{
        delbt.style.backgroundColor="red"
       })
       delbt.addEventListener("mouseout", () => {
     delbt.style.backgroundColor = "";
       });

        delbt.addEventListener("click",()=>{
        li.remove();
        })

        //completed button
        let compbt=document.createElement("button");
        compbt.innerText="completed"
        li.appendChild(compbt);
        

       compbt.addEventListener("mouseover",()=>{
        compbt.style.backgroundColor="green"
       })
       compbt.addEventListener("mouseout", () => {
     compbt.style.backgroundColor = "";
       });


        compbt.addEventListener("click",()=>{
        li.style.textDecoration="line-through";
        compbt.style.backgroundColor="green";
        })
    }
}
let sbtn=document.querySelector("#searchinput");
sbtn.addEventListener("input",searchhandle);
function searchhandle()
{
let searchtext=document.querySelector("#searchinput").value.toLowerCase();
let tasks=document.querySelectorAll("#list li");
tasks.forEach((task)=>{
    let taskname= task.firstChild.textContent.toLowerCase();
    if(taskname.includes(searchtext)){
        task.style.display="list-item";
    }else{
        task.style.display="none";
    }
})
}
