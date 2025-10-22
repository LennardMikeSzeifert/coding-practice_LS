// window.addEventListener(`keydown`, function (e) {
//   const audio = document.querySelector(`audio[data-key="${e.code}"]`);
//   const key = document.querySelector(`div[data-key="${e.code}"]`);
//   if (!audio) {
//     return;
//   }
//   audio.currentTime = `0`; // rewind audio to the start
//   audio.play();
//   key.classList.add(`playing`);

//   function removeTransition(e) {
//     if (e.propertyName !== `transform`) return; // skip it if it's not a transform

//     this.classList.remove(`playing`);
//   }

//   const keys = document.querySelectorAll(`.key`);
//   keys.forEach((key) =>
//     key.addEventListener(`transitionend`, removeTransition)
//   );
// });

// Cleaner version:

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`div[data-key="${e.code}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = `0`; // rewind audio to the start
  audio.play();
  key.classList.add(`playing`);

  function removeTransition(e) {
    if (e.propertyName !== `transform`) return; // skip it if it's not a transform

    this.classList.remove(`playing`);
  }

  const keys = document.querySelectorAll(`.key`);
  keys.forEach((key) =>
    key.addEventListener(`transitionend`, removeTransition)
  );
}

window.addEventListener(`keydown`, playSound);
