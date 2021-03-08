'use strict';

{
  const timer = document.querySelector("#timer");
  const start = document.querySelector("#start");
  const stop = document.querySelector("#stop");
  const reset = document.querySelector("#reset");

  let startTime;
  let timeOutId;
  let elapsedTime = 0;
  
  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime);
    const m = String(d.getMinutes()).padStart(2,'0');
    const s = String(d.getSeconds()).padStart(2,'0');
    const ms = String(d.getMilliseconds()).padStart(3,'0');
    timer.textContent = `${m}:${s}.${ms}`;

    timeOutId = setTimeout(() => {
      countUp();
    }, 10 );
  }

  function Initial() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
  }

  function Running() {
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
  }

  function Stopped() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
  }

  Initial();

  start.addEventListener('click', () => {
    Running();
    startTime = Date.now();
    countUp();
  });

  stop.addEventListener('click', () => {
    Stopped();
    clearTimeout(timeOutId);
    elapsedTime += Date.now() - startTime;
  });

  reset.addEventListener('click', () => {
    Initial();
    timer.textContent = '00:00.000';
    elapsedTime = 0;
  });
  
}