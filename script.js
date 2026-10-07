const dateInput = document.querySelector('#date-input');
const taskInput = document.querySelector('#task-input');
const addButton = document.querySelector('button');
let allTasks = [];

function createTaskCard(text, date, status) {
    const taskCard = document.createElement("div");
    taskCard.textContent = `${text} - Due: ${date}`;

    const statusDropdown = document.createElement("select");
    statusDropdown.innerHTML = `
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>`;
    taskCard.appendChild(statusDropdown);
    statusDropdown.value = status;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    taskCard.appendChild(deleteButton);
    deleteButton.addEventListener('click', function(){
        taskCard.remove();
    });

    if (status === 'pending') {
        document.querySelector('#pending-column').appendChild(taskCard);
    }
    if (status === 'in-progress') {
        document.querySelector('#in-progress-column').appendChild(taskCard);
    }
    if (status === 'completed') {
        document.querySelector('#completed-column').appendChild(taskCard);
    }

    statusDropdown.addEventListener('change', function(){
        const selectedStatus = statusDropdown.value;

        if (selectedStatus === 'pending') {
            document.querySelector('#pending-column').appendChild(taskCard);
        }
        if (selectedStatus === 'in-progress') {
            document.querySelector('#in-progress-column').appendChild(taskCard);
        }
        if (selectedStatus === 'completed') {
            document.querySelector('#completed-column').appendChild(taskCard);
            deleteButton.remove();

            const submitButton = document.createElement("button");
            submitButton.textContent = "Submit";
            taskCard.appendChild(submitButton);

            submitButton.addEventListener('click', function(){
                const historyLog = document.querySelector('#history-log');
                const historyEntry = document.createElement("div");
                historyEntry.textContent = `${text} - Completed on: ${new Date().toLocaleDateString()}`;
                historyLog.appendChild(historyEntry);
                taskCard.remove();
            });
        }
    });
}

addButton.addEventListener('click', function(){
    const taskText = taskInput.value;
    const dueDate = dateInput.value;

    if (taskText !== "") {
        allTasks.push({ text: taskText, date: dueDate, status: "pending" });
        localStorage.setItem("tasks", JSON.stringify(allTasks));
        createTaskCard(taskText, dueDate, "pending");
        taskInput.value = "";
        dateInput.value = "";
    }
});