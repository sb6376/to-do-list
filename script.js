function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function deleteTask(button) {
  const li = button.parentElement;
  li.remove();
}

function searchTask() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const tasks = document.querySelectorAll("#taskList li");

  tasks.forEach(task => {
    const text = task.textContent.toLowerCase();
    if (text.includes(input)) {
      task.style.display = "";
    } else {
      task.style.display = "none";
    }
  });
}




