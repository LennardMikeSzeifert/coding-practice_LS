const form = document.querySelector(`#addForm`);
const itemList = document.querySelector(`#items`);
let filter = document.querySelector(`.col-md-6 .form-control`);

// Form submit event

form.addEventListener(`submit`, addItem);

// Delete event

itemList.addEventListener(`click`, removeItem);

// Delete function

function removeItem(e) {
  if (e.target.classList.contains(`delete`)) {
    if (confirm(`Are you sure?`)) {
      e.target.parentElement.remove();
    }
  }
}

// Filter items

filter.addEventListener(`keyup`, filterItem);

// Filter function

function filterItem(e) {
  // Convert text to lower case

  let filterInput = filter.value.toLowerCase();

  // Get all lis of itemList

  let lisItemList = itemList.querySelectorAll(`li`);

  // Convert to array

  lisItemList.forEach(function (item) {
    let itemName = item.firstChild.textContent;

    // Check match

    if (itemName.toLowerCase().indexOf(filterInput) != -1) {
      item.style.display = `block`;
    } else {
      item.style.display = `none`;
    }
  });
}

// Add item function

function addItem(e) {
  e.preventDefault();

  // Get input value

  let newItem =
    document.querySelector(`.form-inline .form-control`).value + ` `;

  // Create new li element

  let li = document.createElement(`li`);

  // Add class

  li.className = `list-group-item`;

  // Add text node with input value

  li.appendChild(document.createTextNode(newItem));

  itemList.appendChild(li);

  // Add delete button

  let deleteBtn = document.createElement(`button`);

  // Add classes to delete button

  deleteBtn.className = `btn btn-danger btn-sm float-right delete`;

  // Append text node

  deleteBtn.appendChild(document.createTextNode(`X`));

  // Append deleteBtn

  li.appendChild(deleteBtn);

  // Append li to list

  itemList.appendChild(li);
}
