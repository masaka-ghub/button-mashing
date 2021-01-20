let clickCount = 0;
let playing = false;
let targetCount = 10;
let spendTime = 0;
let timerId = 0;
const clickTarget = document.querySelector(".js-click-target");
const resetBtn = document.querySelector(".js-reset");
const counterText = document.querySelector(".js-counter");
const targetCountText = document.querySelector(".js-target-count");
const spendTimeText = document.querySelector(".js-spend-time");
const timerLabelText = document.querySelector(".js-timer-label");

const countChanger = document.getElementsByClassName("js-change-count");
Array.prototype.forEach.call(countChanger, (btn) => {
  btn.addEventListener("click", (e) => {
    targetCount = btn.getAttribute("data-count");
    targetCountText.innerHTML = targetCount;
  });
});

const start = () => {
  clickCount = 0;
  time = 0;
  playing = true;
  timerLabelText.innerHTML = "経過時間：";
  counterText.innerText = clickCount;
  spendTimeText.innerHTML = time / 1000;

  timerId = setInterval(() => {
    time += 10;
    spendTimeText.innerHTML = (time / 1000).toFixed(2);
  }, 10);
};

const complete = () => {
  playing = false;
  timerLabelText.innerHTML = "連打終了！　記録：";
  clearInterval(timerId);
  clickTarget.disabled = true;
  setTimeout(() => (clickTarget.disabled = false), 2000);
};

const reset = () => {
  playing = false;
  clickCount = 0;
  counterText.innerText = clickCount;
  spendTimeText.innerHTML = 0;
  timerLabelText.innerHTML = "経過時間：";
  clickTarget.disabled = false;
  clearInterval(timerId);
};

// 初回クリックでスタート
clickTarget.addEventListener("click", () => {
  if (playing) return;

  start();
  playing = true;
});

// クリック時のカウントアップ
clickTarget.addEventListener("click", () => {
  if (!playing) return;

  counterText.innerText = ++clickCount;
  if (clickCount >= targetCount) {
    complete();
  }
});

// リセットボタン
resetBtn.addEventListener("click", () => reset());
