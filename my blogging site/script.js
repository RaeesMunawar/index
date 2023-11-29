// Add interactivity here if needed
// Example: Change background color on button click
document.addEventListener('DOMContentLoaded', function() {
    var changeColorButton = document.getElementById('changeColorButton');
  
    if (changeColorButton) {
      changeColorButton.addEventListener('click', function() {
        document.body.style.backgroundColor = getRandomColor();
      });
    }
  
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });
  