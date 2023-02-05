const createListHeader = (name) => {
  const header = createContainer("div", { class: "p-3 my-1 d-flex" });
  const headerText = createContainer("p", {
    text: name,
    class: "listName flex-fill",
  });
  const headerRenameButton = createContainer("button", {
    text: "Rename",
    class: "btn btn-warning",
    function: () => {
      editText(headerText);
    },
  });
  const headerRemoveButton = createContainer("button", {
    text: "Remove",
    class: "btn btn-danger",
    function: () => {
      header.parentElement.remove();
      saveData();
    },
  });
  addElementsToContainer(header, [
    headerText,
    headerRenameButton,
    headerRemoveButton,
  ]);
  return header;
};

const addNewList = (name, elements = []) => {
  let lis = new list(name);
  const container = createContainer("div", {
    class: "list container p-1 my-1 border col-6",
  });
  const header = createListHeader(lis.name);
  const elementContainer = createElementContainer();
  const newListContainer = createListElements(elementContainer);
  addElementsToContainer(container, [
    header,
    newListContainer,
    elementContainer,
  ]);
  elements.forEach((element) => {
    elementContainer.appendChild(createNewElement(element));
  });
  listsContainer.appendChild(container);
};
