console.log("hello world");

const divContainer = document.querySelector(".container");
const button = document.querySelector('.create-grid');

// create 16 x 16 grid
const makeGrid = () => {

  // prevent grid from stacking up when entering a number when prompted
  divContainer.innerHTML = '';
  for (let i = 0; i < 16 * 16; i++) {
    // create div
    const div = document.createElement("div");
    div.classList.add("div");
    divContainer.appendChild(div);

  // selects newly created div
    const divGrid = document.querySelectorAll("div");

    div.addEventListener("mouseenter", (event) => {
      div.style.backgroundColor = "#f88b69";
      console.log("helo");
    });
  }
};

makeGrid();
