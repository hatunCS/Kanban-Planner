
// Wait until the DOM is fully loaded before ass
window.addEventListener("DOMContentLoaded", () => {
    //Querying the DOM (selecting elements from the DOM) and assigning it to a variable
    const addTaskButton = document.getElementById("addTaskButton");
    const deleteTaskButton = document.getElementById("deleteTaskButton");
    const searchButton = document.getElementById("searchButton");
    const filterButton = document.getElementById("filterButton");
    const addTaskModal = document.getElementById("addTaskModal");
    const closeButtons = document.querySelectorAll(".close");
    const addTaskSubmit = document.getElementById("addTaskForm");

//makes the taskbox modal appear visble
    addTaskButton.addEventListener("click", () => {
        addTaskModal.style.display = "flex";
    });

    //calls the addTask function with the add task form is actually submitted
    addTaskSubmit.addEventListener("submit", addTask);


//closes each X-button the same way, relative to its parent (whichever modal)
    closeButtons.forEach(button => { 
        button.addEventListener("click", () => {
            const modal = button.closest(".modal"); // finds the parent modal
            if (modal) {
                modal.style.display = "none";
            }
        });
    });


    deleteTaskButton.addEventListener("click", deleteTask);
    searchButton.addEventListener("click", searchTasks);
    filterButton.addEventListener("click", filterTasks);  
    
    
});

function addTask(e) {
    e.preventDefault(); // stops page from reloading upon submit

    //collects user values from the addTask form 
    const title = document.getElementById("taskTitle").value;
    const priority = document.getElementById("taskPriority").value;
    const description = document.getElementById("taskDescription").value;
    const iNotes = document.getElementById("initialNotes").value;
    const status = document.querySelector('input[name="status"]:checked').value;

    // Creates the taskbox
    const taskBox = document.createElement("div");
    taskBox.classList.add("task");
    taskBox.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5em;">
            <div class="taskPriority"></div>
            <span>${title}</span>
        </div>
    `;

    //Priority Level Indicator
    //If priority level undefined then use default color
    const rect = taskBox.querySelector(".taskPriority");
    if(priority === "low") rect.style.backgroundColor = "yellow";
    else if(priority === "medium") rect.style.backgroundColor = "orange";
    else if(priority === "high") rect.style.backgroundColor = "red";

    // Append the new taskBox to the "Next Up" column's taskBoxArea
    const nextUpArea = document.getElementById("nextUpTasks");
    nextUpArea.appendChild(taskBox);

    //Resets the Add Task form and closes the Add Task Modal upon submit
    e.target.reset();
    addTaskModal.style.display = "none";
}

function deleteTask() {
    //Do delete task(s) function
}

function searchTasks() {
   
    //search existing tasks 
}

function filterTasks() {
    
    //filter tasks based on users search query
}
