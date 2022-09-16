let taskNameInput = document.querySelector("#task-name-input");
    let addTaskButton = document.querySelector("#add-task-btn");
    let startMessage = document.querySelector("#start-message");
    let taskList = document.querySelector(".task-list");
    

    addTaskButton.addEventListener("click", addTaskHandler);
    function createTask(text) {
        let div = document.createElement("div");
        div.classList.add("task");

        let input = document.createElement("input");
        input.classList.add("one");
        input.addEventListener("click", changeTaskState); 
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

    function changeTaskState() {
        if (this.checked) { 
            this.parentElement.classList.add("completed");
        } else { 
            this.parentElement.classList.remove("completed");
        }
    }

  
    function addTaskHandler() {
        if (taskNameInput.value) { 
            if (!startMessage.hidden) startMessage.hidden = true;

            let newTask = createTask(taskNameInput.value);
            taskList.append(newTask);
            taskNameInput.value = "";
        } else { 
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
    BtnSpecial.addEventListener("click", function (e) {
        let messages = document.querySelectorAll(".completed");
        for (let i of messages) {
            i.remove()
        }
        });

    let hide = document.querySelector("#hide");
    hide.addEventListener("click", function (e) {
            let messages = document.querySelectorAll(".completed");
            for (let i of messages) {
                i.style.display = 'none';
            }
        });

let show = document.querySelector("#show");
show.addEventListener("click", function (e) {
            let messages = document.querySelectorAll(".completed");
            for (let i of messages) {
                i.style.display = '';
            }
        });