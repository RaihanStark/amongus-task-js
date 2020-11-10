// Random Number Generator
function createRandomArray(quantities) {
  let num = [];
  for (let i = 0; i < quantities; i++) {
    num.push(i + 1);
  }
  return num.sort(() => 0.5 - Math.random());
}

// Playing Audio
function playAudio(url) {
  new Audio(url).play();
}

// Interval n times
function setIntervalX(callback, delay, repetitions) {
  var x = 0;
  var intervalID = window.setInterval(function () {
    callback();

    if (++x === repetitions) {
      window.clearInterval(intervalID);
    }
  }, delay);
}
