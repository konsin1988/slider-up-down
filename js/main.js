const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainImages = document.querySelector(".images");
const slidesCount = mainImages.querySelectorAll("div").length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});
downBtn.addEventListener("click", () => {
  changeSlide("down");
});

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
