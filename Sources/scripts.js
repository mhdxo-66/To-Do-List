"use strict";
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function addtsk() {
  tasks.push(document.getElementById("tskinput").value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert(`The Task Of " ${tasks[tasks.length - 1]} " Added`);
}

function rm(i) {
  tasks.splice(i, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  tsklist();
}

function tsklist() {
  let html = "";
  for (let i = 0; i < tasks.length; i++) {
    html += "<li>" + tasks[i] +
      `<button id=rmbtn onclick='rm(${i})'>x</button><button id="dtbtn">x</button></li>X`

  }
  document.getElementById("list").innerHTML = html;
}
tsklist();

function ClearAll() {
  localStorage.clear();
}

const dates = new Date();
const date = `${dates.getFullYear()}/${dates.getMonth() + 1}/${dates.getDate()}`
