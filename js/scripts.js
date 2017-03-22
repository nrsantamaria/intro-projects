// business backend logic



// user interface / frontend logic
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["requester", "recipient", "song", "phone-number", "date"];
    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
      console.log($("input#" + blank).val());
    });
    var time = $("select#time").val();
    $(".time").text(time);
  $("#order").show();
  event.preventDefault();
  });
});
