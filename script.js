const addTask = document.getElementById("addTask");
const task = document.getElementById("task");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", function () {
  const taskText = task.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Delete Task";
    removeButton.style.marginLeft = "10px";
    
    removeButton.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();
    });
    li.appendChild(removeButton);
    
    taskList.appendChild(li);

    task.value = "";
  }
});
