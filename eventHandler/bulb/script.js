// const  = document.querySelector('#switch');


const bulbswitch = document.querySelector('#bulbswitch');
const bulb = document.querySelector('#bulb');

toggle.addEventListener(click, function(event) {
  // toggle.classList.add('bulb-on');

  console.log(bulb.src);
  if (toggle.src.match('off')) {
    bulb.src = './bulbon.png';
    button.innerHTML = 'turn off';
  } else {
    bulb.src = './bulboff.png';
    button.innerHTML = 'turn on';
  }


})
