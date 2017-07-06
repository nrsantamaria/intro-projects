$(document).ready(function(){
  $("form#fortune-form").submit(function(event){
    event.preventDefault();
    var count = 0;
    $("input:checkbox[name=question]:checked").each(function(){
      count += 1
    }
    if count > 3 {
      $("#excellent").show();
    } else if < 1 {
      $("#awful").show();  
    }
  });
});
