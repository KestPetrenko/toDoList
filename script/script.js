let div1 = document.querySelector("#generateButton");
let div2 = document.querySelector("#interactivePanel");
let div3 = document.querySelector("#top");

div1.onclick = generateElementArea;

function generateElementArea() {
    var text = document.createElement("textarea");
    div2.append(text);

    document.querySelector("textarea").placeholder = 'Введіть текст і натисніть Enter';

    text.addEventListener("keydown", function (e) {
        if (e.code == 'Enter') generateElement();
        text.addEventListener("keyup", function (e) {
            if (e.code == 'Enter')
                text.remove()
        })

        console.log(text.value)


        function generateElement() {
            let div = document.createElement("div");
            div.classList.add("interactiveElement");
            let maxLeft = window.innerWidth - 50;
            let maxTop = window.innerHeight - 150;
            div.style.top = getRandomValue(maxTop) + "px";
            div.style.left = getRandomValue(maxLeft) + "px";
            div.style.backgroundColor = getRandomColor();
            div.style.backgroundColor = getRandomColor();
            div.style.rotate = getRandomRotate();

            let button = document.createElement("button");
            button.classList.add("delete");
            let divText = document.createTextNode("X");
            button.append(divText);
            function getRandomRotate() {
                var angle = (Math.floor(Math.random() * (35 - 15) - 15)) + "deg";
                div.style.transform = "rotate(" + angle + ")";
                div.addEventListener("mouseover", mouseOverHanderl);
                div.addEventListener("mouseout", mouseOutHanderl);
                function mouseOverHanderl() {
                    div.style.width = "40vw";
                    div.style.height = "40vw";
                    div.style.border = "6px solid black";
                }
                function mouseOutHanderl() {
                    div.style.width = "25vw";
                    div.style.height = "25vw";
                    div.style.border = "none";
                }
            };

            div.append(text.value);
            div.append(button);
            div2.append(div);
            button.addEventListener("click", handler);
            function handler() {
                div.remove();
            }
            let Btn = document.querySelector("#delete1");
            Btn.addEventListener("click", handler);
            function handler() {
                div.remove();
            }
            function addTaskHandler() {
                div.append(text.value);
                text.remove();
            }

            return div;
        }
    })
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[getRandomValue(16)];
    }
    return color;
}

function getRandomValue(max) {
    return Math.floor(Math.random() * max);
}

let move = false;
let offsetX, offsetY;
let currentDiv;

div2.addEventListener("mousedown", function (e) {
    move = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    currentDiv = e.target;
});

div2.addEventListener("mousemove", function (e) {
    if (move) {
        currentDiv.style.top = e.clientY - offsetY + "px";
        currentDiv.style.left = e.clientX - offsetX + "px";
    }
});
div2.addEventListener("mouseup", function (e) {
    move = false;
});
