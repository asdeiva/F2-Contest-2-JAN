let ename = document.getElementById("name")
let proff = document.getElementById("profession")
let age = document.getElementById("age")
let btn = document.getElementById("btn")
let ermgs = document.getElementById("mgss")

function validate(){
    if(ename.value!="" && proff.value!=""&&age.value!=""){
        ermgs.classList.add("green")
        ermgs.innerHTML= "Success : Employee Added";
    }
    else{
        ermgs.classList.add("red")
        ermgs.innerHTML= "Error : Please Make sure All the fields are filled before adding in an employee !";
    }
}



btn.onclick = validate;