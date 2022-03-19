const elem = document.getElementById("elem");
const button = document.getElementById("button");

button.addEventListener('click', () => {
  if (elem.webkitRequestFullScreen) {
    elem.webkitRequestFullScreen();
  }
});

elem.addEventListener('focus', () => {
	elem.textContent += ' focus';
});

elem.addEventListener('blur', () => {
	elem.textContent += ' blur';
});