// Check off specific "li"s by striking through them when clicked
$("li").on("click", function() {
  $(this).toggleClass("todo_done");
});
