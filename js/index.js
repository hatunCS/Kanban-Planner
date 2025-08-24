
// Wait until the DOM is fully loaded before ass
window.addEventListener("DOMContentLoaded", () => {
    //Querying the DOM (selecting elements from the DOM) and assigning it to a variable
    const addTaskButton = document.getElementById("addTaskButton");
    const deleteTaskButton = document.getElementById("deleteTaskButton");
    const searchButton = document.getElementById("searchButton");
    const filterButton = document.getElementById("filterButton");
    const addTaskModal = document.getElementById("addTaskModal");

    addTaskButton.addEventListener("click", addTask);
    deleteTaskButton.addEventListener("click", deleteTask);
    searchButton.addEventListener("click", searchTasks);
    filterButton.addEventListener("click", filterTasks);    
});

function addTask() {
    addTaskModal.style.display = "flex";
    //Do add task function
    //Create add modal window
}

function deleteTask() {
    console.log("Task Deleted!"); 
    //Do delete task(s) function
}

function searchTasks() {
   
    //search existing tasks 
}

function filterTasks() {
    
    //filter tasks based on users search query
}
