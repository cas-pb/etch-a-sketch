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
