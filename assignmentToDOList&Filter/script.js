// To-Do List Application
document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  taskList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("completed");
    } else if (e.target.classList.contains("delete-btn")) {
      e.target.parentElement.remove();
    }
  });

  function addTask(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const filterSelect = document.getElementById("filterSelect");
  const filteredItems = document.getElementById("filteredItems");

  filterSelect.addEventListener("change", function() {
    const selectedCategory = filterSelect.value;
    const itemsToDisplay = getFilteredItems(selectedCategory);
    displayItems(itemsToDisplay);
  });

  function getFilteredItems(category) {
    return ["Item 1", "Item 2", "Item 3"];
  }

  function displayItems(items) {
    filteredItems.innerHTML = "";
    items.forEach(item => {
      const p = document.createElement("p");
      p.textContent = item;
      filteredItems.appendChild(p);
    });
  }
});
