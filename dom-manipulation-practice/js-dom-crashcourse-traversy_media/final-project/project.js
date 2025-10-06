const form = document.querySelector(`#addForm`);
const itemList = document.querySelector(`#items`);

// Form submit event

form.addEventListener(`sumbit`, addItem);

// Add item

function addItem(e) {
  e.stopDefault();
  console.log(1);
}
