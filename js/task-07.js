"use strict";

const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", (event) => {
  const size = input.value;
   console.log(size);

  text.style.fontSize = size + "px";
});

