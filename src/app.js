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
  randomDegs[i] = (Math.random() * 20) - 10;
  randomYs[i] = i < fallingLines.length - 1 ? Math.random() * -30 : -30;
}

function tilt() {
  let w = (falling.getBoundingClientRect().top - (window.innerHeight - falling.getBoundingClientRect().height)/2) / window.innerHeight;
  
  for (let i = 0; i < fallingLines.length; i++) {
    fallingLines[i].style.transform = 'rotateZ(' + (Math.min(w,0) * randomDegs[i]) + 'deg) translateY(' + (Math.min(w,0) * randomYs[i]) + 'vh)';
  }
}
