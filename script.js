console.log("hello world");

const divContainer = document.querySelector(".container");
const button = document.querySelector('.create-grid');

// create 16 x 16 grid
const makeGrid = (size) => {

  // prevent grid from stacking up when entering a number when prompted
  divContainer.innerHTML = '';
  // div size
  divSize = 850 / size;

  for (let i = 0; i < size * size; i++) {
    // create div
    const div = document.createElement("div");
    div.classList.add("div");
    div.style.width = `${divSize}px`;
    div.style.height = `${divSize}px`;
    // include padding and border to keep box shape
    div.style.boxSizing = 'border-box';
    divContainer.appendChild(div);

  // selects newly created div
    const divGrid = document.querySelectorAll("div");

    div.addEventListener("mouseenter", (event) => {
      div.style.backgroundColor = "#f88b69";
      console.log("helo");
    });
  }
};

makeGrid(16);

// replace existing grid and replace with new grid size depend on number
function makeButton() {
  button.addEventListener('click', (event) => {
    let newGridSize = prompt('Enter a number between 1 to 100');
    // converts string numbers to integer.e.g "123" (string) to 123
    newGridSize = parseInt(newGridSize);

    if (newGridSize && newGridSize > 0 && newGridSize <= 100) {
      makeGrid(newGridSize);
    }

    else {
      alert('Please enter a valid number between 0 and 100');
    }
  })
}

makeButton();

// resets grid to 16 x 16 squares
function resetGrid() {
  const resetGrid = document.querySelector('.reset-grid');
  resetGrid.addEventListener('click', (event) => {
    makeGrid(16)
  })
}

resetGrid();