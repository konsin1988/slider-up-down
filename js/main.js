const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainImages = document.querySelector(".images");
const slidesCount = mainImages.querySelectorAll("div").length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  if (activeSlideIndex === 3) {
    transitionFast();
  } else {
    transitionSlow();
  }
  changeSlide("up");
});
downBtn.addEventListener("click", () => {
  if (activeSlideIndex === 0) {
    transitionFast();
  } else {
    transitionSlow();
  }
  changeSlide("down");
});

function transitionSlow() {
  sidebar.style.transition = `transform 0.4s`;
  mainImages.style.transition = `transform 0.4s`;
}
function transitionFast() {
  sidebar.style.transition = `transform 0.1s`;
  mainImages.style.transition = `transform 0.1s`;
}

function transform() {
  mainImages.style.transform = `translateY(-${activeSlideIndex * 100}vh)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * 100}vh)`;
}

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
    transform();
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex === -1) {
      activeSlideIndex = slidesCount - 1;
    }
    transform();
  }
}

screen.orientation.unlock();

// screen.addEventListener("orientationchange", () => {
//   console.log("Orientation is " + screen.orientation);
// });

// // console.log(screen.orientation.type);

window.addEventListener(
  "orientationchange",
  function () {
    if (window.orientation === 90) {
      screen.orientation.type = "landscape-primary";
    }
  },
  false
);

// console.log(screen.orientation.type);
// console.log(window.orientation);
