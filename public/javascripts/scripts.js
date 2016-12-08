collapsible = {
  initialize: function(){
    $(".collapsible").each(function(i){
      $(this).children(".title").click(function(e){
        $(this).siblings(".collapsible-group:first").toggleClass("show");
      });
    });
  }
}
$(document).ready(function(){
  collapsible.initialize();
});