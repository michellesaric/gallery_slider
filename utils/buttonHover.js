const leftArrowButton = document.querySelector(".left-arrow-button");
const rightArrowButton = document.querySelector(".right-arrow-button");

const leftArrowIcon = document.querySelector(".left-arrow");
const rightArrowIcon = document.querySelector(".right-arrow");

leftArrowButton.addEventListener("mouseover", function () {
  leftArrowIcon.src = "assets/icons/arrow-blue-left.png";
  console.log("hello");
});

leftArrowButton.addEventListener("mouseout", function () {
  leftArrowIcon.src = "assets/icons/arrow-gray-left.png";
});

rightArrowButton.addEventListener("mouseover", function () {
  rightArrowIcon.src = "assets/icons/arrow-blue-right.png";
});

rightArrowButton.addEventListener("mouseout", function () {
  rightArrowIcon.src = "assets/icons/arrow-gray-right.png";
});
