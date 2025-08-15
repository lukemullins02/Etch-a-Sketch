const container = document.querySelector(".container");

// function numOfDivs(num) {
//   for (let i = 0; i < num; i++) {
//     let column = document.createElement("div");
//     column.classList.add("column");
//     for (let j = 0; j < num; j++) {
//       let row = document.createElement("div");
//       row.classList.add("row");
//       row.style.border = "1px solid black";

//       column.appendChild(row);
//     }
//     container.appendChild(column);
//   }
// }

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

numOfDivs(100);
