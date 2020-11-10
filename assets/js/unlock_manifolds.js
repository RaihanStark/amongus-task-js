const number_panel = document.getElementsByClassName("number");
const inner_glass = document.getElementsByClassName("inner-glass")[0];
const randomed_number = createRandomArray(10);
let counter = 0;
let clicked_number;

function numberClicked(element) {
  element.target.classList.add("clicked");
}

function clearClicked() {
  clicked_number = undefined;
  for (let item of number_panel) {
    item.classList.remove("clicked");
  }
}

for (let item of number_panel) {
  // Render random number to DOM
  number_panel[counter].innerText = randomed_number[counter];

  // Click Listener on Panel
  item.onclick = function (e) {
    current_number = parseInt(e.target.innerText);
    console.log(current_number);
    // Initial Click
    if (clicked_number == undefined && current_number == 1) {
      clicked_number = current_number;
      numberClicked(e);
    }
    // Can only click next number
    else if (
      current_number > clicked_number &&
      current_number <= clicked_number + 1
    ) {
      clicked_number = current_number;
      numberClicked(e);

      if (current_number == 10) {
        playAudio("win.wav");
        setTimeout(() => {
          clearClicked();
        }, 500);
      }
    }
    // If click same number or lower number
    else if (current_number <= clicked_number) {
    }
    // if click wrong number
    else {
      clearClicked();
      setIntervalX(
        () => {
          inner_glass.classList.toggle("wrong");
        },
        200,
        4
      );
    }
  };

  counter++;
}
