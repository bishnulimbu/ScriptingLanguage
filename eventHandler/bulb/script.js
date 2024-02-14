const toggle = document.querySelector('#toggle');
const bulb = document.querySelector('#bulb');

toggle.addEventListener('click', function(event) {
  if (bulb.src.match('bulboff')) {
    bulb.src = './bulbon.png';
    toggle.innerHTML = 'Turn Off';
  } else {
    bulb.src = './bulboff.png';
    toggle.innerHTML = 'Turn On';
  }
});
