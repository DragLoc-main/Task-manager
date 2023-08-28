const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const darkModeCheckbox = document.getElementById('darkModeCheckbox');

addTaskButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            taskItem.remove();
        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});

darkModeCheckbox.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
});
