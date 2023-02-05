const popup = document.getElementById("pop-up");

const showPopup = () => {
  popup.classList.add("showPopup");
};

const hidePopup = () => {
  popup.classList.remove("showPopup");
};

const addEditElementsToPopup = (element) => {
  const section = createContainer("section", {
    class: "editNameContainer p-3 d-flex ",
  });
  const div = createContainer("div", {
    class: "container bg-primary col-4 p-3 my-1 d-flex",
  });
  const input = createContainer("input", {
    class: "flex-fill",
    placeholder: "New name",
  });
  const saveButton = createContainer("button", {
    class: "btn btn-light",
    text: "Accept",
    function: () => {
      element.innerText = input.value;
      section.remove();
      hidePopup();
      saveData();
    },
  });
  const cancelButton = createContainer("button", {
    class: "btn btn-light",
    text: "Cancel",
    function: () => {
      section.remove();
      hidePopup();
    },
  });
  popup.appendChild(section);
  section.appendChild(div);
  addElementsToContainer(div, [input, saveButton, cancelButton]);
};

const editText = (element) => {
  addEditElementsToPopup(element);
  showPopup();
};
