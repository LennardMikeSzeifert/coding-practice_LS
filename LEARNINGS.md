# Key Learnings from Practice Exercises

This document collects key takeaways from each exercise.  
They reflect the concepts, best practices, and insights gained while completing coding challenges.

---

## Merging Branches in Git

- Once you’re finished working on a feature branch, you can **merge** its changes into your main branch.
- To merge, first switch to the branch you want to merge **into** (usually `main`), then use:
  ```bash
  git merge <branch_name>
  ```
- Once a branch has been merged and is no longer needed, it’s best to delete it to keep your repo clean:
  ```bash
  git branch -d <branch_name>   # Safe delete (only if merged)
  git branch -D <branch_name>   # Force delete (if not merged)
  ```

## Sharing Code with Branches

- Branches can also be used to **share work-in-progress code** without affecting your main project.
- If you encounter a **bug or issue** in your feature that you can’t solve, avoid committing broken code to your main branch.
- Instead, create a **temporary branch** to isolate your changes:
  ```bash
  git checkout -b help-debug
  ```

## Creating a New Branch in Git

- You can create a new branch using the command:  
  git branch branch-name
- Once created, you can switch between branches freely using:
  git checkout branch-name
- To create and switch to a new branch in one step, use:
  git checkout -b branch-name

## Git Branches

- Branches in Git are like **alternate timelines** or **parallel universes** for your project.
- They let you work on **new features, experiments, or fixes** without affecting the main version of your code.
- The `main` branch represents the **official project history**, while new branches (e.g., `feature-ui`) act as **isolated workspaces** for development.
- Once the work in a branch is complete, it can be **merged** back into `main`, integrating your changes safely.
- 💡 Think of branches like **different drafts of the same story** — you can explore ideas freely, and later choose which version becomes the final one.

## GIT BEST PRACTICE — Commit by Logical Unit of Change

When adding new features, always commit by logical unit of change, not by file type.

Example:  
If you add a new feature like displaying the score in the Rock–Paper–Scissors UI:

- You add new `<div>` elements in HTML
- You style them in CSS
- You update JavaScript to make the scores dynamic

It's best practice to make one single commit for all of that, because together they form one complete feature.

## Event Listener Targeting in the DOM

When adding event listeners in JavaScript, make sure to select the **individual elements** you want to listen to, not just their container.

If you attach an event listener to a **container element** that wraps multiple buttons or interactive items, the event will trigger **no matter where inside that container** you click — even outside the actual buttons.

To ensure each button has its own distinct behavior, you should select all buttons individually and loop through them to add event listeners.

---

## Arrow Functions

- Arrow functions are a **shorter way** to write regular functions.
- If there is **only one argument**, the parentheses `()` can be omitted.
- If the function body is **only one line**, the curly braces `{}` can be omitted.
- When `{}` are omitted, the function **automatically returns** the result of that line (no `return` needed).
- Example idea: `const add = x => x + 2;` is the short form of
  ```js
  const add = function (x) {
    return x + 2;
  };
  ```

## The `this` keyword

- `this` refers to **the element or object that is currently “doing” the action**.
- In an event listener, `this` usually points to **the element that triggered the event** (e.g., a clicked button).
- Inside an object method, `this` refers to **the object itself**.
- 💡 Think of `this` like the word _“I”_ — it always means _“the one currently speaking or acting.”_

## Adding a class with JavaScript

- You can add a CSS class to an element using the `.classList.add()` method.
- Syntax: `element.classList.add('className')`
- This is the clean way to apply new styles or animations without directly changing inline CSS.
- Example: `button.classList.add('active')` adds the class `active` to the button.

## The `.currentTime` property

- `.currentTime` is a property of the **HTMLMediaElement** (used by `<audio>` and `<video>`).
- It represents the **current playback position in seconds**.
- You can both **read** it (to check where playback is) and **set** it (to jump to a specific point).
- Example: `audio.currentTime = 0;` resets playback to the start — often used with `audio.play()` to replay a sound immediately.

## Using template literals in `querySelector()` with attribute selectors

- When using template literals with attribute selectors, always include quotes around the interpolated value.
- Example: `` `audio[data-key="${e.code}"]` ``
- This matches the correct CSS syntax for attributes like `data-key="KeyA"`.
- While omitting the quotes may still work in simple cases, using quotes ensures consistency and prevents selector errors.

## Setting a full-page background image with CSS

- You can use the `background-image` property on the `body` to set a full-page background without needing an `<img>` tag.
- Common settings:
  - `background-size: cover;` → fills the screen without stretching
  - `background-position: center;` → keeps it centered
  - `background-repeat: no-repeat;` → prevents tiling
- All other elements naturally appear on top of the background.

## `transition` property

- The `transition` property makes CSS changes happen **smoothly over time** instead of instantly.
- It’s often used for hover effects, animations, or gradual style changes.
- Basic syntax: `transition: property duration timing-function delay;`
- Example idea: `transition: background-color 0.3s ease;` smoothly fades color changes.

## `removeEventListener()` method

- You can use `removeEventListener()` to remove one or more event listeners from an element.
- It stops the specified event from triggering its assigned function.
- The function reference passed to `removeEventListener()` must be the **same** as the one used in `addEventListener()`.

## `.children[index]` vs. `:nth-child()`

- `.children[index]` is a **JavaScript property** used to access elements by their position inside a parent node.
  Example idea: `children[3]` gets the **fourth** child element (since counting starts at 0).
- `:nth-child()` is a **CSS selector**, used only inside `querySelector()` or stylesheets.
  Example idea: `:nth-child(4)` selects the **fourth** child element using CSS selector syntax.
- `.children[index]` is used with **DOM navigation**, while `:nth-child()` is used with **CSS-style selection**.

## Scoped `querySelector()` usage

- You can replace `document` with any element variable to search only inside that element.
- The variable becomes the new “starting point” for the selector search.
- This limits the scope and avoids affecting elements outside that section.

## Removing parent elements in the DOM

- When you use `e.target.parentElement.remove()`, it removes **the parent element** of the clicked item.
- This means if the clicked element (like a delete button) is inside an `<li>`, the entire `<li>` (and the button itself) will be removed from the DOM.

## `confirm()` method

- The `confirm()` method shows a dialog box asking the user to confirm an action.
- It displays a message with **OK** and **Cancel** buttons.
- It returns a boolean value:
  - `true` if the user clicks **OK**
  - `false` if the user clicks **Cancel**

Example:

````js
let result = confirm("Are you sure?");
console.log(result); // true or false

## HTML Select Element

- The `<select>` element creates a dropdown list for user choices.
- Each `<option>` inside it defines a single selectable item.

## Mouse events: mouseover/mouseout vs. mouseenter/mouseleave

- `mouseover` and `mouseout`:

  - Fire when the mouse enters or leaves **an element or any of its children**.
  - Example: if you have a `div` with an `h3` inside, moving from the `div` into the `h3` will trigger both `mouseover` and `mouseout` on the parent `div`.

- `mouseenter` and `mouseleave`:
  - Fire only when the mouse enters or leaves **the element itself**, not its children.
  - Example: with the same `div` and `h3`, moving into the `h3` will not retrigger the parent `div`'s `mouseenter` or `mouseleave`.

**Summary:**

- `mouseover/mouseout`: sensitive to children.
- `mouseenter/mouseleave`: only care about the parent element.

## Inserting elements

- You can insert an element before another element using `insertBefore()`.
- Syntax:

  ```js
  container.insertBefore(newDiv, h1);
````

The first parameter (newDiv) is the element you want to insert.
The second parameter (h1) is the element before which the new element will be inserted.

## Scoped querySelector usage

- You can make a `querySelector` more specific by scoping it inside another element.
- Example:
  ```js
  let container = document.querySelector("header .container");
  ```

## Selecting specific children in the DOM

- You can use `querySelector()` with CSS pseudo-classes to target specific children:

  ```js
  let item = document.querySelector(".list-group-item");
  item.style.color = "red"; // selects the first matching element

  let lastItem = document.querySelector(".list-group-item:last-child");
  lastItem.style.color = "blue"; // selects the last child

  let secondItem = document.querySelector(".list-group-item:nth-child(2)");
  secondItem.style.color = "yellow"; // selects the second child
  ```

## HTMLCollection vs NodeList

- `document.getElementsByClassName()` returns an **HTMLCollection**, not an array.
- HTMLCollections **do not support array methods** like `.forEach()` directly.
- `document.querySelectorAll()` returns a **NodeList**, which **does** support `.forEach()`.
- To use array methods on an HTMLCollection, convert it first:
  ```js
  Array.from(items).forEach((item) => (item.style.backgroundColor = "red"));
  ```

## Best practice after handling input\*\*

- After processing an input value (e.g., clicking a button), clear the input so it’s ready for new text.
- Example:
  ```js
  button.addEventListener("click", () => {
    console.log(input.value);
    input.value = ""; // clear input
  });
  ```

---

## The `.focus()` method

`input.focus()` moves the cursor into the input field.

It’s useful for guiding user interaction (e.g., focusing the first field of a form).

const input = document.querySelector("#item");
`input.focus()`; // cursor is now active in the input box

---

## Working with `<input>` elements

- An `<input>` element is represented as a DOM object in JavaScript.
- The text typed into an input is stored in the `.value` property.
  ```js
  const input = document.querySelector("#item");
  console.log(input.value); // logs whatever the user typed
  ```

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

- To append multiple elements at once use `element.append()`

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
