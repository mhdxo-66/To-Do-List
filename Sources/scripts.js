"use strict";
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function AddTsk() {
  tasks.push(prompt("Write A Task"));
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
      `<button id=rmbtn onclick='rm(${i})'>x</button></li>`

  }
  document.getElementById("list").innerHTML = html;
}
tsklist();

function ClearAll() {
  localStorage.clear();
}

const dates = new Date();
const date = `${dates.getFullYear()}/${dates.getMonth() + 1}/${dates.getDate()}`
