const taskNameInputElement = document.querySelector(`#name`);
const addButtonElement = document.querySelector(`.btn`);
const delButtonElement = document.querySelector(`.btn1`);
const tasksContainerElement = document.querySelector(".tasks");
const tasks = [];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach(task => {
        const taskElement = document.createElement("li");
        taskElement.innerHTML = task;
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
const delTask = () => {
    if (tasks.length > 0) {
        tasks.pop(); // Usuń ostatnio dodany task
        render();
    }
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    tasks.push(`<i class='bx bxs-notepad bx-flip-horizontal' style="color: rgba(211, 211, 255, 1); margin-right: 1%; padding-top: 5%; padding-bottom: 5%;" ></i> ` + taskNameInputElement.value);
    taskNameInputElement.value = ''; // Czyść zawartość inputa
    render();
});
delButtonElement.addEventListener("click", (event) => {
    if (taskNameInputElement.value === "") {
        // Jeśli input jest pusty, usuń ostatni task
        delTask();
    }
    else {
        // Jeśli input ma zawartość, wyczyść input
        taskNameInputElement.value = '';
    }
    event.preventDefault();
    const taskText = taskNameInputElement.value.trim(); // Usuń białe znaki z początku i końca wprowadzonego tekstu
    if (taskText !== "") {
        // Jeśli wprowadzony tekst nie jest pusty, dodaj nowe zadanie
        tasks.push(`<i class='bx bxs-notepad bx-flip-horizontal' style="color: rgba(211, 211, 255, 1); margin-right: 1%;" ></i> ` + taskText);
        taskNameInputElement.value = ''; // Czyść zawartość inputa
        render();
    }
    else {
        // Jeśli wprowadzony tekst jest pusty, możesz obsłużyć to w dowolny sposób, na przykład wyświetlając użytkownikowi komunikat 
    }
});
render();
