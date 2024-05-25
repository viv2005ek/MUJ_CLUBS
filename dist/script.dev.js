"use strict";

//loader remove
var forLoaderBody = document.body.querySelector(".forLoaderBody");
var containerLoader = document.body.querySelector(".containerLoader");
window.addEventListener("load", function (e) {
  setTimeout(function () {
    containerLoader.style.display = "none";
    forLoaderBody.classList.remove("forLoaderBody");
  }, 3000); //3 second delay
}); //typing effect

var typed = document.querySelector(".typed");

if (typed) {
  var typed_strings = typed.getAttribute("data-typed-items");

  if (typed_strings) {
    var onTick = function onTick() {
      typed_string = current_strings.substring(0, count);
      typed.innerHTML = typed_string;
      count++;

      if (count > current_string_length) {
        count = 0;
        strCount++; // Reset strCount if it exceeds the length of typed_strings

        if (strCount >= typed_strings.length) {
          strCount = 0;
        }

        current_strings = typed_strings[strCount];
        current_string_length = current_strings.length;
      }
    };

    typed_strings = typed_strings.split(",");
    console.log(typed_strings);
    var typed_string = "";
    var count = 0; // Start count from 0

    var strCount = 0;
    var current_strings = typed_strings[strCount];
    var current_string_length = current_strings.length;
    var interval = setInterval(onTick, 300);
  }
}