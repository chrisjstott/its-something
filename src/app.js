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
