$(document).ready(function() {
  $("#formOne").submit(function() {
    var cat1Input = $("input#cat1").val();
    var cat2Input = $("input#cat2").val();
    var fruitInput= $("input#fruit").val();
    var adjectiveInput = $("input#adjective").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();


    $(".cat1").text(cat1Input);
    $(".cat2").text(cat2Input);
    $(".fruit").text(fruitInput);
    $(".adjective").text(adjectiveInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});
