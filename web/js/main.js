define([
  "jquery",
  "bootstrap_select",
  "slick",
  'perfect_scrollbar',
  'rjsResolver'
],
function($, selectpicker, slick, PerfectScrollbar,resolver) {
  "use strict";


   function initScollbar()
   {
       $('[data-action]').each(function(index, element){
           if($(element).data('action') === 'scroll'){
               new PerfectScrollbar(element);
           }
       });
   }

   resolver(initScollbar.bind());
   new PerfectScrollbar('.perfect-scrollbar');
   //new PerfectScrollbar('.modal-inner-wrap');


  $('select').not('.super-attribute-select').selectpicker('maxOptions', 2);

  $(".categories-slider .categories").slick({
      accessibility: true,
      adaptiveHeight: true,
      dots: true,
      infinite: false,
      slidesToScroll: 1,
      slidesToShow:3,
      responsive: [
          {
              breakpoint: 1199,
              settings: {
                  slidesToShow: 2,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
              }
          }
      ]
  });

		/**
		*****************************************************************************************************************************************
		* Media queries
		*/
		const xs = window.matchMedia( "(max-width: 767px)" );
		const sm = window.matchMedia( "(min-width: 768px) and (max-width: 991px)");
		const md = window.matchMedia( "(min-width: 992px) and (max-width: 1198px)" );
		const lg = window.matchMedia( "(min-width: 1199px)" );
		//const lg = window.matchMedia( "(min-width: 1199px)" );
		//if(md.matches || lg.matches){


		/**
		*****************************************************************************************************************************************
		* Click events
		*/
		$('#header-toggle').click(function()
		{
            $(this).toggleClass('closed open');
			$('#header-navigation').toggleClass('closed open');
			$('body').toggleClass('navigation-open navigation-closed');

		});

        $('#footer-back-to-top').click(function()
		{
            $('html,body').animate({
                scrollTop: 0
            }, 700);
		});







		/**
		*****************************************************************************************************************************************
		* Scroll events
		*/
		$(window).scroll(function()
		{
            checkHeaderBar();
            if($(window).scrollTop() + $(window).height() == $(document).height())
            {
                $('#footer-back-to-top').addClass('visible');
            } else {
                $('#footer-back-to-top').removeClass('visible');
            }

        });


		/**
		*****************************************************************************************************************************************
		* Resize events
		*/
		$(window).resize(function()
		{
			if($(window).width() > 1920)
			{
			//	$('#floating').css('right',$('.body').css('margin-right'));
				$('#header-bar').css({'left':$('.body').css('margin-left'),'right':$('.body').css('margin-right')});
			//	$('#header-menu').css({'left':$('.body').css('margin-left'),'right':$('.body').css('margin-right')});
			} else {
			//	$('#floating').css('right',0);
				$('#header-bar').css({'left':0,'right':0});
			//	$('#header-menu').css({'left':0,'right':0});
			}
		});


		/**
		*****************************************************************************************************************************************
		* Functions
		*/
		function checkHeaderBar()
		{
			var screen_top = $(window).scrollTop();
			var main = $('#main').offset().top ;
			if(screen_top > main)
			{
                //$('#header-slider').css('margin-top',$('#header-bar').height());
                $('#header').css('margin-bottom',$('#header-bar').height());
				$('#header-bar').addClass('fixed');

			} else {
                //$('#header-slider').css('margin-top',0);
                $('#header').css('margin-bottom',0);
				$('#header-bar').removeClass('fixed');
			}
		}


		/**
		*****************************************************************************************************************************************
		* Ready
		*/
		checkHeaderBar();
		/*
		$('.popup-image').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });


		$(".halo3-slideshow .posts-wrapper").slick({
            accessibility: true,
			adaptiveHeight: true,
			dots: true,
            infinite: false,
            slidesToScroll: 1,
			slidesToShow:3,
            responsive: [
				{
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
		*/

});
