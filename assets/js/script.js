"use strict";

// select
const showScreen = document.querySelector(".screen-h1");

const sumBtn = document.querySelector(".btn-sum");
const minBtn = document.querySelector(".btn-min");
const divisBtn = document.querySelector(".btn-divis");
const multisBtn = document.querySelector(".btn-mult");
const dot = document.querySelector(".btn-dot");

const deleteBtn = document.querySelector(".btn-del");
const resetBtn = document.querySelector(".reset");
const equalBtn = document.querySelector(".equal");

const number = document.querySelectorAll(
  ".btn-0 , .btn-1 ,.btn-2 ,.btn-3 ,.btn-4 ,.btn-5 ,.btn-6 ,.btn-7 ,.btn-8 ,.btn-9 "
);

// evnt to number btn
number.forEach((element) => {
  element.addEventListener("click", (e) => {
    const valueNumber = e.target.value;
    showScreen.value += valueNumber.toString();
    console.log(valueNumber);
  });
});

// for reset calc
resetBtn.addEventListener("click", (e) => {
  showScreen.value = "00";
});

//delete one el
deleteBtn.addEventListener("click", () => {
  showScreen.value = showScreen.value.toString().slice(0, -1);
});

// dot in double number
dot.addEventListener("click", () => {
  showScreen.value += ".";
});

// sum event
sumBtn.addEventListener("click", () => {
  showScreen.value += " + ";
});

// minus event
minBtn.addEventListener("click", () => {
  showScreen.value += " - ";
});

// division event
divisBtn.addEventListener("click", () => {
  showScreen.value += " / ";
});

// multiplication evet
multisBtn.addEventListener("click", () => {
  showScreen.value += " * ";
});

//result
equalBtn.addEventListener("click", () => {
  const expression = showScreen.value;
  const result = eval(expression);
  showScreen.value = result;
});

showScreen.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && showScreen.value.trim() !== "") {
    e.preventDefault();
    const expression = showScreen.value;
    const result = eval(expression);
    showScreen.value = result;
  }
});
