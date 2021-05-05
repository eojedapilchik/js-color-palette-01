"use strict";
console.log("connected");

const list = document.querySelector(".list");

// The first child of the `ul` in the variable `firstItem`
const firstItem = list.firstElementChild;
firstItem.style.backgroundColor = "#04c5e6";

//the second list item
const nextItem = firstItem.nextElementSibling;
nextItem.style.backgroundColor = "#b7c7d0";

//last item
const lastItem = list.lastElementChild;
lastItem.style.backgroundColor = "#57d6ab";

// the second-to-last list item
const prevItem = lastItem.previousElementSibling;
prevItem.style.backgroundColor = "#f36f49";

// banner
const banner = document.querySelector("div.wrapper div");
banner.className = "banner";

// wrapper
const wrapper = banner.parentNode;
wrapper.style.backgroundColor = "#fcfcfc";

const body = wrapper.parentNode;
body.style.backgroundColor = "#f8fdf3";
