# Key Learnings from Practice Exercises

This document collects key takeaways from each exercise.  
They reflect the concepts, best practices, and insights gained while completing coding challenges.

---

## Using `reduce()` to Build Objects from Arrays

- `reduce()` can be used to **transform an array into an object**, not just to sum numbers.
- The **accumulator** can be an object that is built up step by step.
- On each iteration:
  - Add a new property to the accumulator.
  - **Always return the accumulator**, so it carries over to the next iteration.
- Start `reduce()` with an **empty object `{}`** when you want to build one.
- This pattern is ideal for **grouping or indexing data by an ID** without mutating the original array.

```js
return arr.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

// Example

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(arr) {
  return arr.reduce((object, currentItem) => {
    object[currentItem.id] = currentItem;
    return object;
  }, {});
}

let usersById = groupById(users);
```

## Returning Objects from Arrow Functions

When returning an **object literal** from a concise arrow function, you must wrap the object in parentheses.  
Otherwise, JavaScript thinks the `{}` is a **function body**, not an object.

**Why?**

```js
=> ({ ... }) // returns an object.

=> { ... } // starts a function block.

// Example:

users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
```

## Mapping Objects Without Mutating Data

When using `Array.map()`, always return **new objects** instead of modifying the originals.  
Mutating the source array can cause hidden bugs, data loss, and unpredictable behavior—especially in larger apps.

```js
// Bad (mutates original objects):

let usersMapped = users.map((u) => {
  u.fullName = `${u.name} ${u.surname}`;
  delete u.name;
  delete u.surname;
  return u;
});

// GOOD (doesn't mutates original objects):

let usersMapped = users.map((u) => ({
  fullName: `${u.name} ${u.surname}`,
  id: u.id,
}));
```

## Dynamically Adding Object Properties with Bracket Notation

- **Bracket notation** allows you to set both **property values** and **property names** dynamically.
- This is useful when property names come from **user input**, variables, or computed values.
- Dot notation **cannot** do this — only brackets allow variable-based keys.

### Example

```js
const person = {
  name: "Bob",
  age: 32,
};

// Dynamic property name + value
const myDataName = "height";
const myDataValue = "1.75m";

person[myDataName] = myDataValue;

console.log(person.height); // "1.75m"
// Here, "height" becomes a new property on the object.

// The same pattern works with real user input:

const key = nameInput.value;
const value = nameValue.value;

person[key] = value; // dynamically creates person[key]
```

## The `for...in` Loop in JavaScript

- `for...in` is used to **iterate over all enumerable property keys** of an object.
- It loops through keys, not values — but you can access values using bracket notation.
- Useful for inspecting objects, logging properties, or processing dynamic key/value pairs.

### Example

```js
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  console.log(key); // "name", "age", "isAdmin"
  console.log(user[key]); // "John", 30, true
}
```

## Are Objects Ordered in JavaScript?

- JavaScript objects are **ordered in a special way**:
  - **Integer-like keys** (e.g., `"1"`, `"41"`, `"49"`) are always iterated **first**, in **ascending numeric order**.
  - **All other keys** (non-integers) appear **in the order they were created**.

### Integer-like keys

A key is treated as an _integer property_ if converting it to a number and back keeps it the same:

```js
String(Math.trunc(Number("49"))); // "49"  → integer key
String(Math.trunc(Number("+49"))); // "49" ≠ "+49" → NOT integer
String(Math.trunc(Number("1.2"))); // "1" ≠ "1.2" → NOT integer
```

## Property Value Shorthand & Property Name Rules in JavaScript

### Shorthand Properties

- If variable names match property names, you can omit `key: value`.
- Shorthand can be mixed with normal properties.

```js
function makeUser(name, age) {
  return { name, age }; // shorthand
}

let user = {
  name, // shorthand
  age: 30, // normal
};
```

### Property Name Rules

Object property names can be **any string**, including reserved words and numbers.

```js
let obj = {
  for: 1,
  let: 2,
  return: 3,
  0: "test",
};

console.log(obj.for + obj.let + obj.return); // 6
console.log(obj[0]); // "test"
console.log(obj["0"]); // "test"
```

### Special Case: **proto**

Assigning a non-object to **proto** is ignored.

```js
let obj = {};
obj.__proto__ = 5;
console.log(obj.__proto__); // still an object
```

## Property Existence in JavaScript (`in` Operator)

- Accessing a missing property returns **undefined**, not an error.
- `"key" in object` checks whether a property **actually exists**, even if its value is `undefined`.

**Examples**

```js
// Basic existence check
let user = {};
console.log(user.noSuchProp === undefined); // true

// Using the "in" operator
let person = { name: "John", age: 30 };
console.log("age" in person); // true
console.log("blabla" in person); // false

// Using a variable as the key
let key = "age";## Property Existence in JavaScript (`in` Operator)

- Accessing a missing property returns **undefined**, not an error.
- `"key" in object` checks whether a property **actually exists**, even if its value is `undefined`.
```

**Examples**

```js
// Basic existence check
let user = {};
console.log(user.noSuchProp === undefined); // true

// Using the "in" operator
let person = { name: "John", age: 30 };
console.log("age" in person); // true
console.log("blabla" in person); // false

// Using a variable as the key
let key = "age";
console.log(key in person); // true

// Why "in" can matter
let obj = { test: undefined };
console.log(obj.test); // undefined (looks missing)
console.log("test" in obj); // true (actually exists)
```

## Computed Properties in JavaScript

- Computed properties let you **dynamically define object keys** using square brackets inside an object literal.
- Instead of hardcoding property names, you can use **variables** or **expressions** to generate them.
- `[expression]` inside an object literal means the **result of that expression becomes the property name**.
- This is more flexible than dot notation, which only works with fixed, valid identifiers.
- Computed properties enable dynamic object creation, cleaner syntax, and more expressive code.

**Examples**

```js
// Basic computed property
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // property name comes from the variable 'fruit'
};

alert(bag.apple); // -> 5 if "apple" was entered

// Equivalent expanded form without computed properties
let fruit2 = prompt("Which fruit?", "apple");
let bag2 = {};
bag2[fruit2] = 5;

// Computed property with expression
let item = "apple";
let store = {
  [item + "Computers"]: 5, // creates: store.appleComputers = 5
};

// Why square brackets?
// They allow:
// - variables as keys
// - dynamically generated names
// - multiword or special-character property names (if the result is a string)
```

**Basic Example**

```js
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // property name comes from the value of `fruit`
};

console.log(bag.apple); // 5 (if fruit = "apple")
```

## Accessing and Deleting Object Properties in JavaScript

- You can access object properties in two main ways: **dot notation** and **square bracket notation**.
- **Dot notation** is simple but only works with valid identifier names (no spaces, no special characters except `_` and `$`).
- **Bracket notation** works with _any string_ and allows using **variables** as keys.
- Properties can be **added**, **read**, or **deleted** using either notation.
- Multiword property names **must** use brackets because the dot syntax cannot parse them.

**Examples**

```js
// Basic object
let user = {
  name: "John",
  age: 30,
};

// Access (dot notation)
alert(user.name); // John
alert(user.age); // 30

// Add a property
user.isAdmin = true;

// Delete a property
delete user.age;

// Multiword property → must use quotes
let user2 = {
  name: "John",
  "likes birds": true, // requires quotes
};

// Bracket notation (works with any key)
user2["likes birds"] = true;
alert(user2["likes birds"]); // true
delete user2["likes birds"];

// Using variables as keys
let key = "name";
alert(user[key]); // "John"

// Dot notation cannot use variables
alert(user.key); // undefined (looks for property literally named "key")
```

## What an Object Consists Of in JavaScript

- An object is created using `{ ... }` and can optionally contain **properties**.
- Each property is a **key–value pair**:
  - **Key** → always a string (the property name)
  - **Value** → can be anything (number, string, function, array, another object, etc.)

```js
let user = {
  name: "Lennard",
  age: 27,
  isAdmin: true,
};
```

## Creating an Empty Object in JavaScript

- JavaScript provides two ways to create an empty object:

  - **Object constructor syntax**
    ```js
    let obj = new Object();
    ```
  - **Object literal syntax** (most common and preferred)
    ```js
    let obj = {};
    ```

- The `{}` form is called an **object literal** and is used in most codebases because it’s shorter, clearer, and more idiomatic.

## Why `mouseover` works but `mouseenter` does not in event delegation

- `mouseover` **bubbles**, so the event moves up from the child element to the parent container.
- Because it bubbles, a parent can listen for `mouseover` and react when any child triggers it.
- `mouseenter` **does not bubble**, so the parent never receives the event.
- For event delegation, always use events that bubble:
  - **Good:** `click`, `mouseover`, `mouseout`, `keyup`, `keydown`
  - **Not good:** `mouseenter`, `mouseleave`, `focus`, `blur`

## The `git reset --hard HEAD~1` command

- `git reset --hard HEAD~1` deletes the **most recent commit** from your branch.
- It moves `HEAD` (and your branch pointer) back by one commit — as if the last commit never happened.
- The `--hard` flag also resets your working directory and staging area to match the previous commit, **removing all changes** from that last commit.

  **Useful for:**

- Completely removing a bad or accidental commit.
- Starting fresh when the last commit was a mistake.

⚠️ Warning:
This is **destructive** — you lose the commit and all its changes. Only use it if you're sure you don’t need that work anymore.

## The `git remote -v` command

- `git remote -v` shows all remotes connected to your local repository.
- It lists:
  - **Fetch URL** → where your repo pulls updates from.
  - **Push URL** → where your repo pushes commits to.

## Keeping Feature Branches Up-to-Date (Rebasing Workflow)

- Developers often do all work on **feature branches** and only update **main** when a feature is ready.
- To keep a feature branch clean and conflict-free, you regularly **rebase it onto the latest main**.
- Rebasing updates your branch so it _appears as if it was created from the newest main_, keeping history tidy.

- Typical clean workflow:

  1. Create a feature branch:
     `git checkout -b newFeature`
  2. Work normally on that branch.
  3. Keep it updated:
     `git fetch`
     `git rebase origin/main`
  4. When finished, update main:
     `git checkout main`
     `git pull`
  5. Merge your feature into main:
     `git merge newFeature`
  6. Push your clean main branch:
     `git push`

- Useful because:
  - Avoids big merge conflicts later.
  - Keeps commit history linear and easy to read.
  - Ensures your feature stays compatible with the latest main.

## The `git pull` command

- `git pull` updates your **local branch** by bringing in the newest changes from the remote **and** automatically merging them into your working files.
- It’s actually two commands in one:

  - `git fetch` (get the newest changes)
  - `git merge` (add them into your current branch)

- Think of it like **checking your mailbox AND immediately opening the letters and putting them on your desk**.
  Your workspace changes right away.

- Example:
  `git pull origin main`

- Useful for:
  - Staying up to date with the remote branch you’re working on
  - Automatically merging teammates’ changes into your work
  - Quickly syncing your local branch with GitHub

## The `git fetch` command

- `git fetch` updates your **local view of the remote repository** without changing your working files or your current branch.
- It downloads:

  - New commits from the remote
  - Updated remote branches (e.g., `origin/main`)

- Think of it like **checking your mailbox**:
  you bring all the new letters inside, but you **don’t open them** and **don’t change anything in your house**.

- This means your files stay exactly the same — you just get the latest information from GitHub.

- Example:
  `git fetch origin`

- Useful for:
  - Seeing what changed on the remote before you merge or pull
  - Staying up to date without modifying your current work
  - Reviewing changes safely before integrating them

## The `git rebase -i` command

- `git rebase -i` (interactive rebase) allows you to **edit your commit history** before pushing changes.
- You can:

  - **Reword** commit messages to make them clearer.
  - **Squash** several small commits into one clean commit.
  - **Reorder** commits for a more logical history.
  - **Drop** commits you no longer need.

- Think of it like tidying your notes before submitting them — you merge, rename, and remove unnecessary pages to make everything look clean and professional.

- Example:
  `git rebase -i HEAD~5` lets you edit the last 5 commits.

- Useful for:
  - Cleaning up messy commit histories before merging or pushing.
  - Making your repo easier to read and more professional-looking.

## Git Rebase

- `git rebase` is used to **move or replay your commits** on top of another branch.
- It’s like taking your work and pretending you started from a newer version of the project.
- This keeps your history **clean and linear**, as if you had always worked on the latest version.
- Use it only for **local branches**, because it rewrites history.

Think of it like moving your notes to the last page of an updated notebook — same ideas, but now in the right order.

Use it to update your branch with the latest main changes.

---

## Git Cherry-Pick

- `git cherry-pick` lets you **copy a specific commit** from one branch and apply it to another.
- You can pick just one or a few commits without merging the entire branch.
- It creates a **new copy** of that commit on your current branch.

Imagine picking a single good paragraph from your friend’s notebook and adding it to yours — you don’t copy everything, just the part you need.

Use it to bring over one or two useful changes.

## Understanding `HEAD` and Detached `HEAD` in Git

`HEAD` in Git is like a **bookmark** that tells you _where you currently are_ in your project’s history.
It points to the **latest commit** on the branch you’re working on.

- When you make a new commit, `HEAD` moves forward to that new commit.
- When you switch branches, `HEAD` moves to the tip of that branch.
- If you check out an old commit, `HEAD` becomes **detached** — meaning you’re viewing an older snapshot, not working on a branch.

## What happens when you `checkout <commit>`

Running `git checkout <old-commit-hash>` lets you **travel back in time** to see your project exactly as it was at that commit.
For example, checking out a commit from _before your UI update_ will show your old version when you open it in VS Code.

This is called a **detached HEAD state** — you can look around or test code safely, but if you make changes here, they’ll be lost unless you save them on a new branch.

**How to save your changes**?

If you want to keep experimenting on that old version, create a new branch from it:

```bash
git checkout -b old-version-test
```

## Understanding `git push -u origin <branch>`

When pushing a new branch to GitHub, the `-u` flag links your local branch to its remote version.
This means after the first push, you can simply use `git push` or `git pull` without retyping the branch name.

**Why it’s useful:**

- Simplifies workflow for ongoing branches.
- Keeps local and remote branches automatically connected.
- Ideal when creating new feature or refactor branches.

**Example:**

```bash
git push -u origin feature/ui-update
```

## Git Merge Conflicts

- A **merge conflict** happens when two branches edit the same part of a file.
- Git asks you to decide which version to keep.
- **Fix:** Open the file, choose what to keep, save, then run:
  ```bash
  git add <file>
  git commit
  ```
  Most code editors help you resolve conflicts with simple “accept” options.

## The `insertAfter()` Function (Custom)

- JavaScript **does not have a built-in** `insertAfter()` method like `insertBefore()`.
- You can easily **create your own** `insertAfter()` function using `insertBefore()` together with `.nextSibling`.
- This approach works even if the reference element is the **last child** of its parent.

---

Example:

```js
function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

const newDiv = document.createElement("div");
newDiv.textContent = "Inserted after!";

const target = document.querySelector("#target");
insertAfter(newDiv, target);
```

`existingNode.nextSibling` represents the element **after** the reference node (or `null` if none exists).

Passing `null` to `insertBefore()` automatically **appends** the element to the end of the parent,  
making this function safe for **all positions**.

## Variable Scope and Best Practices

Variables can be declared **inside** or **outside** of functions, depending on who needs access to them and how long they should exist.

Global Variables (Outside Functions)

- Declared **outside** of any function, they can be accessed by any part of your code.
- Useful for values that represent a **shared or persistent state**, such as game scores or settings.  
  **Be careful** — too many global variables can make debugging difficult since any function can modify them.

Local variables prevent accidental overwrites and make functions more modular.

Best Practices

- Prefer `const` unless the variable’s value will change — then use `let`.
- Default to **local variables** whenever possible.
- Use **globals** only for shared state that needs to persist.
- For larger projects, store global values inside a single object to avoid clutter

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
