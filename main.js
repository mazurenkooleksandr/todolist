const addInput = document.querySelector("#addInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");

function createList() {
  if (addInput.value !== "") {
    return createParagraf();
  } else {
    alert("Введіть задачу");
  }
}

function createParagraf() {
  let paragraf = document.createElement("p");
  list.appendChild(paragraf);
  paragraf.innerHTML = `
        <span class="spanInput">${addInput.value}</span>
        <button class="btnDelete">X</button>
    `;
  addInput.value = "";
  return checkParagraf();
}

function checkParagraf() {
  let span = document.querySelectorAll(".spanInput");
  let btn = document.querySelectorAll(".btnDelete");

  for (let key of span) {
    key.onclick = function () {
      this.classList.toggle("lineThrough");
    };
  }
  for (let key of btn) {
    key.onclick = function () {
      this.parentNode.remove();
    };
  }
}

addBtn.addEventListener("click", createList);
