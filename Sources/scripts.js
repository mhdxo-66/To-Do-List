"use strict";
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function AddTsk() {
  let task;
  task = prompt("Write A Task");
  if (task === "") {
    alert(`Your Task Is Empty`);
  } else if (task === null) {
    alert(`Adding Task Cancelled`)
  } else {
    tasks.push(task);
    alert(`The Task Of " ${tasks[tasks.length - 1]} " Added`);
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function rm(i) {
  tasks.splice(i, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  tsklist();
}
function dt(i) {
  let task;
  task = prompt("Edit Your Task", tasks[i]);
  if (task === "") {
    alert(`You Write Empty Task`)
  } else if (task === null) {
    alert(`Editing Task Cancelled`)
  } else {
    tasks[i] = task;
    alert(`Your Task Edited \n Final : ${tasks[i]}`)
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
  tsklist();
}

function tsklist() {
  let html = "";
  for (let i = 0; i < tasks.length; i++) {
    html += `<li onclick="done(this)">
      <button id=rmbtn onclick='rm(${i})'>x</button>
      <button id=dtbtn onclick='dt(${i})'>✏️</button>${tasks[i]}</li>`
  }
  document.getElementById("list").innerHTML = html;
}
tsklist();

function ClearAll() {
  localStorage.clear();
}

function done(item) {
  item.style.textDecoration =
    item.style.textDecoration === "line-through"
      ? "none"
      : "line-through";
}