newListButton.addEventListener("click", () => {
  addNewList(newListName.value);
  newListName.value = "";
  saveData();
});

loadData();
