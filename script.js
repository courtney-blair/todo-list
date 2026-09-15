const dateInput = document.querySelector('#date-input');
const taskInput = document.querySelector('#task-input');
const addButton = document.querySelector('button');    

addButton.addEventListener('click', function(){
    const taskText = taskInput.value;
    const dueDate = dateInput.value;
    console.log(taskText, dueDate);

if (taskText !== "") 
        {const taskCard = document.createElement("div");
taskCard.textContent = `${taskText} - Due: ${dueDate}`;

const statusDropdown = document.createElement("select");
statusDropdown.innerHTML = `
    <option value="pending">Pending</option>
    <option value="in-progress">In Progress</option>
    <option value="completed">Completed</option>`
taskCard.appendChild(statusDropdown);

const pendingColumn = document.querySelector('#pending-column');
pendingColumn.appendChild(taskCard);
taskInput.value = "";
dateInput.value = "";
      
const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
taskCard.appendChild(deleteButton);
 
deleteButton.addEventListener('click', function(){
    taskCard.remove(); 


});
}});  


