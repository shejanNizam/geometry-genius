document.getElementById("btn-triangle").addEventListener("click", function () {
  calculateArea("triangle-base", "triangle-height", areaTri);
});
document.getElementById("btn-rectangle").addEventListener("click", function () {
  calculateArea("rectangle-base", "rectangle-height");
});
document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    calculateArea("parallelogram-base", "parallelogram-height");
  });
document.getElementById("btn-rhombus").addEventListener("click", function () {
  calculateArea("rhombus-base", "rhombus-height");
});
document.getElementById("btn-pentagon").addEventListener("click", function () {
  calculateArea("pentagon-base", "pentagon-height");
});
document.getElementById("btn-ellipse").addEventListener("click", function () {
  calculateArea("ellipse-base", "ellipse-height");
});

function calculateArea(id) {
  const baseTriString = document.getElementById(id).value;
  const baseTri = parseInt(baseTriString);
  //   console.log(baseTri);

  const heightTriString = document.getElementById(id).value;
  const heightTri = parseInt(heightTriString);
  //   console.log(heightTri);

  const areaTri = 0.5 * baseTri * heightTri;
  //   console.log(areaTri);

  //   append child
  const container = document.getElementById("parent-container");
  const li = document.createElement("li");
  li.innerText = `Triangle: ${id} cm^2`;
  li.classList.add("new-li");
  container.appendChild(li);

  //   remove child
  const allList = document.getElementsByClassName("new-li");
  for (const item of allList) {
    item.addEventListener("click", function (e) {
      e.target.parentNode.removeChild(e.target);
    });
  }
}
