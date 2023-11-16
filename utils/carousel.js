$(document).ready(function () {
  const $firstRow = $(".gallery-slider__first-row");
  const $secondRow = $(".gallery-slider__second-row-images");
  const $leftArrow = $(".left-arrow-button");
  const $rightArrow = $(".right-arrow-button");

  let currentFirstRowIndex = 0;
  let prevFirstRowIndex;

  let currentSecondRowIndex = 0;
  let prevSecondRowIndex;

  const $firstRowImages = $(".first-row-image");
  const $secondRowImages = $(".second-row-image");

  const firstRowTotalImages = $firstRowImages.length;
  const secondRowTotalImages = $secondRowImages.length;

  let imageWidthFirstRow;
  let imageWidthSecondRow;

  let animationInProgress = false;

  $rightArrow.on("click", function () {
    if (animationInProgress) return;
    animationInProgress = true;

    $firstRow.addClass("sliding-transition");
    $secondRow.addClass("sliding-transition");

    prevFirstRowIndex = currentFirstRowIndex;
    currentFirstRowIndex = (currentFirstRowIndex + 1) % firstRowTotalImages;

    prevSecondRowIndex = currentSecondRowIndex;
    currentSecondRowIndex = (currentSecondRowIndex + 1) % secondRowTotalImages;

    imageWidthFirstRow = $firstRowImages.eq(prevFirstRowIndex).width();
    imageWidthSecondRow = $secondRowImages.eq(prevSecondRowIndex).width();

    $firstRow.css("transform", "translateX(-" + imageWidthFirstRow + "px)");
    $secondRow.css("transform", "translateX(-" + imageWidthSecondRow + "px)");

    $firstRowImages.eq(prevFirstRowIndex).fadeOut(500, function () {
      $(this).appendTo($firstRow).fadeIn(500);
    });
    $secondRowImages.eq(prevSecondRowIndex).fadeOut(500, function () {
      $(this).appendTo($secondRow).fadeIn(500);
    });

    setTimeout(function () {
      $firstRow.removeClass("sliding-transition").css("transform", "");
      $secondRow.removeClass("sliding-transition").css("transform", "");

      animationInProgress = false;
    }, 500);
  });

  $leftArrow.on("click", function () {
    if (animationInProgress) return;
    animationInProgress = true;

    prevFirstRowIndex = currentFirstRowIndex;
    currentFirstRowIndex =
      (currentFirstRowIndex - 1 + firstRowTotalImages) % firstRowTotalImages;

    prevSecondRowIndex = currentSecondRowIndex;
    currentSecondRowIndex =
      (currentSecondRowIndex - 1 + secondRowTotalImages) % secondRowTotalImages;

    imageWidthFirstRow = $firstRowImages.eq(currentFirstRowIndex).width();
    imageWidthSecondRow = $secondRowImages.eq(currentSecondRowIndex).width();

    $firstRow.css("transform", "translateX(-" + imageWidthFirstRow + "px)");
    $secondRow.css("transform", "translateX(-" + imageWidthSecondRow + "px)");

    $firstRow.prepend($firstRowImages.eq(currentFirstRowIndex)).fadeTo(500, 1);
    $secondRow
      .prepend($secondRowImages.eq(currentSecondRowIndex))
      .fadeTo(500, 1);

    setTimeout(function () {
      $firstRow.css("transform", "").addClass("sliding-transition");
      $secondRow.css("transform", "").addClass("sliding-transition");
    }, 10);

    setTimeout(function () {
      $firstRow.removeClass("sliding-transition");
      $secondRow.removeClass("sliding-transition");

      animationInProgress = false;
    }, 490);
  });
});
