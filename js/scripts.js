// business backend logic



// user interface / frontend logic
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["requester", "recipient", "song", "phone-number", "date", "time"];
    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput).val();
    });
  $("#order").show();
  event.preventDefault();
  });
});
