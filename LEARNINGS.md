# Key Learnings from Practice Exercises

This document collects key takeaways from each exercise.  
They reflect the concepts, best practices, and insights gained while completing coding challenges.

---

## Best practices for DOM & CSS manipulation

- Avoid mixing CSS and JS by setting inline styles directly with JavaScript.
- Instead, define CSS rules in a stylesheet as a class.
- Use JavaScript to add or remove the class from elements (`element.classList.add()` / `element.classList.remove()`).
- This keeps styling logic in CSS and behavior logic in JS — cleaner and easier to maintain.

---

## Event flow (bubbling/capturing)

- Events usually bubble up (child → parent → body).
- You can stop this flow with `stopPropagation()`.
- Custom events also follow event flow rules.

---

## Callbacks and custom events

- A callback is just a function passed as an argument and executed later.
- Custom events (`new CustomEvent`) allow you to create your own events and decouple logic.
- `dispatchEvent` triggers the custom event, and any listener for that event will respond.

---

## `innerText` vs. `textContent`

- `textContent`: Returns all the text, including hidden elements, without styling.
- `innerText`: Returns only _visible_ text, and respects CSS styling (like `display: none`).

---

## `preventDefault()` vs. `stopPropagation()`

- `preventDefault()`: Stops the default browser behavior (e.g., stop a link from navigating).
- `stopPropagation()`: Stops the event from bubbling up to parent elements but does not stop the browser’s default behavior.

---

## Page load events

- `DOMContentLoaded`: Fires when the DOM is ready (like the skeleton of the page is built).
- `load`: Fires when the entire page including images, CSS, etc., is fully loaded.
- `beforeunload`: Lets you warn users before leaving (requires `event.preventDefault()` and `event.returnValue`).
- `unload`: Fires when the user leaves the page (often used for analytics).

---

## DOM manipulation tasks

- When altering text with `text.textContent`, use `=` to assign the text instead of wrapping it in `("")`.
  e.g. para.textContent = "Hey I'm red!";

- The syntax to change the color property of an HTML element
  through JavaScript is `var.style.color = "color"`.

- `appendChild()` only accepts one node at a time, e.g.:
  div.appendChild(para);
  div.appendChild(header);

- To change multiple css styles at once using DOM-manipulation:
  div.style.cssText = "color: blue; background: white;";
  or
  div.setAttribute("style", "color: blue; background: white;");

- In an event listener callback, the parameter (commonly e or event)
  is the Event object automatically passed by JavaScript.
  It contains useful properties and methods (e.g. e.target) that reference
  the DOM node triggering the event. Example:

<!-- btn.addEventListener("click", function (e) {
console.log(e.target); // logs the clicked element
e.target.style.background = "blue"; // changes its style
}); -->

---

## Commit conventions — setup commits

- For setting up base files (like README.md, index.html, or script.js), it is best practice to use chore instead of feat.

- feat should be reserved for commits that add actual user-facing functionality.

---

## tempConversion (refactored)

- Using `5/9` instead of `0.555555556` improves readability and avoids rounding drift.
- `Math.round(... * 10) / 10` keeps the result numeric while rounding to one decimal.

---

## leapYears (refactored)

- Breaking down complex conditionals into descriptive boolean
  variables makes the code easier to read and maintain.

---

## leapYears task

- When using multiple `if` conditionals, check more specific
  conditions first before general ones to ensure correct logic.

---

## sumAll (improved approach)

- Include edge cases for better user accessibility.
- Avoid creating an array just to reduce it — sum directly in a loop.

---

## sumAll task

- `.unshift()` adds an item to the front of the array.
- When using `.reduce()` to get a sum, initialise the total to `0`.

---

## removeFromArray (improved approach)

- The rest parameter `...args` includes any amount of arguments.
- To select each item you need an array method compatible with rest parameters.
- It is safer to not mutate the original array.

---

## removeFromArray (first approach)

- You can't copy the array to a new array using `.splice()` as it only modifies the given array.
- When using `.splice()` you can use `.findIndex()` with the function directly as the starting point without storing it in a variable.

---

## repeatString task

- Combine strings using `+=`.

---

## Array.prototype.findIndex() and splice()

- `findIndex()` returns the index of the array item that satisfies the condition.
- `splice()` modifies the original array — it does not create a copy.

---

## Array.prototype.find()

- `find()` returns the first array item that fulfills the given function condition.

---

## Array.prototype.every()

- `every()` returns a boolean indicating if all elements satisfy the condition.
- It does not return the matching element.
- Useful for early exit when only a truthy check is needed.

---

## Array.prototype.some()

- `new Date().getFullYear()` returns the current year as a 4-digit number (e.g. 2025).
- `some()` checks if **at least one** element in the array passes the condition.
- `some()` returns `true` or `false`, not the matching element.
