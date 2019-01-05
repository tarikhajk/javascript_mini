// Check off specific "li"s by striking through them when clicked
$("ul").on("click", "li", function () {
  $(this).toggleClass("todo_done");
});

// Add "li" when enter is pressed
$("input").on("keypress", function (event) {
  if (event.which === 13) {
    var todo = $(this).val();
    $("ul").append("<li><span><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> </span>" + todo + "</li>");
    $(this).val("")
  }
})

$("h1 i").on("click",function() {
  $("input").fadeToggle();
})

// Click on X to fade out then delete todo
$("ul").on("click", "span", function (event) {
  $(this).parent().fadeOut(function () {
    $(this).remove();
  });
  event.stopPropagation();
})
