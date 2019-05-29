function swipeRight() {
  var className = 'recsGamepad__button End(15px)';
  var likeButton = document.getElementsByClassName(className)[0];
  likeButton.click();
}

function getRandomDelay() {
  return Math.round(Math.random() * (2000 - 500)) + 500;
}

(function autoSwiper() {
  var delay = getRandomDelay();
  setTimeout(function () {
    swipeRight();
    autoSwiper();
  }, delay);
}());
