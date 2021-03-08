'use strict';

{
  const btn = document.querySelector('#btn');
  btn.textContent = "click!";
  
  btn.addEventListener('click', () => {

    const results = ['大吉','中吉','吉','凶',];

    const n = Math.random();
    if (n < 0.1)  {
      btn.textContent = results[0];
    } else if (n < 0.4) {
      btn.textContent = results[1];
    } else if (n < 0.7) {
      btn.textContent = results[2];
    } else {
      btn.textContent = results[3];
    } 

})
}