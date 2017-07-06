$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["cat1", "cat2", "fruit", "adjective", "verb", "noun"];
    // var cat1Input = $("input#cat1").val();
    // var cat2Input = $("input#cat2").val();
    // var fruitInput= $("input#fruit").val();
    // var adjectiveInput = $("input#adjective").val();
    // var verbInput = $("input#verb").val();
    // var nounInput = $("input#noun").val();

    // $(".cat1").text(cat1Input.toUpperCase());
    // $(".cat2").text(cat2Input.toUpperCase());
    // $(".fruit").text(fruitInput.toUpperCase());
    // $(".adjective").text(adjectiveInput.toUpperCase());
    // $(".verb").text(verbInput.toUpperCase());
    // $(".noun").text(nounInput.toUpperCase());
    //
    // $("#story").show();
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      // console.log(userInput);
      $("." + blank).text(userInput).val();
      // console.log(userInput);
    });
    $("#story").show();
    event.preventDefault();
  });
});
