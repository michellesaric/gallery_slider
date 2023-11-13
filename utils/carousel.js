const firstRow = document.querySelector(".gallery-slider__first-row");
const secondRow = document.querySelector(".gallery-slider__second-row-images");

const leftArrow = document.querySelector(".left-arrow-button");
const rightArrow = document.querySelector(".right-arrow-button");

let currentFirstRowIndex = 0;
let prevFirstRowIndex;

let currentSecondRowIndex = 0;
let prevSecondRowIndex;

const firstRowImages = document.querySelectorAll(".first-row-image");
const secondRowImages = document.querySelectorAll(".second-row-image");

const firstRowTotalImages = Object.keys(firstRowImages).length;
const secondRowTotalImages = Object.keys(secondRowImages).length;

let imageWidthFirstRow;
let imageWidthSecondRow;

rightArrow.addEventListener("click", () => {
  firstRow.classList.add("sliding-transition");
  secondRow.classList.add("sliding-transition");

  prevFirstRowIndex = currentFirstRowIndex;
  currentFirstRowIndex = (currentFirstRowIndex + 1) % firstRowTotalImages;

  prevSecondRowIndex = currentSecondRowIndex;
  currentSecondRowIndex = (currentSecondRowIndex + 1) % secondRowTotalImages;

  imageWidthFirstRow = firstRowImages[prevFirstRowIndex].clientWidth;
  imageWidthSecondRow = secondRowImages[prevSecondRowIndex].clientWidth;

  firstRow.style.transform = `translateX(-${imageWidthFirstRow}px)`;
  secondRow.style.transform = `translateX(-${imageWidthSecondRow}px)`;

  setTimeout(() => {
    firstRow.appendChild(firstRowImages[prevFirstRowIndex]);
    firstRow.classList.remove("sliding-transition");
    firstRow.style.transform = "";

    secondRow.appendChild(secondRowImages[prevSecondRowIndex]);
    secondRow.classList.remove("sliding-transition");
    secondRow.style.transform = "";
  }, 500);
});

leftArrow.addEventListener("click", () => {
  prevFirstRowIndex = currentFirstRowIndex;
  currentFirstRowIndex =
    (currentFirstRowIndex - 1 + firstRowTotalImages) % firstRowTotalImages;

  prevSecondRowIndex = currentSecondRowIndex;
  currentSecondRowIndex =
    (currentSecondRowIndex - 1 + secondRowTotalImages) % secondRowTotalImages;

  imageWidthFirstRow = firstRowImages[prevFirstRowIndex].clientWidth;
  imageWidthSecondRow = secondRowImages[prevSecondRowIndex].clientWidth;

  firstRow.style.transform = `translateX(-${imageWidthFirstRow}px)`;
  secondRow.style.transform = `translateX(-${imageWidthSecondRow}px)`;

  firstRow.insertBefore(
    firstRowImages[currentFirstRowIndex],
    firstRow.firstChild
  );
  secondRow.insertBefore(
    secondRowImages[currentSecondRowIndex],
    secondRow.firstChild
  );

  setTimeout(() => {
    firstRow.style.transform = "";
    firstRow.classList.add("sliding-transition");

    secondRow.style.transform = "";
    secondRow.classList.add("sliding-transition");
  }, 10);

  setTimeout(() => {
    firstRow.classList.remove("sliding-transition");
    secondRow.classList.remove("sliding-transition");
  }, 490);
});
