const getLists = () => {
  const existingLists = document.getElementsByClassName("list");
  let lists = [];
  for (let item of existingLists) {
    let list = [];
    let listName = item.getElementsByClassName("listName");
    let listElements = item.getElementsByClassName("element");
    let elements = [];
    for (let tag of listElements) {
      elements.push(tag.innerText);
    }
    list = [listName[0].innerText, elements];
    lists.push(list);
  }
  return lists;
};

const saveData = () => {
  let savedData = getLists();
  localStorage.setItem("lists", JSON.stringify(savedData));
};

const loadData = () => {
  let loadedData = JSON.parse(localStorage.getItem("lists"));
  console.log(loadedData);
  for (let list of loadedData) {
    addNewList(list[0], list[1]);
  }
};
