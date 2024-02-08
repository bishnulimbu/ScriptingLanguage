const heading = document.querySelector('#buttonHeading');
const button = document.querySelector('#button1')


//dom event and event handling

button.addEventListener('click', function(event) {
  heading.style.color = 'red';
  heading.style.fontSize = '70px';
  console.log('button clicked')

});
