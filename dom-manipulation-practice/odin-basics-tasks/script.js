// Task 1
/*
const para = document.createElement("p");

para.textContent = "Hey I'm red!";

para.style.color = "red";

document.body.appendChild(para);
*/

// Task 2
/*
const header = document.createElement("h3");

header.textContent = "I'm a blue h3!";

header.style.color = "blue";

document.body.appendChild(header);
*/

// Task 3

const div = document.createElement("div");

div.style.cssText = "border: 2px solid black; background: pink";

const header = document.createElement("h1");

header.textContent = "I'm in a div";

const para = document.createElement("p");

para.textContent = "ME TOO!";

div.appendChild(header, para);

div.append(header, para);

document.body.appendChild(div);
