alert('welcome');
let wannaBUY = document.querySelector('button');
wannaBUY.addEventListener('click', inputSize);


function inputSize() {
    let size = prompt('enter size');
    wannaBUY.textContent = 'sizes' + size;
}