document.addEventListener('DOMContentLoaded', function() {
  const bulb = document.getElementById('bulb');
  const turnOnBtn = document.getElementById('turnOn');
  const turnOffBtn = document.getElementById('turnOff');

  turnOnBtn.addEventListener('click', function() {
    bulb.classList.remove('bulb-off');
    bulb.classList.add('bulb-on');
  });

  turnOffBtn.addEventListener('click', function() {
    bulb.classList.remove('bulb-on');
    bulb.classList.add('bulb-off');
  });
});
