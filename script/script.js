let taskNameInput = document.querySelector("#task-name-input");
let addTaskButton = document.querySelector("#add-task-btn");
let startMessage = document.querySelector("#start-message");
let taskList = document.querySelector(".task-list");

addTaskButton.addEventListener("click", addTaskHandler);

// функция для создания новой задачи в списке, получает в качестве параметра текст задачи, возвращает DOM элемент
function createTask(text) {
    let div = document.createElement("div");
    div.classList.add("task");

    let input = document.createElement("input");
    input.classList.add("one");
    input.addEventListener("click", changeTaskState); // устанавливаем обработчик на нажатие по checkbox - один и тот же для всех элементов
    input.type = "checkbox";
    

    let p = document.createElement("p");
    p.innerText = text;

    let button = document.createElement("button");
    button.classList.add("list__delete");
    let divText = document.createTextNode("Видалити");

    button.append(divText);



    div.append(input);
    div.append(p);
    div.append(button);

    button.addEventListener("click", handler);
    function handler() {
        div.remove();
    }

    let Btn = document.querySelector("#myBtn1");
    Btn.addEventListener("click", handler);
    function handler() {
        div.remove();
    }

    return div;
}



// функция обработчик, которая меняет статус выбранной задачи, используется как обработчик на событие click для checkbox
function changeTaskState() {
    if (this.checked) { // если нажатый chekbox с галочкой, то добавляем для родительского элемента класс completed
        this.parentElement.classList.add("completed");
    } else { // иначе убираем класс completed
        this.parentElement.classList.remove("completed");
    }
}

// функция обработчик на событие click для кнопки добавления новой задачи в список
function addTaskHandler() {
    if (taskNameInput.value) { // если текст в поле ввода введен 
        if (!startMessage.hidden) startMessage.hidden = true;

        let newTask = createTask(taskNameInput.value);
        taskList.append(newTask);
        taskNameInput.value = "";
    } else { // если поле ввода для имени задачи пустое
        alert("Введіть задачу");
    }
}

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

let BtnSpecial = document.querySelector("#delBtnCpecial");
BtnSpecial.addEventListener("click", handler);
function handler() {
    let messages = document.querySelectorAll(".completed");
    for(let i of messages){
    i.remove()
    }
}
