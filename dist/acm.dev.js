"use strict";

var bodyNode = document.querySelector("body");
bodyNode.style.backgroundImage = "url('images/pxfuelDark.jpg')";
console.log("hello");
var mod = document.querySelector("#mode");
var modText = document.querySelector("#modeText");
var mode = "dark";
document.body.style.color = "white";
var anchorColors = document.querySelectorAll("a");
mod.addEventListener("click", function (e) {
  if (mode === "dark") {
    mode = "light";
    bodyNode.style.backgroundImage = "url('images/pxfuel.jpg')";
    document.body.style.color = "black";
    modText.innerText = "Dark Mode";
    anchorColors.forEach(function (a) {
      a.style.color = "#01438a";
    });
  } else {
    mode = "dark";
    bodyNode.style.backgroundImage = "url('images/pxfuelDark.jpg')";
    document.body.style.color = "white";
    modText.innerText = "Light Mode";
    anchorColors.forEach(function (a) {
      a.style.color = "#aef2f5";
    });
  }
});