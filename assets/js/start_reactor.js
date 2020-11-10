const pattern = createRandomArray(9);
const blackbox = document.getElementsByClassName("black")[0];
const actionbutton = document.getElementsByClassName("action-box");
const clicktostart = document.getElementsByClassName("clicktostart")[0];
let pattern_flash_times = [3, 5, 7, 9];
let run = false;
let c = 0;

function turnOnIndicator(panel, number) {
  panel = document.getElementById(panel);
  indicator_light = panel.getElementsByClassName("indicator-light");
  indicator_light[number - 1].classList.toggle("activated");
}

function flash(number, delay = 200) {
  const el = document.getElementsByClassName("box")[number - 1];

  setIntervalX(
    () => {
      el.classList.toggle("flash");
    },
    delay,
    2
  );
}

function runFlashPattern() {
  pattern_loop: for (let p of pattern_flash_times) {
    // Run Flash Pattern
    for (let [index, i] of pattern.entries()) {
      run = true;
      if (parseInt(index) == parseInt(p)) {
        pattern_flash_times.shift();
        break pattern_loop;
      }

      setTimeout(() => {
        console.log(index + 1);
        flash(i);
      }, c);
      c = c + 500;
    }
  }
}

// Event Listener

blackbox.onclick = function (e) {
  // If not run yet
  if (run == false) {
    clicktostart.remove();
    runFlashPattern();
  }
};

for (let item of actionbutton) {
  item.onclick = function (e) {
    console.log();
    setIntervalX(
      () => {
        e.target.classList.toggle("flash");
      },
      200,
      2
    );
  };
}
