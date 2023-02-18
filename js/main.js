document.getElementById("btn-triangle").addEventListener("click", function () {
  calculateAreaTri();
});
document.getElementById("btn-rectangle").addEventListener("click", function () {
  calculateAreaRec();
});
document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    calculateAreaPar();
  });

document.getElementById("btn-rhombus").addEventListener("click", function () {
  calculateAreaRho();
});
document.getElementById("btn-pentagon").addEventListener("click", function () {
  calculateAreaPen();
});
document.getElementById("btn-ellipse").addEventListener("click", function () {
  calculateAreaEll();
});

calculateAreaTri = () => {
  // tri calc
  const baseTriString = document.getElementById("triangle-base").value;
  const baseTri = parseInt(baseTriString);
  const heightTriString = document.getElementById("triangle-height").value;
  const heightTri = parseInt(heightTriString);

  const areaTri = 0.5 * baseTri * heightTri;

  //   append child
  const container = document.getElementById("parent-container");
  const li = document.createElement("li");
  li.innerText = ` Triangle: ${areaTri} cm^2`;
  li.classList.add("new-li");
  container.appendChild(li);

  //   remove child
  const allList = document.getElementsByClassName("new-li");
  for (const item of allList) {
    item.addEventListener("click", function (e) {
      e.target.parentNode.removeChild(e.target);
    });
  }
};

calculateAreaRec = () => {
  // rec calc
  const baseRecString = document.getElementById("rectangle-base").value;
  const baseRec = parseInt(baseRecString);
  const heightRecString = document.getElementById("rectangle-height").value;
  const heightRec = parseInt(heightRecString);

  const areaRec = baseRec * heightRec;

  //   append child
  const container = document.getElementById("parent-container");
  const li = document.createElement("li");
  li.innerText = ` Rectangle: ${areaRec} cm^2`;
  li.classList.add("new-li");
  container.appendChild(li);

  //   remove child
  const allList = document.getElementsByClassName("new-li");
  for (const item of allList) {
    item.addEventListener("click", function (e) {
      e.target.parentNode.removeChild(e.target);
    });
  }
};

calculateAreaPar = () => {
  // par calc
  const baseParString = document.getElementById("parallelogram-base").value;
  const basePar = parseInt(baseParString);
  const heightParString = document.getElementById("parallelogram-height").value;
  const heightPar = parseInt(heightParString);

  const areaPar = basePar * heightPar;

  //   append child
  const container = document.getElementById("parent-container");
  const li = document.createElement("li");
  li.innerText = `Parallelogram: ${areaPar} cm^2`;
  li.classList.add("new-li");
  container.appendChild(li);

  //   remove child
  const allList = document.getElementsByClassName("new-li");
  for (const item of allList) {
    item.addEventListener("click", function (e) {
      e.target.parentNode.removeChild(e.target);
    });
  }
};
calculateAreaRho = () => {
  // rho calc
  const baseRhoString = document.getElementById("rhombus-base").value;
  const baseRho = parseInt(baseRhoString);
  const heightRhoString = document.getElementById("rhombus-height").value;
  const heightRho = parseInt(heightRhoString);

  const areaRho = 0.5 * baseRho * heightRho;

  //   append child
  const container = document.getElementById("parent-container");
  const li = document.createElement("li");
  li.innerText = ` Rhombus: ${areaRho} cm^2`;
  li.classList.add("new-li");
  container.appendChild(li);

  //   remove child
  const allList = document.getElementsByClassName("new-li");
  for (const item of allList) {
    item.addEventListener("click", function (e) {
      e.target.parentNode.removeChild(e.target);
    });
  }
};
calculateAreaPen = () => {
  // tri calc
  const basePenString = document.getElementById("pentagon-base").value;
  const basePen = parseInt(basePenString);
  const heightPenString = document.getElementById("pentagon-height").value;
  const heightPen = parseInt(heightPenString);

  const areaPen = 0.5 * basePen * heightPen;

  //   append child
  const container = document.getElementById("parent-container");
  const li = document.createElement("li");
  li.innerText = ` Pentagon: ${areaPen} cm^2`;
  li.classList.add("new-li");
  container.appendChild(li);

  //   remove child
  const allList = document.getElementsByClassName("new-li");
  for (const item of allList) {
    item.addEventListener("click", function (e) {
      e.target.parentNode.removeChild(e.target);
    });
  }
};
calculateAreaEll = () => {
  // tri calc
  const baseEllString = document.getElementById("ellipse-base").value;
  const baseEll = parseInt(baseEllString);
  const heightEllString = document.getElementById("ellipse-height").value;
  const heightEll = parseInt(heightEllString);

  const areaEllAll = 3.14 * baseEll * heightEll;
  const areaEll = areaEllAll.toFixed(2);

  //   append child
  const container = document.getElementById("parent-container");
  const li = document.createElement("li");
  li.innerText = `Ellipse: ${areaEll} cm^2`;
  li.classList.add("new-li");
  container.appendChild(li);

  //   remove child
  const allList = document.getElementsByClassName("new-li");
  for (const item of allList) {
    item.addEventListener("click", function (e) {
      e.target.parentNode.removeChild(e.target);
    });
  }
};
