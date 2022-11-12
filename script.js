const countDownEl = document.getElementById("countdown");
const conditionButton = document.getElementById("condition");
const buttonHistory = document.querySelector(".buttons__history");
const buttonReset = document.querySelector(".buttons__reset");
const sound = document.querySelector(".notifications");
const message = document.querySelector(".text");

// let workTime = [3000, 2400, 1800];
let workTime = [2, 4, 6];
// let restTime = [600, 1200, 1800];
let restTime = [3, 5, 7];
let isNowWork = false;
let cycleIndex = 0;
let idInterval;

const startCountDownCycle = (time) => {
  console.log(idInterval);
  clearInterval(idInterval);
  console.log("works");
  const updateCountDown = () => {
    if (time < 0) {
      clearInterval(idInterval);
      return;
    }
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
  };
  idInterval = setInterval(updateCountDown, 1000);
};

function changeStyleButton(from, to, text) {
  conditionButton.classList.replace(from, to);
  conditionButton.innerHTML = text;

}

const startWork = () => {
  startCountDownCycle(workTime[cycleIndex]);
  changeStyleButton("rest", "work", 'Have Rest');

  message.classList.add("hidden");
  isNowWork = true;
};

const startRest = () => {
  startCountDownCycle(restTime[cycleIndex]);
  changeStyleButton("work", "rest", 'Start Work');
  message.classList.remove("hidden");
  isNowWork = false;
  if (cycleIndex === restTime.indexOf(restTime.at(-1))) {
    cycleIndex = 0;
  } else {
    cycleIndex++;
  }
};

function changeStatus(event) {
  !isNowWork ? startWork(event) : startRest();
}

conditionButton.addEventListener("click", changeStatus);
