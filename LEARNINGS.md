# Key Learnings from Practice Exercises

This document collects key takeaways from each exercise.  
They reflect the concepts, best practices, and insights gained while completing coding challenges.

---

## Array.prototype.some()

- `new Date().getFullYear()` returns the current year as a 4-digit number (e.g. 2025).
- `some()` checks if **at least one** element in the array passes the condition.
- `some()` returns `true` or `false`, not the matching element.

---

## Array.prototype.every()

- `every()` returns a boolean indicating if all elements satisfy the condition.
- It does not return the matching element.
- Useful for early exit when only a truthy check is needed.

---

## Array.prototype.find()

- `find()` returns the first array item that fulfills the given function condition.

---

## Array.prototype.findIndex() and splice()

- `findIndex()` returns the index of the array item that satisfies the condition.
- `splice()` modifies the original array — it does not create a copy.

---

## repeatString task

- Combine strings using `+=`.

---

## removeFromArray (first approach)

- You can't copy the array to a new array using `.splice()` as it only modifies the given array.
- When using `.splice()` you can use `.findIndex()` with the function directly as the starting point without storing it in a variable.

---

## removeFromArray (improved approach)

- The rest parameter `...args` includes any amount of arguments.
- To select each item you need an array method compatible with rest parameters.
- It is safer to not mutate the original array.

---

## sumAll task

- `.unshift()` adds an item to the front of the array.
- When using `.reduce()` to get a sum, initialise the total to `0`.

---

## sumAll (improved approach)

- Include edge cases for better user accessibility.
- Avoid creating an array just to reduce it — sum directly in a loop.

---

## leapYears task

- When using multiple `if` conditionals, check more specific
  conditions first before general ones to ensure correct logic.

---

## leapYears (refactored)

- Breaking down complex conditionals into descriptive boolean
  variables makes the code easier to read and maintain.

---

## tempConversion (refactored)

- Using `5/9` instead of `0.555555556` improves readability and avoids rounding drift.
- `Math.round(... * 10) / 10` keeps the result numeric while rounding to one decimal.

---

## Commit conventions — setup commits

- For setting up base files (like README.md, index.html, or script.js), it is best practice to use chore instead of feat.

- feat should be reserved for commits that add actual user-facing functionality.

---

## DOM manipulation tasks

- When altering text with `text.textContent`, use `=` to assign the text instead of wrapping it in `("")`.
  e.g. para.textContent = "Hey I'm red!";

---
