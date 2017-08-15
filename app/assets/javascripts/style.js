$(function(){
  $("input").focus(function(){
    $("input").css('background-color', '#ffff00')
  }).blur(function(){
    $("input").css('background-color', '#ffffff')
  });
});




// test

var myAnimation = anime({
  targets: ['.blue', '.green'],
  translateX: '13rem',
  rotate: 180,
  borderRadius: '8px',
  duration: 2000,
  loop: true
});