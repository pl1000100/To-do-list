const createNewElement = (name) => {
  const element = createContainer("div", { class: "p-1 d-flex flex-row" });
  const elementText = createContainer("p", {
    text: name,
    class: "element flex-fill my-2",
  });

  const elementEditButton = createContainer("button", {
    text: "Rename",
    class: "btn btn-warning",
    function: () => {
      editText(elementText);
    },
  });

  const elementRemoveButton = createContainer("button", {
    text: "Remove",
    class: "btn btn-danger",
    function: () => {
      element.remove();
      saveData();
    },
  });

  addElementsToContainer(element, [
    elementText,
    elementEditButton,
    elementRemoveButton,
  ]);
  return element;
};

const createListElements = (elementContainer) => {
  const newListContainer = createContainer("div", { class: "p-3 my-1 d-flex" });
  const newListContainerInput = createContainer("input", {
    class: "flex-fill input-group-text",
    placeholder: "Element name ",
  });
  const newListContainerAddButton = createContainer("button", {
    text: "Add",
    class: "btn btn-primary",
    function: () => {
      elementContainer.appendChild(
        createNewElement(newListContainerInput.value)
      );
      newListContainerInput.value = "";
      saveData();
    },
  });
  addElementsToContainer(newListContainer, [
    newListContainerInput,
    newListContainerAddButton,
  ]);
  return newListContainer;
};

const createElementContainer = () => {
  const elementContainer = createContainer("div", {
    class: "elements p-3 my-1 d-flex flex-column",
  });
  return elementContainer;
};
