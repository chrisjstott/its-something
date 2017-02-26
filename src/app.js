function letterWrap(element) {
  let text = element.innerHTML;
  let output = '';
  
  for (let letter of text) {
    output += '<span class="letter">' + letter + '</span>';
  }
  element.innerHTML = output;
}

let titles = document.querySelectorAll('.title-line');
for (let title of titles) {
  letterWrap(title);
}

let falling = document.querySelector('.falling');
let fallingLines = falling.querySelectorAll('.falling-line');
window.addEventListener('scroll', tilt);

let randomDegs = [];
let randomYs = [];
for (let i = 0; i < fallingLines.length; i++) {
  randomDegs[i] = (Math.random() * 36) - 18;
  randomYs[i] = i < fallingLines.length - 1 ? Math.random() * -30 : -30;
}

function tilt() {
  let w = (falling.getBoundingClientRect().top - (window.innerHeight - falling.getBoundingClientRect().height)/2) / window.innerHeight;
  
  if (w < 0) {
    for (let i = 0; i < fallingLines.length; i++) {
      fallingLines[i].style.transform = 'rotateZ(' + (w * randomDegs[i]) + 'deg) translateY(' + (w * randomYs[i]) + 'vh)';
    }
  }
}
