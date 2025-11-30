let taskContainer = document.querySelector(".taskContainer");
let input = document.querySelector("#input");
let addBtn = document.querySelector(".addBtn");

let list = [];

function renderedList(arr) {
  taskContainer.innerHTML = "";
  arr.map((obj) => {
    let { id, text } = obj;
    let div = document.createElement("div");
    div.classList.add("box");
    div.innerHTML = `
    <div class="taskBox">${text}</div>
    `;
    let delBtn = document.createElement("button");
    delBtn.className = "delete";
    delBtn.innerHTML = "Delete";
    delBtn.onclick = () => {
      removeTask(id);
    };
    div.append(delBtn);
    taskContainer.append(div);
  });
}

renderedList(list);

function addTask() {
  let newTask = { id: Date.now(), text: input.value };

  list.push(newTask);
  renderedList(list);
  input.value = "";
}
addBtn.addEventListener("click", addTask);

function removeTask(id) {
  let filterArray = list.filter((obj) => {
    return obj.id !== id;
  });
  list = filterArray;
  renderedList(list);
}
