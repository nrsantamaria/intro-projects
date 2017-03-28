$(document).ready(function(){
  var vowels = ["a", "e", "i", "o", "u"];
  var puzzle = "supercalifragilisticexpialidocious";
  var thePuzzle = puzzle.substring(0);
    for (var index = 0; index < vowels.length; index ++) {
			var thePuzzle = thePuzzle.split(vowels[index]).join("-");

    }
    $(".puzzle").text(puzzle);
    $(".thePuzzle").text(thePuzzle);
});
