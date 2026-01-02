// src/index.js

const form = document.getElementById("create-task-form");
const input = document.getElementById("new-task-description");
const tasksList = document.getElementById("tasks");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const task = input.value;
  if (task && task.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = task;
    tasksList.appendChild(li);
    input.value = "";
  }
});