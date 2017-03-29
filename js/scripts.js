$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var leapYear = function(year) {
      return false;
    };
// jQuery user interface logic here.
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
