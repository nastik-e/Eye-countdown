let time = 3;

let workCycleTime = [50, 40, 30];

let isWork = true;





const changeStatus = (event) => {
  if (isWork === true) {
    changeStyleButton(event, "work", "rest");
    showMessage();
    isWork = false;
  } else {
    changeButton(event, "rest", "work");
    showMessage();
    isWork = true;
  }
};
conditionButton.addEventListener("click", 
// changeStatus
startCountDownCycle
);
