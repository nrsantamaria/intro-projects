$(document).ready(function() {
  // $(".clickable").click(function() {
  //   $("#initially-showing-walrus").toggle();
  //   $("#initially-hidden-walrus").toggle();
  //   $("#initially-showing-pals").fadeToggle();
  //   $("#initially-hidden-pals").fadeToggle();
  //   $("#slideIn").slideToggle();
  //   $("#slideOut").slideToggle();
  //   $("#hidden-scary").hide();
  //   $("#showing-scary").slideToggle();
  // });
  $("button#green").click(function(){
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#yellow").click(function(){
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
  $("button#red").click(function(){
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});
