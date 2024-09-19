const mov = document.querySelector(".mov"),
    screenX = document.querySelector("#valorx"),
    screenY = document.querySelector("#valory"),
    screenColor = document.querySelector("#Color"),
    screenName = document.querySelector("#name");
var o;
screenX.value = 100;
screenY.value = 100;
screenName.value = "ola mudo";
buttonCreate("#p", "<p>" + screenName.value + "</p>");
buttonCreate("#button", "<button>" + screenName.value + "</button>");
function buttonCreate(name, typeObject) {
    document.querySelector(name).addEventListener("click", () => {
        document
            .querySelector("#enter")
            .addEventListener("click", nomeObject(create(typeObject)));
    });
}
function nomeObject(object) {
    object.style.width = screenX.value + "px";
    object.style.height = screenY.value + "px";
    object.style.background = screenColor.value;
}
mov.addEventListener("mousedown", moveObject(mov));
function moveObject(object) {
    o = !o;
    object.addEventListener("mousemove", e => {
        if (o == true) {
            object.style.opacity = "0.8";
            let x, y;
            if (screenY.value > 0 && screenX.value > 0) {
                x = e.clientX - screenX.value / 2 + "px";
                y = e.clientY - screenY.value / 2 + "px";
            } else {
                x = e.clientX - 50 + "px";
                y = e.clientY - 50 + "px";
            }
            object.style.left = x;
            object.style.top = y;
        } else {
            object.style.opacity = "1";
        }
    });
}
function create(html) {
    let object = document.createElement("object");
    object.innerHTML = html.trim();
    object.classList.add(nomeObject(object));
    object.addEventListener("mousedown", moveObject(object));
    document.querySelector(".limite").appendChild(object);
}
//nao esta sendo usando ainda
function pousemove() {
    let x = parseInt(mov.style.left),
        y = parseInt(mov.style.top);
    if (x < 9 || x > 450) {
        mov.style.left = "208px";
        mov.style.top = "208px";
    }
    if (y < 250 || y > 250) {
        mov.style.left = "208px";
        mov.style.top = "208px";
    }
}
