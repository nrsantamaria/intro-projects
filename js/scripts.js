$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var color = $("input:radio[name=color]:checked").val();

  if (color) {
    var quote = (100 - age) * 3;
    if (gender === "male" && age < 26 && color === "red") {
      quote +=250;
    }
    $("#rate").empty().append(quote);
    $("#quote").show();
  }
    else {
      $(".radio").addClass("has-error");
    }

    event.preventDefault();
  });
});
