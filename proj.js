const container = document.querySelector(".container");
const btn = document.querySelector("#newGrid");

function numOfDivs(num) {
  let size = container.clientWidth / num;
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      let row = document.createElement("div");
      row.classList.add("row");
      row.style.width = `${size}px`;
      row.style.height = `${size}px`;
      container.appendChild(row);
    }
  }
}

let def = 16;
numOfDivs(def);

function gridSize() {
  let num = prompt("Please enter new grid size.");
  num = Number(num);
  if (Number.isNaN(num)) {
    alert("Please enter a number.");
  } else if (num > 100) {
    alert("Please enter a number less than 100.");
  } else if (num <= 0) {
    alert("Please enter a number greater than 0.");
  } else {
    let child = container.lastElementChild;
    while (child) {
      container.removeChild(child);
      child = container.lastElementChild;
    }
    numOfDivs(num);
  }
}

btn.addEventListener("click", () => {
  gridSize();
});
