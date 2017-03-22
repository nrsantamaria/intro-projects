// business backend logic
var blanks = ["#requester", "#recipient", "#song", "#phone-number", "#date", "#time"];







// user interface / frontend logic
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    blanks.forEach(function(blank){
      var userInput = $("#input" + blank).val();
      $("." + blank).text(userInput).val();

    });
    $("#order").show();
    event.preventDefault();
  });


});
