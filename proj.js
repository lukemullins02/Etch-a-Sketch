const container = document.querySelector(".container");
const btn = document.querySelector("#newGrid");
const resetBtn = document.querySelector("#reset");

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
  let changeRow = document.querySelectorAll(".row");

  changeRow.forEach((row) => {
    row.addEventListener("mousemove", () => {
      let randomColor = getRandomColor();
      row.style.backgroundColor = randomColor;
    });
  });

  resetBtn.addEventListener("click", () => {
    changeRow.forEach((row) => {
      row.style.backgroundColor = "#b6b6b6";
    });
  });
}

let def = 16;
numOfDivs(def);

function gridSize() {
  let num = prompt("Please enter new grid size.");
  num = Number(num);
  if (Number.isNaN(num)) {
    alert("Please enter a number.");
  } else if (num > 100) {
    alert("Please enter a number less than or equal to 100.");
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

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
}

btn.addEventListener("click", () => {
  gridSize();
});
