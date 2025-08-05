const container = document.querySelector(".container");

function numOfDivs(num) {
  for (let i = 0; i < num; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    for (let j = 0; j < num; j++) {
      let row = document.createElement("div");
      row.classList.add("row");
      row.style.border = "2px solid black";
      row.textContent = "hello";
      column.appendChild(row);
    }
    container.appendChild(column);
  }
}

numOfDivs(16);
