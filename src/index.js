import {getData,postData,deleteData,putData} from "./metodos";


let contador = document.getElementById("contador");
let btnadd = document.getElementById("btnadd");
let display = document.getElementById("display");

let newTask = {
    description: inputadd.value,
    state: false,
    creation: new Date (Date.now()).toLocaleString()
}

let addTask = async (e) => { 
    e.preventDefault();
    if (inputadd.value.trim("") != "") {
        let newTask
     }
      inputadd.value = "";
      let tasks = await postData(newTask);
      showtasks(tasks);
    }

