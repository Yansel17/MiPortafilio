//Ir arriba
$(document).ready(function(){

	$('.go-to-top').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.go-to-top').slideDown(300);
		} else {
			$('.go-to-top').slideUp(300);
		}
	});

});

//Validación en javascript acá