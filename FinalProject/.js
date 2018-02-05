$(document).ready(function(){
    $(this).scrollTop(0);
});


$(document).ready(function () {
	
	$(window).resize(function(){
		console.log($(window).width());

		if($(window).width()>'875'){
			$('#mobile-nav').hide();

		}
    })
    

$('#burger').click(function(){
    $('#mobile-nav').slideToggle();
    $('.about').css("padding-top",0);
})

// if($('#mobile-nav').hasClass('display','flex')){
//     $('.about').css("padding",80);
// } else {
//     $('.about').css("padding",0);
// }

})


$(".buttonabout").click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 1000);
});
$(".buttonwork").click(function() {
    $('html, body').animate({
        scrollTop: $(".work").offset().top
    }, 1000);
});
$(".buttoncontact").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 1000);
});

$('form').submit(function () {

  })