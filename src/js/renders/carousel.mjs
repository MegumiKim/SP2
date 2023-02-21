import { userAlert } from "./userAlert.mjs";
import { postCarousel } from "../templates/carousel.mjs";

export function carousel(data, parent) {
  try {
    renderSlide(data, parent, 0);

    const prev = document.querySelector(".carousel-control-prev");
    const next = document.querySelector(".carousel-control-next");

    if (data.media.length < 2) {
      prev.style.display = "none";
      next.style.display = "none";
    }

    if (!data.media.length) {
      renderSlide(data, parent, 0);
    }
    next.addEventListener("click", showNextSlide);
    prev.addEventListener("click", showPrevSlide);

    let index = 0;
    function showNextSlide() {
      index = (index + 1) % data.media.length;
      renderSlide(data, parent, index);
    }
    function showPrevSlide() {
      index = Math.abs((index - 1) % data.media.length);
      renderSlide(data, parent, index);
    }
  } catch (e) {
    userAlert(parent, "error occurred");
    throw new Error(e);
  }
}

function renderSlide(data, parent, index) {
  parent.clearHTML();
  const currentMedia = data.media[index];
  const altTxt = data.title;
  postCarousel(currentMedia, altTxt, parent);
}