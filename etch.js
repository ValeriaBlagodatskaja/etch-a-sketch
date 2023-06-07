const container = document.querySelector(".container");

function generateGrid(xAmount, yAmount) {
  const existingContainer = document.querySelector(".grid-container");
  if (existingContainer) {
    existingContainer.remove();
  }

  const containerGrid = document.createElement("div");
  containerGrid.classList.add("grid-container");

  containerGrid.style.gridTemplateColumns = `repeat(${xAmount}, 36px)`;
  containerGrid.style.gridTemplateRows = `repeat(${yAmount}, 36px)`;

  for (let xAxis = 0; xAxis < xAmount; xAxis++) {
    for (let yAxis = 0; yAxis < yAmount; yAxis++) {
      const div = document.createElement("div");
      containerGrid.appendChild(div);
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
      });
    }
  }

  container.appendChild(containerGrid);
}
generateGrid(16, 16);

function resizeGrid() {
  const input = prompt(
    "Select how many pixels per row and columns",
    "Choose between 10 and 100"
  );
  if (input === null) {
    // User clicked Cancel
    return;
  }
  const inputNum = Number(input);
  if (inputNum > 100 || inputNum < 10 || isNaN(inputNum)) {
    alert("Invalid input. Must be a number between 10 and 100!");
  } else {
    generateGrid(inputNum, inputNum);
  }
}

const button = document.querySelector(".button");
button.addEventListener("click", () => resizeGrid());
