// PT. 1 //

// console.dir(document);

// GETELEMENTSBYCLASSNAME //

/*
let items = document.getElementsByClassName("list-group-item");

let arrItems = Array.from(items);

arrItems.forEach((item) => (item.style.backgroundColor = "red"));
*/

// GETELEMENTSBYTAGNAME //

/*
let li = document.getElementsByTagName("li");

Array.from(li).forEach((item) => (item.style.backgroundColor = "red"));
*/

// QUERYSELECTOR //

/*
let header = document.querySelector("#main-header");

header.style.border = "2px solid black";

let input = document.querySelector("input");

input.value = "hello world";

let submit = document.querySelector(`input[type="submit"]`);

submit.value = "Send";

let item = document.querySelector(".list-group-item");

item.style.color = "red";

let lastItem = document.querySelector(".list-group-item:last-child");

lastItem.style.color = "blue";

let secondItem = document.querySelector(".list-group-item:nth-child(2)");

secondItem.style.color = "yellow";
*/

// QUERRYSELECTORALL //

/*
let odd = document.querySelectorAll(".list-group-item:nth-child(odd)");

odd.forEach((item) => (item.style.backgroundColor = "lightgray"));
*/

// PT. 2 //

/*
// parentNode & parentElement


// itemList.parentNode.style.backgroundColor = "lightgray";

itemList.parentElement.parentElement.parentElement.style.backgroundColor = "lightgray";
*/

// childNodes & elementChild

// let itemList = document.querySelector("#items");

// itemList.children[2].style.color = "yellow";

// itemList.firstElementChild.style.backgroundColor = "yellow";

// nextElementSilbilng

// itemList.nextElementSibling.style.backgroundColor = "coral";

// new element

/*
let newDiv = document.createElement("div");

console.log(newDiv);

// add class

newDiv.className = "createdDiv";

// add id

newDiv.id = "div1";

// add attribute

newDiv.setAttribute("title", "the cloud");

// create a text node

let newDivText = document.createTextNode("Hello!");

// add text to div

newDiv.appendChild(newDivText);

let container = document.querySelector("header .container");

let h1 = document.querySelector("header h1");

container.insertBefore(newDiv, h1);
*/

// PT. 3 //

// EVENTS

/*
const button = document
  .getElementById("button")
  .addEventListener("click", buttonClick);

function buttonClick(e) {
  //   console.log(e.type);
  //   console.log(e.clientX);
  //   console.log(e.offsetY);
//   console.log(e.altKey);
//   console.log(e.shiftKey);
}
*/

// MOUSE EVENTS

/*
let box = document.querySelector(".box");

// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseup", runEvent);
// box.addEventListener("mousedown", runEvent);
// box.addEventListener("dblclick", runEvent);

// box.addEventListener("mouseout", runEvent);
// box.addEventListener("mouseleave", runEvent);
// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseenter", runEvent);
box.addEventListener("mousemove", runEvent);

// function runEvent(e) {
//   console.log("EVENT TYPE: " + e.type);
// }

function runEvent(e) {
  document.body.style.backgroundColor = `rgb(${e.offsetY}, ${e.offsetX}, 40)`;
}
*/

// KEYEVENTS

/*

let inputItem = document.querySelector('input[type ="text"]');

// inputItem.addEventListener("keypress", runEvent);
// inputItem.addEventListener("input", runEvent);
// inputItem.addEventListener("paste", runEvent);
// inputItem.addEventListener("focus", runEvent);
// inputItem.addEventListener("blur", runEvent);

// let selectItem = document.querySelector("select");
// selectItem.addEventListener("change", runEvent);

let form = document.querySelector("form");

form.addEventListener("submit", runEvent);

function runEvent(e) {
  console.log("EVENT TYPE: " + e.type);
  e.preventDefault();
}

// let output = document.createElement("p");

// let box = document.querySelector(".box");

// let body = document.querySelector("body");

// let container = document.querySelector(".container");

// container.append(output);

*/
