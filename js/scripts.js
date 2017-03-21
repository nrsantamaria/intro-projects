$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing-walrus").toggle();
    $("#initially-hidden-walrus").toggle();
    $("#initially-showing-pals").fadeToggle();
    $("#initially-hidden-pals").fadeToggle();
    $("#slideIn").slideToggle();
    $("#slideOut").slideToggle();

  });
});
