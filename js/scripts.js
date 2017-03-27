$(document).ready(function(){
  $("form#formOne").submit(function(event){
  event.preventDefault()
  var sentence = []
  blanks.forEach(function(blank){
    var userInput = $("input#" + blank).val();
    sentence.push(userInput);
  });

  var index = 0;
  sentence.forEach(function(sentence){
    $("." + blanks[index]).append(sentence);
    index++;
  });
  function (sentence)
});
});
