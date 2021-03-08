'use strict';

{
  const words = [
    'frank ntilikina',
    'RJ barrett',
    'julius randle',
    'obi toppin',
    'mitchel robinon',
  ]

  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;

  const target = document.querySelector('#target');

  document.addEventListener('keydown', () => {
    if (isPlaying === true) {
      return;
    }
    isPlaying = true;
    startTime = Date.now();
    setWord();
  });

  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length),1)[0];
    target.textContent = word;
    loc = 0;
  }


  document.addEventListener('keydown', (e) => {
    //Enterキーを押してスタートに変更したい
    if (e.key !== word[loc]) {
      return;
    };
    loc++;
    target.textContent = '_'.repeat(loc) + word.substring(loc);

    if (loc === word.length) {
      if (words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.querySelector('#result');
        result.textContent = `New York Knicks (${elapsedTime} seconds)`
        return;
      }
      setWord();
    }
  });
}