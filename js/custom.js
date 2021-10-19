
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});



btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$(document).ready(function(){
  $(".ft-btns ul li").on('click', function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active')
  })
})
function savesubcat(){
  return null
}