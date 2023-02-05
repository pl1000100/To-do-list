const listsContainer = document.querySelector("#lists");
const newListButton = document.querySelector("#newListButton");
const newListName = document.querySelector("#newListNameInput");

class list {
  name;
  elements = [];
  constructor(name, elements = []) {
    this.name = name;
    this.elements = elements;
  }
}

const createContainer = (type, object) => {
  const container = document.createElement(type);
  if (object) {
    if (object.class) container.className = object.class;
    if (object.text) container.innerText = object.text;
    if (object.function) container.addEventListener("click", object.function);
    if (object.placeholder) container.placeholder = object.placeholder;
  }
  return container;
};

const addElementsToContainer = (container, elements) => {
  elements.forEach((element) => {
    container.appendChild(element);
  });
};
