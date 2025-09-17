const list = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let inputValue = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const spanItem = document.createElement("span");
  const deleteButton = document.createElement("button");
  listItem.append(spanItem, deleteButton);
  spanItem.textContent = `${inputValue} `;
  deleteButton.textContent = "Delete";
  list.appendChild(listItem);
  input.focus();
  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });
});
