"use strict";

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

document.querySelector('#add').addEventListener('click', function AddTsk() {
  let task;
  task = prompt("Enter a task");

  if (task === "") {
    alert(`Your task is empty`);
  } else if (task === null) {
    alert(`Adding task canceled`);
  } else {
    tasks.push(task);
    alert(`Task "${tasks[tasks.length - 1]}" added`);
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
})

function rm(i) {
  tasks.splice(i, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  tsklist();
}

function dt(i) {
  let task;
  task = prompt("Edit your task", tasks[i]);

  if (task === "") {
    alert(`You entered an empty task`);
  } else if (task === null) {
    alert(`Editing task canceled`);
  } else {
    tasks[i] = task;
    alert(`Your task has been edited\nUpdated task : ${tasks[i]}`);
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  tsklist();
}

function tsklist() {
  let html = "";

  for (let i = 0; i < tasks.length; i++) {
    html += `<li onclick="done(this)">
      <button id="rmbtn" onclick='rm(${i})'>x</button>
      <button id="dtbtn" onclick='dt(${i})'>✏️</button>${tasks[i]}</li>`;
  }

  document.getElementById("list").innerHTML = html;
}

tsklist();


document.querySelector('#clr').addEventListener('click',function ClearAll() {
  localStorage.clear();
})

function done(item) {
  item.style.textDecoration =
    item.style.textDecoration === "line-through"
      ? "none"
      : "line-through";
}