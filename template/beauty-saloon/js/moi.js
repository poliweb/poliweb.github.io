// Скрипт для меню + кнопка гамбургер
function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger-menu_button', '.burger-menu_lines');
	let links = menu.find('.burger-menu_link');
	let overlay = menu.find('.burger-menu_overlay');
	
	button.on('click', (e) => {
	  e.preventDefault();
	  toggleMenu();
	});
	
	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());
	
	function toggleMenu(){
	  menu.toggleClass('burger-menu_active');
	  
	  if (menu.hasClass('burger-menu_active')) {
		 $('body').css('overlow', 'hidden');
	  } else {
		 $('body').css('overlow', 'visible');
	  }
	}
 }
 
 burgerMenu('.burger-menu');
 // ==Скрипт для меню + кнопка гамбургер

 // Скрипт для Модуля Аккордион
 (function($) {
	$('.accordion > li:eq(0) .a_taitl').addClass('active').next().slideDown();

	$('.accordion .a_taitl').click(function(j) {
			var dropDown = $(this).closest('li').find('p');

			$(this).closest('.accordion').find('p').not(dropDown).slideUp();

			if ($(this).hasClass('active')) {
					$(this).removeClass('active');
			} else {
					$(this).closest('.accordion').find('a.active').removeClass('active');
					$(this).addClass('active');
			}

			dropDown.stop(false, true).slideToggle();

			j.preventDefault();
	});
})(jQuery);
 // ==Скрипт для Модуля Аккордион

 // Инсталяция модуля Корусель Owl Carousel
 $(document).ready(function() {
	$('.owl-carousel').owlCarousel({
	  loop: true,
	  margin: 10,
	  responsiveClass: true,
	  responsive: {
		 0: {
			items: 1,
			nav: true
		 },
		 600: {
			items: 3,
			nav: false
		 },
		 1000: {
			items: 6,
			nav: true,
			loop: true,
			margin: 20
		 }
	  }
	})
 })
 // ==Инсталяция модуля Корусель Owl Carousel


