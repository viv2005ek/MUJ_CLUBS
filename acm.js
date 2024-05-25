let bodyNode = document.querySelector("body");

bodyNode.style.backgroundImage = "url('images/pxfuelDark.jpg')";
console.log("hello");

let mod = document.querySelector("#mode");
let modText = document.querySelector("#modeText");
let mode = "dark";
document.body.style.color = "white";
let anchorColors = document.querySelectorAll("a");

mod.addEventListener("click", (e) => {
    if (mode === "dark") {
        mode = "light";
        bodyNode.style.backgroundImage = "url('images/pxfuel.jpg')";
        document.body.style.color = "black";
        modText.innerText = "Dark Mode";

        anchorColors.forEach((a) => {
            a.style.color = "#01438a";
        });
    } else {
        mode = "dark";
        bodyNode.style.backgroundImage = "url('images/pxfuelDark.jpg')";
        document.body.style.color = "white";
        modText.innerText = "Light Mode";

        anchorColors.forEach((a) => {
            a.style.color = "#aef2f5";
        });
    }
});