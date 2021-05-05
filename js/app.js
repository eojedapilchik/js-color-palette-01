"use strict";
console.log("connected");

const list = document.querySelector(".list");

// The first child of the `ul` in the variable `firstItem`
const firstItem = list.firstElementChild;
firstItem.style.backgroundColor = "#04c5e6";

//the second list item
const nextItem = firstItem.nextElementSibling;
nextItem.style.backgroundColor = "#b7c7d0";
