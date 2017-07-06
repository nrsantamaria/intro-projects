$(document).ready(function(){
  var height = parseInt(prompt("What is your height in feet?"));

  if (height >= 7) {
    $('#rides7').show();
  } else if (height < 5) {
    $('#rides5').show();
  } else {
    $('#rides5-7').show();
  }
});
