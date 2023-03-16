
///////first way//////////

  $(".footer-links-wrapper h3").on("click", function(){
    $(this).next("ul").slideToggle();
  });

  
$('.footer-links-wrapper h3').on('click', function() {
  if ($(this).hasClass('expanded')) {
    $(this).removeClass('expanded');
  } else {
    $(this).addClass('expanded');
  }
});



////////another way ///////////

// $(".footer-links-wrapper h3").on("click", function(){
//   $(this).next("ul").slideToggle();
//   $(this).toggleClass("expanded");
// });
