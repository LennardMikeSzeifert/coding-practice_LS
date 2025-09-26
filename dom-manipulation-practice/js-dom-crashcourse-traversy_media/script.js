console.dir(document);

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
