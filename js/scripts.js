$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var cat1Input = $("input#cat1").val();
    var cat2Input = $("input#cat2").val();
    var fruitInput= $("input#fruit").val();
    var adjectiveInput = $("input#adjective").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();
    // var spanOutput = $("output#story").val();

    $(".cat1").text(cat1Input.toUpperCase());
    $(".cat2").text(cat2Input.toUpperCase());
    $(".fruit").text(fruitInput.toUpperCase());
    $(".adjective").text(adjectiveInput.toUpperCase());
    $(".verb").text(verbInput.toUpperCase());
    $(".noun").text(nounInput.toUpperCase());

    $("#story").show();

    event.preventDefault();
  });
});
